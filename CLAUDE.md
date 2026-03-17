# Hilary Lucas Counselling Services - Website

## TODO / Reminders
(leave empty — we'll add to this as we go)

## Project Overview
This is the professional website for Hilary Lucas, a Counsellor based in Alberta specializing in neurodivergent youth and adults. The site supports her private practice, group work, and future workshops. It uses a trauma-informed, person-centred voice and is designed to feel welcoming to all people — not gendered or targeted to any one demographic. The site will grow over time to include interactive tools, resources, and workshop listings.

## Working Style
- Hilary is a counsellor, not a developer. Explain what you're doing in plain English — briefly, not in a lecture.
- Work at a comfortable pace. Quality over speed.
- When stuck or needing clarity, ask Hilary before guessing.
- Hilary trusts you to work — give her a clear summary of what you changed and what to look at, then stop and wait.
- **Never delete any file, component, or content without checking with Hilary first.**
- Never push to GitHub without confirming with Hilary first.

## Visual / CSS Changes - HARD STOP
You CANNOT see rendered output. For ANY visual change:
1. Make ONE change only
2. STOP and say: "I made [change]. Please check how it looks."
3. Wait for confirmation before touching anything else.

## Brand & Visual Style
- **Colours:** Deep greens, rich golds, warm earth tones — nature-inspired, grounded palette
- **Feel:** Clean, neat, inviting, inclusive — welcoming to all people regardless of gender
- **Inspiration:** Plants, nature, warmth, safety
- **Logo:** To be added later

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (account created, project to be set up when needed)
- **Hosting:** Vercel (connected to GitHub, auto-deploys on push)
- **Version control:** GitHub — repo at https://github.com/hlucas34-ai/HilaryLucasCounsellingServices

## File Structure
```
HilaryLucasCounsellingServices/
├── src/
│   └── app/
│       ├── layout.tsx       # Site-wide layout and fonts
│       ├── page.tsx         # Home page
│       ├── globals.css      # Global styles
│       ├── about/           # About page
│       ├── services/        # Services page
│       ├── booking/         # Booking page
│       ├── groups/          # Groups & Workshops page
│       ├── resources/       # Resources page
│       └── regulation/      # Interactive Regulation Game
├── public/                  # Images, icons, static assets
├── CLAUDE.md                # This file
└── package.json
```

## Key Pages & Features
- **Home** — welcoming landing page, clear call to action
- **About** — Hilary's polished bio (see below), approach, training
- **Services** — individual counselling, groups, workshops; modalities listed
- **Booking** — two clear options:
  - *Virtual sessions (main option):* Acuity booking link
  - *In-person in Camrose only:* Camrose Wellness Collective Jane link
- **Groups & Workshops** — upcoming events, how to join, future workshop listings
- **Resources** — articles, tools, links for clients, parents, and families
- **Regulation Game** — interactive tool with three options:
  - Meditation for grounding
  - Breathing for regulation
  - Box breathing for anxiety

## Hilary's Bio (approved, use this on the About page)
Hilary is a resourceful and compassionate Counsellor with a rich background in mental health support and group facilitation. She leads with a trauma-informed, person-centred approach — ensuring every client feels genuinely seen, heard, and met exactly where they are.

Drawing from a diverse range of evidence-based modalities including CBT, DBT, Somatic Therapy, Solution-Focused Therapy, Internal Family Systems (IFS), and Polyvagal Theory, Hilary tailors her approach to each individual's unique needs. She has a particular passion for supporting neurodivergent youth and adults, and brings deep experience helping clients build nervous system regulation skills as the foundation for all therapeutic work.

Hilary is also well-versed in connecting clients and families to the community resources and practical tools that best support their goals — offering a grounded, fresh perspective to those who may feel stuck.

## External Integrations
- **Acuity (main booking — virtual):** https://HilaryLucas.as.me/
- **Camrose Wellness Collective (in-person, Camrose area only):** https://camrosewellness.janeapp.com/#/counselling-psychology-mental-health
- Social media: to be added
- Email newsletter: to be added

## Hilary's Specialties & Approach
- Neurodivergent youth and adults
- Person-centred, trauma-informed practice
- Modalities: CBT, DBT, Somatic Therapy, SFT, IFS (Parts Work), Polyvagal Theory
- Nervous system regulation as the foundation of all therapeutic work
- Resource connection for families (FSCD, Boys & Girls Club, family enhancement programs)
- Supporting parents to regulate so they can model it for their children
- Group facilitation and community partnerships

## Development Commands
```bash
# Run the site locally (to preview before publishing)
npm run dev

# Build for production
npm run build

# Push saved changes to GitHub (always confirm with Hilary first)
git add . && git commit -m "your message" && git push
```

## Code Style
- Use TypeScript throughout
- Tailwind CSS for all styling — no separate CSS files unless necessary
- App Router conventions (Next.js 15)
- Keep components simple and readable
- Mobile-friendly (responsive) by default
