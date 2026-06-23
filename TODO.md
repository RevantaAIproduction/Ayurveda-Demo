# TODO - Supraja Clinic website rebrand

## Step 1 — Repo discovery (done)
- Reviewed key files: `app/layout.tsx`, `components/site.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/Hero.tsx`, `components/About.tsx`, `components/HowAyurAuraWorks.tsx`, `components/Doctors.tsx`, `components/OurServices.tsx`, `components/Contact.tsx`.

## Step 2 — Global renaming
- Replace all `AyurAura` -> `Supraja Clinic` in brand/UI copy.

## Step 3 — SEO + metadata + structured data
- Update `app/layout.tsx` metadata title/description.
- Add Open Graph + Twitter tags.
- Add JSON-LD structured data for Clinic + Doctor.

## Step 4 — Homepage content refactor
- Update `components/Hero.tsx` headline/subheadline/CTAs.
- Add `Contact Us` CTA scrolls to `#contact`.
- Add a small About preview block that links to `/about`.
- Reposition `OurServices` for women’s wellness focus.

## Step 5 — About route (/about)
- Create `app/about/page.tsx`.
- Implement premium doctor-centric About page content.
- Use `/doctor-about.png`.

## Step 6 — Contact section (#contact)
- Implement `components/Contact.tsx` (currently returns null) and ensure it renders a premium contact block on homepage.

## Step 7 — Doctor-centred trust updates
- Update doctor-related components (`Doctors.tsx`, `Experts.tsx`, etc.) to center Dr. Sunitha Joshi.

## Step 8 — Audit & cleanup
- Ensure no leftover “AyurAura” text in visible UI.
- Ensure navbar links and headings match the new brand.

## Step 9 — Build & test
- Run `npm run build` and `npm run dev` sanity checks.

