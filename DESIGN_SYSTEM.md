# Portfolio Design System

## 🎨 Color System

### Primary Palette
```css
/* Purple */
purple-400: #a855f7
purple-500: #9333ea
purple-600: #7c3aed
purple-900: #581c87
purple-950: #3b0764

/* Blue */
blue-400: #60a5fa
blue-500: #3b82f6
blue-600: #2563eb
blue-900: #1e3a8a
blue-950: #172554

/* Slate (Backgrounds) */
slate-900: #0f172a
slate-950: #020617
```

### Gradients

#### Background Gradients
```css
/* Main background */
from-slate-950 via-purple-950/20 to-slate-900

/* Alternate background */
from-slate-900 via-purple-900/20 to-slate-900

/* Hero background */
from-slate-950 via-purple-950 to-slate-900
```

#### Text Gradients
```css
/* Headings */
from-purple-400 to-blue-400

/* Alternate headings */
from-blue-400 to-purple-400

/* Vibrant text */
from-white via-purple-200 to-blue-200
```

#### Button Gradients
```css
/* Primary CTA */
from-purple-600 to-blue-600

/* Hover state */
from-purple-700 to-blue-700
```

#### Card Gradients
```css
/* Purple variant */
from-purple-500/10 to-blue-500/10

/* Blue variant */
from-blue-500/10 to-purple-500/10

/* Subtle card */
from-purple-500/5 to-blue-500/5
```

### Glassmorphism

```css
/* Card style */
background: from-purple-500/10 to-blue-500/10
backdrop-filter: blur(xl)
border: 1px solid rgb(168 85 247 / 0.2)

/* Darker glass */
background: from-purple-500/20 to-blue-500/20
backdrop-filter: blur(xl)
border: 1px solid rgb(168 85 247 / 0.3)
```

## 📐 Spacing & Layout

### Container Widths
```css
max-w-6xl  /* Main content: 72rem (1152px) */
max-w-7xl  /* Wide sections: 80rem (1280px) */
```

### Section Padding
```css
py-24  /* Vertical: 6rem (96px) */
px-6   /* Horizontal: 1.5rem (24px) */
```

### Gap Spacing
```css
gap-4   /* Small: 1rem (16px) */
gap-6   /* Medium: 1.5rem (24px) */
gap-8   /* Large: 2rem (32px) */
gap-12  /* XL: 3rem (48px) */
```

## 🔤 Typography

### Font Sizes
```css
/* Display */
text-8xl  /* Hero name: 6rem (96px) */
text-7xl  /* Large display: 4.5rem (72px) */
text-6xl  /* Display: 3.75rem (60px) */

/* Headings */
text-5xl  /* Section titles: 3rem (48px) */
text-3xl  /* Subsection: 1.875rem (30px) */
text-2xl  /* Card titles: 1.5rem (24px) */
text-xl   /* Subheadings: 1.25rem (20px) */

/* Body */
text-lg   /* Large body: 1.125rem (18px) */
text-base /* Body: 1rem (16px) */
text-sm   /* Small: 0.875rem (14px) */
text-xs   /* Tiny: 0.75rem (12px) */
```

### Font Weights
```css
font-medium  /* 500 - Headings */
font-normal  /* 400 - Body text */
```

### Line Heights
```css
leading-relaxed  /* 1.625 - Body text */
leading-normal   /* 1.5 - Default */
```

## 🎭 Component Patterns

### Card Component
```tsx
<Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                 backdrop-blur-xl border-purple-500/20 
                 hover:scale-105 transition-transform p-6">
  {/* Content */}
</Card>
```

### Badge Component
```tsx
<Badge className="bg-gradient-to-r from-purple-500 to-blue-500 
                  text-white border-0">
  Featured
</Badge>
```

### Button Primary
```tsx
<Button className="bg-gradient-to-r from-purple-600 to-blue-600 
                   hover:from-purple-700 hover:to-blue-700 
                   text-white px-8 py-6 rounded-full">
  Click Me
</Button>
```

### Button Outline
```tsx
<Button variant="outline" 
        className="border-purple-500/50 text-purple-300 
                   hover:bg-purple-500/10 backdrop-blur-sm">
  Learn More
</Button>
```

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 
                 bg-clip-text text-transparent">
    Section Title
  </h2>
  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 
                  mx-auto rounded-full" />
</div>
```

## ✨ Animation Patterns

### Fade In Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

### Stagger Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Hover Scale
```tsx
<Card className="hover:scale-105 transition-transform">
```

### Floating Animation
```tsx
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

### Progress Bar Animation
```tsx
<motion.div
  className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
  initial={{ width: 0 }}
  whileInView={{ width: `${percentage}%` }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.2 }}
/>
```

## 🎯 Icon Usage

### Icon Sizes
```css
w-4 h-4   /* Small: 16px */
w-5 h-5   /* Medium: 20px */
w-6 h-6   /* Large: 24px */
w-12 h-12 /* XL: 48px */
w-16 h-16 /* XXL: 64px */
```

### Icon Colors
```tsx
className="text-purple-400"  // Purple accent
className="text-blue-400"    // Blue accent
className="text-gray-400"    // Neutral
```

## 📱 Responsive Grid Patterns

### Two Column
```tsx
<div className="grid md:grid-cols-2 gap-8">
```

### Three Column
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Four Column
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

## 🌈 Border Styles

### Glassmorphism Border
```css
border border-purple-500/20
```

### Hover Border
```css
hover:border-purple-500/40
```

### Accent Border
```css
border border-purple-500/50
```

## 🎨 Shadow Effects

### Card Shadow
```css
shadow-lg  /* Default elevation */
```

### Hover Shadow
```css
hover:shadow-purple-500/50
```

### Glow Effect
```css
shadow-2xl shadow-purple-500/30
```

## 🔄 Transition Effects

### All Properties
```css
transition-all duration-300
```

### Transform Only
```css
transition-transform
```

### Colors Only
```css
transition-colors
```

## 💡 Best Practices

1. **Consistency**: Use design tokens consistently across components
2. **Accessibility**: Maintain sufficient color contrast (WCAG AA minimum)
3. **Performance**: Use GPU-accelerated properties (transform, opacity)
4. **Responsiveness**: Mobile-first approach with progressive enhancement
5. **Animation**: Respect prefers-reduced-motion
6. **Glassmorphism**: Use sparingly for premium feel without overwhelming

---

This design system ensures visual consistency and a premium, futuristic aesthetic throughout the portfolio.
