"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  /** 245..255 near-white range to remove */
  minKey?: number;
  /** 255 == fully transparent */
  maxKey?: number;
  /** soften edge */
  feather?: number;
  /** if true, mirror canvas */
  flipX?: boolean;
};

export default function ChromaKeyVideo({
  src,
  className,
  style,
  minKey = 245,
  maxKey = 255,
  feather = 10,
  flipX = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  const range = useMemo(() => {
    const a = Math.max(0, minKey);
    const b = Math.max(a + 1, maxKey);
    return { a, b };
  }, [minKey, maxKey]);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let cancelled = false;

    const setup = async () => {
      try {
        // Ensure dimensions are correct before starting.
        await video.play();
      } catch {
        // Autoplay might be blocked; still proceed with draw loop.
      }

      if (video.videoWidth === 0 || video.videoHeight === 0) {
        // Wait until metadata is ready.
        await new Promise<void>((resolve) => {
          const onLoaded = () => resolve();
          video.addEventListener("loadedmetadata", onLoaded, { once: true });
        });
      }

      if (cancelled) return;

      const w = video.videoWidth;
      const h = video.videoHeight;
      canvas.width = w;
      canvas.height = h;
    setReady(true);

      let lastLog = 0;

      const tick = () => {
        if (cancelled) return;

        // Draw current video frame.
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (vw === 0 || vh === 0) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        // Keep canvas in sync if dimensions change.
        if (canvas.width !== vw || canvas.height !== vh) {
          canvas.width = vw;
          canvas.height = vh;
        }

        ctx.save();
        if (flipX) {
          ctx.scale(-1, 1);
          ctx.drawImage(video, -vw, 0, vw, vh);
        } else {
          ctx.drawImage(video, 0, 0, vw, vh);
        }
        ctx.restore();

        // Read pixels.
        const imageData = ctx.getImageData(0, 0, vw, vh);
        const data = imageData.data;

        // Soft alpha ramp for near-white pixels.
        // brightness approx: max channel (more stable for white)
        // alpha = 1 - smoothstep(minKey..255)
        const minB = range.a;
        const maxB = range.b;
        const t0 = minB;
        const t1 = Math.min(255, maxB);
        const tFeather0 = Math.max(0, t0 - feather);

        // TEMP DIAGNOSTICS: sample center pixel brightness and computed alpha
        const cx = Math.floor(vw / 2);
        const cy = Math.floor(vh / 2);
        const centerIdx = (cy * vw + cx) * 4;
        const centerR = data[centerIdx];
        const centerG = data[centerIdx + 1];
        const centerB = data[centerIdx + 2];
        const centerBrightness = Math.max(centerR, centerG, centerB);

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const brightness = Math.max(r, g, b);
          if (brightness < t0) continue;

          // smoothstep over [t0-feather, t1]
          const x0 = tFeather0;
          const x1 = t1;
          let t = (brightness - x0) / Math.max(1, x1 - x0);
          if (t < 0) t = 0;
          if (t > 1) t = 1;
          const smooth = t * t * (3 - 2 * t); // smoothstep

          // As brightness approaches 255 -> alpha -> 0
          const alpha = 1 - smooth;
          data[i + 3] = Math.round(data[i + 3] * alpha);
        }

        // Log once per second to avoid console spam
        const now = Date.now();
        if (!lastLog || now - lastLog > 1000) {
          lastLog = now;
          const newCenterAlpha = data[centerIdx + 3];
          // eslint-disable-next-line no-console
          console.log("ChromaKeyVideo debug", {
            canvas: { width: vw, height: vh },
            video: { width: video.videoWidth, height: video.videoHeight },
            centerRGB: { r: centerR, g: centerG, b: centerB },
            centerComputedAlpha: newCenterAlpha,
            keyRange: { minKey: range.a, maxKey: range.b },
          });
        }

        ctx.putImageData(imageData, 0, 0);

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    setup();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [src, range.a, range.b, feather, flipX]);

  return (
    <div className={className} style={style}>
      {/* Hidden video source */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      />

      {/* Rendered chroma-keyed result */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: ready ? 1 : 0, background: "transparent" }}
      />


      {/* No fallback UI to avoid interfering with chroma-key */}
    </div>
  );
}

