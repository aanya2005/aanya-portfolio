# Project structure

portfolio-template/
├── src/
│   ├── assets/
│   │   ├── project_icons/       # Project icon images
│   │   ├── project_snapshots/   # Project screenshot folders
│   │   ├── badges/              # Certification badge images
│   │   ├── stars/               # Decorative star images
│   │   ├── stickers/            # Sticker images
│   │   └── techstack/           # Skill/technology icons
│   ├── components/
│   │   ├── section/             # Main page sections
│   │   ├── project/             # Project detail page components
│   │   └── ui/                  # Reusable UI components
│   ├── config/
│   │   └── socialLinks.ts       # Social media & repo URLs
│   ├── contexts/
│   │   └── DarkModeContext.tsx   # Theme management
│   ├── pages/
│   │   ├── projects/            # Individual project detail pages
│   │   └── Contact.tsx          # Contact page
│   ├── styles/
│   │   └── colors.ts            # Color palette
│   └── App.tsx                  # Routes & layout
├── public/
│   └── resume.pdf               # Resume
├── .env                         # environment variables
└── .env.example                 # Environment variable template


# Features
- Dark/light mode with system preference detection
- Interactive ASCII text with morphing effects
- Draggable star decorations
- Aurora gradient backgrounds
- Animated stickers on scroll
- Image carousel for project screenshots
- Responsive design across all devices
- Lazy-loaded routes and components

# Technologies
- React 19, TypeScript, Vite
- Tailwind CSS, Radix UI, Lucide Icons
- GSAP, React Spring, OGL (WebGL)
- React Router DOM