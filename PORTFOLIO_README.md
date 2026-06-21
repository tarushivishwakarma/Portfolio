# Tarushi Vishwakarma - Portfolio Website

A modern, visually stunning, fully responsive personal portfolio website built with React, Tailwind CSS, and Motion animations.

## 🎨 Design Features

- **Premium Futuristic Aesthetic**: Dark theme with vibrant blue/purple gradients
- **Glassmorphism Effects**: Backdrop blur and translucent cards
- **Smooth Animations**: Motion-powered entrance and scroll animations
- **Interactive Elements**: Hover effects, floating icons, animated gradients
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes
- **Smooth Scroll Navigation**: Seamless section navigation

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── HeroSection.tsx          # Landing page with animated intro
│   │   │   ├── AboutSection.tsx         # Education, skills, and stats
│   │   │   ├── SkillsSection.tsx        # Categorized skill progress bars
│   │   │   ├── ProjectsSection.tsx      # Featured project cards
│   │   │   ├── ExperienceSection.tsx    # Leadership & achievements
│   │   │   ├── CertificationsSection.tsx # Certifications with badges
│   │   │   ├── ContactSection.tsx       # Contact form & social links
│   │   │   ├── Navigation.tsx           # Sticky navbar with mobile menu
│   │   │   ├── Footer.tsx               # Footer with scroll-to-top
│   │   │   └── LoadingScreen.tsx        # Initial loading animation
│   │   └── ui/                          # Reusable UI components
│   └── App.tsx                          # Main application component
├── styles/
│   ├── theme.css                        # Tailwind theme & custom variables
│   └── fonts.css                        # Font imports
└── imports/
    └── TarushiVishwakarma_Resume.pdf    # Source resume
```

## 🎨 Color Palette

### Primary Colors
- **Purple Accent**: `#a855f7` (purple-500) to `#7c3aed` (purple-600)
- **Blue Accent**: `#3b82f6` (blue-500) to `#2563eb` (blue-600)
- **Background**: Dark gradient from slate-950 via purple-950 to slate-900

### Gradients
- **Hero Gradient**: `from-purple-500 to-blue-500`
- **Card Gradient**: `from-purple-500/10 to-blue-500/10`
- **Text Gradient**: `from-purple-400 to-blue-400`

### Glassmorphism
- **Backdrop Blur**: `backdrop-blur-xl`
- **Border**: `border-purple-500/20`
- **Background**: Semi-transparent with gradient overlay

## 🚀 Tech Stack

- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm

## 📋 Sections Overview

### 1. Hero Section
- Full-screen landing with name and tagline
- Animated background gradient orbs
- Floating tech icons
- Call-to-action buttons (Projects, Resume, Contact)
- Social media links
- Scroll indicator

### 2. About Section
- Educational background with institution details
- Technical expertise breakdown
- Soft skills badges
- Animated statistics cards (Projects, Technologies, Certifications, Leadership)

### 3. Skills Section
6 categorized skill cards:
- Programming (Java, Python, C, JavaScript)
- Web Development (HTML/CSS, React, FastAPI, Node.js)
- Database (MySQL, Firebase, SQL, ChromaDB)
- Tools & Platforms (GitHub, VS Code, Vercel, Figma)
- AI/ML (RAG Pipeline, LLM Integration, Vector DB, OCR)
- Soft Skills (Leadership, Communication, Teamwork, Public Speaking)

### 4. Projects Section
Featured projects with:
- Project title and subtitle
- Detailed description
- Tech stack badges
- Live demo and GitHub links
- Gradient-themed cards

Projects included:
- JanSahayakAI
- ProtocolZero
- PowerSense
- Temple Insight 360
- Online Quiz System
- Event Registration System

### 5. Experience/Leadership Section
- Leadership positions with descriptions
- Achievements and recognition
- Event management roles
- Public speaking awards

### 6. Certifications Section
- HackerRank certifications (Java, Python)
- Trainx DSA training
- META Database course
- Skills covered for each certification
- Verified badges

### 7. Contact Section
- Contact information cards (Email, Phone, Location)
- Social media links (GitHub, LinkedIn, LeetCode, HackerRank)
- Contact form with validation
- Glassmorphism design

### 8. Navigation
- Sticky navbar with blur effect on scroll
- Smooth scroll to sections
- Mobile hamburger menu
- Dark/light theme toggle

### 9. Footer
- Credit and copyright
- Tech stack badges
- Scroll-to-top button (floating)

## 🎭 Typography

- **Display Text**: Large gradient text (text-6xl to text-8xl)
- **Headings**: Medium weight with gradient overlays
- **Body Text**: Gray-300 for readability
- **Accents**: Purple-400 and Blue-400 for highlights

## ✨ Animation Details

### Entrance Animations
- Fade in with Y-axis translation
- Staggered children animations
- Scale and rotate effects for icons

### Scroll Animations
- whileInView triggers for section reveals
- Viewport once: true for performance
- Delayed stagger for lists

### Hover Effects
- Scale transformations (scale-105)
- Color transitions
- Background opacity changes

### Loading Animation
- Progress bar with gradient
- Logo scale animation
- Smooth exit transition

## 🔧 Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server (already running in this environment)
# Preview will be available automatically

# Build for production (DO NOT run in this environment)
# pnpm build
```

## 🚀 Deployment to Vercel

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard

2. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`

3. **Environment Variables**
   - No special environment variables needed

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Single column layout)
- **Tablet**: 768px - 1024px (Two column grid)
- **Desktop**: > 1024px (Multi-column with max-width containers)

## 🎯 Performance Optimizations

- Component lazy loading with motion viewport
- Smooth scroll behavior
- Optimized animations (GPU-accelerated transforms)
- Minimal re-renders with React hooks
- Image optimization ready

## 🔮 Future Enhancements

- [ ] Add actual project links and live demos
- [ ] Integrate real contact form backend
- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add testimonials section
- [ ] Create case studies for projects
- [ ] Add resume download functionality
- [ ] Integrate analytics

## 👤 Author

**Tarushi Vishwakarma**
- Email: tarushivishwakarma22@gmail.com
- Location: Lucknow, India
- GitHub: [@tarushivishwakarma](https://github.com/tarushivishwakarma)
- LinkedIn: [Tarushi Vishwakarma](https://linkedin.com/in/tarushi-vishwakarma)

## 📄 License

This portfolio is a personal project. All rights reserved © 2026 Tarushi Vishwakarma

---

Built with ❤️ using React, Tailwind CSS, and Motion
