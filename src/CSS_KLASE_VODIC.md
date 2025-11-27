# 🎨 CSS Klase - Brzi Vodič

Sve dostupne CSS klase iz `globals.css` fajla za brzu upotrebu.

---

## 📦 KOMPONENTE

### Cards

```css
.finsim-card
```
**Koristi za:** Osnovne premium kartice
**Features:**
- White background
- 2xl border radius
- Border sa hover efektom
- Top accent bar (::before)
- Lift on hover (translateY)
- Shadow increase
- Focus outline

**Primjer:**
```jsx
<div className="finsim-card">
  Content
</div>
```

---

```css
.feature-card
```
**Koristi za:** Feature kartice sa ikonama
**Features:**
- Center aligned
- Shimmer efekat (::after)
- Scale + translateY on hover
- Shadow + glow on hover
- Icon container sa animacijom
- Cursor pointer

**Primjer:**
```jsx
<div className="feature-card" onClick={...}>
  <div className="feature-card-icon">
    <Icon />
  </div>
  <h3>Title</h3>
  <p>Description</p>
</div>
```

---

```css
.feature-card-icon
```
**Koristi za:** Icon container u feature cards
**Features:**
- 5rem × 5rem
- 2xl border radius
- Margin auto + bottom
- Hover: scale(1.15) rotate(5deg)

---

### Buttons

```css
.btn
```
**Base button klasa**
**Features:**
- Inline-flex layout
- Gap za icon
- Padding i border-radius
- Ripple efekat (::before)
- Active: scale(0.96)
- Focus: 4px outline

**Koristi UVIJEK sa variant klasom!**

---

```css
.btn-primary
```
**Gradient button**
**Features:**
- Blue → Purple gradient
- Animated background (gradientShift)
- White text
- Shadow + glow
- Hover: background shift, shadow increase, lift

**Primjer:**
```jsx
<button className="btn btn-primary">
  Text
  <Icon />
</button>
```

---

```css
.btn-secondary
```
**White button**
**Features:**
- White background
- Gray border
- Gray-900 text
- Shadow
- Hover: gray-50 bg, shadow increase

---

```css
.btn-outline
```
**Outline button**
**Features:**
- Transparent background
- Primary border
- Primary text
- Hover: primary-50 bg

---

```css
.btn-sm
```
**Small button size**
- Smaller padding
- 1rem font size

**Koristi sa:** `.btn .btn-primary .btn-sm`

---

```css
.btn-lg
```
**Large button size**
- Larger padding (7 × 12)
- 1.25rem font size
- 2xl border radius

**Koristi sa:** `.btn .btn-primary .btn-lg`

---

### Banners

```css
.banner
```
**Base banner klasa**
**Features:**
- Flex layout sa gap
- 2px border
- xl border radius
- Left accent bar (::before, 6px)

**Koristi UVIJEK sa variant klasom!**

---

```css
.banner-info
```
**Info banner (Blue)**
**Features:**
- Primary-50 background
- Primary-200 border
- Primary-900 text
- Primary-600 accent bar

**Primjer:**
```jsx
<div className="banner banner-info">
  <Icon />
  <div>
    <p>Title</p>
    <p>Message</p>
  </div>
</div>
```

---

```css
.banner-warning
```
**Warning banner (Amber)**
**Features:**
- Gradient background (warning-50 → warning-100)
- Warning-300 border
- Warning-900 text
- Glow shadow (30px amber blur)
- Gradient accent bar

---

```css
.banner-success
```
**Success banner (Green)**
- Accent-50 background
- Accent-200 border
- Accent-900 text

---

```css
.banner-error
```
**Error banner (Red)**
- Danger-50 background
- Danger-200 border
- Danger-900 text

---

## 🎭 EFFECTS

### Glassmorphism

```css
.glass
```
**Light glassmorphism**
**Features:**
- rgba(255, 255, 255, 0.7) background
- 10px blur
- Light border

---

```css
.glass-strong
```
**Strong glassmorphism**
**Features:**
- rgba(255, 255, 255, 0.9) background
- 20px blur
- Stronger border

**Primjer:**
```jsx
<div className="glass-strong">
  Transparent content
</div>
```

---

### Gradients

```css
.gradient-primary
```
**Primary gradient background**
- Blue-500 → Blue-700

---

```css
.gradient-secondary
```
**Secondary gradient**
- Purple-500 → Purple-700

---

```css
.gradient-accent
```
**Accent gradient**
- Green-500 → Green-700

---

```css
.gradient-blue-purple
```
**Animated gradient**
**Features:**
- Blue → Purple
- 200% background size
- GradientShift animation (5s infinite)

---

```css
.gradient-text
```
**Gradient text (clip)**
**Features:**
- Blue → Purple gradient
- Text clip
- Transparent fill

**Primjer:**
```jsx
<h1 className="gradient-text">
  FinSim
</h1>
```

---

### Decorative

```css
.decorative-blob
```
**Background blob decoration**
**Features:**
- Absolute positioning
- 50% border radius (circle)
- 100px blur
- 0.3 opacity
- z-index: -1

**Koristi sa blob variant!**

---

```css
.blob-primary
```
**Primary blue blob**

---

```css
.blob-secondary
```
**Secondary purple blob**

---

```css
.blob-accent
```
**Accent green blob**

**Primjer:**
```jsx
<div 
  className="decorative-blob blob-primary animate-float"
  style={{ width: '400px', height: '400px', top: '100px', right: '-100px' }}
/>
```

---

## 🎭 ANIMATIONS

### Entry Animations

```css
.animate-fade-in-up
```
**Fade in from bottom**
- 0.6s duration
- Ease-out
- TranslateY: 30px → 0
- Opacity: 0 → 1

**Primjer:**
```jsx
<div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
  Content
</div>
```

---

```css
.animate-fade-in-down
```
**Fade in from top**
- Same as fade-in-up ali obrnuto

---

```css
.animate-slide-in-left
```
**Slide from left**
- 0.5s duration
- TranslateX: -40px → 0

---

```css
.animate-slide-in-right
```
**Slide from right**
- TranslateX: 40px → 0

---

```css
.animate-scale-in
```
**Scale fade in**
- 0.4s duration
- Scale: 0.9 → 1
- Opacity: 0 → 1

---

### Infinite Animations

```css
.animate-float
```
**Float up and down**
- 3s infinite
- TranslateY: 0 → -10px → 0

**Primjer:**
```jsx
<div className="decorative-blob animate-float">
```

---

```css
.animate-pulse
```
**Pulse effect**
- 2s infinite
- Opacity + scale variation

**Primjer:**
```jsx
<Icon className="animate-pulse" />
```

---

## 🎨 HERO STYLES

```css
.hero
```
**Hero section container**
- Center aligned
- Vertical padding

---

```css
.hero-badge
```
**Badge element**
**Features:**
- Inline-flex
- Gradient background
- Border
- Full border radius
- Shadow

**Primjer:**
```jsx
<div className="hero-badge">
  <Icon />
  <span>Text</span>
</div>
```

---

```css
.hero-title
```
**Main hero title**
**Features:**
- 4rem font size
- Font-weight 900
- Gradient animated
- Background clip text

**Primjer:**
```jsx
<h1 className="hero-title">
  FinSim
</h1>
```

---

```css
.hero-subtitle
```
**Hero subtitle**
- 1.5rem font size
- Gray-600 color
- Max-width 700px
- Margin auto

---

## 📐 LAYOUT

```css
.container
```
**Main container**
- Max-width: 1400px
- Margin auto
- Horizontal padding

---

```css
.container-narrow
```
**Narrow container**
- Max-width: 1200px

---

```css
.container-wide
```
**Wide container**
- Max-width: 1600px

---

```css
.grid-features
```
**Feature grid**
- Auto-fit columns
- Min 300px
- 2rem gap
- Vertical margins

**Primjer:**
```jsx
<div className="grid-features">
  <Card />
  <Card />
  <Card />
</div>
```

---

## 🎯 ICONS

```css
.icon
```
**Base icon**
- 1.5rem size
- Flex-shrink: 0

---

```css
.icon-lg
```
**Large icon**
- 2rem size

---

```css
.icon-xl
```
**Extra large icon**
- 4rem size

**Primjer:**
```jsx
<Icon className="icon" />
<Icon className="icon-lg" />
<Icon className="icon-xl" />
```

---

## 🔧 UTILITIES

### Text Alignment

```css
.text-center
.text-left
.text-right
```

---

### Flexbox

```css
.flex              /* display: flex */
.flex-col          /* flex-direction: column */
.items-center      /* align-items: center */
.justify-center    /* justify-content: center */
```

**Primjer:**
```jsx
<div className="flex items-center justify-center gap-4">
```

---

### Gaps

```css
.gap-2    /* 0.5rem */
.gap-4    /* 1rem */
.gap-6    /* 1.5rem */
.gap-8    /* 2rem */
```

---

### Margins

```css
/* Margin Bottom */
.mb-4     /* 1rem */
.mb-6     /* 1.5rem */
.mb-8     /* 2rem */
.mb-12    /* 3rem */

/* Margin Top */
.mt-4     /* 1rem */
.mt-6     /* 1.5rem */
.mt-8     /* 2rem */
```

---

## ♿ ACCESSIBILITY

```css
.sr-only
```
**Screen reader only**
- Hidden visually
- Accessible to screen readers

**Primjer:**
```jsx
<span className="sr-only">
  Description for screen readers
</span>
```

---

```css
.skip-to-content
```
**Skip link**
- Hidden by default
- Visible on focus
- Top: -100px → 0

---

## 🎨 KOMBINACIJE - BEST PRACTICES

### Premium Feature Card

```jsx
<div 
  className="feature-card animate-fade-in-up"
  style={{ animationDelay: '0.6s' }}
  onClick={handleClick}
  tabIndex={0}
  role="button"
>
  <div 
    className="feature-card-icon" 
    style={{ background: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200))' }}
  >
    <Icon className="icon-xl" style={{ color: 'var(--color-primary-600)' }} />
  </div>
  
  <h3>Title</h3>
  <p>Short description</p>
  <p>Long description</p>
  
  <div className="flex items-center justify-center gap-2">
    <span>Action</span>
    <ArrowRight className="icon" />
  </div>
</div>
```

---

### Premium CTA Button

```jsx
<button 
  className="btn btn-primary btn-lg"
  onClick={handleClick}
>
  <span style={{ position: 'relative', zIndex: 1 }}>
    Text
  </span>
  <Icon className="icon" style={{ position: 'relative', zIndex: 1 }} />
</button>
```

*Z-index za ripple efekat visibility*

---

### Info Banner

```jsx
<div className="banner banner-info">
  <Icon className="icon" style={{ color: 'var(--color-primary-600)' }} />
  <div>
    <p style={{ fontWeight: 600, marginBottom: 'var(--spacing-1)' }}>
      Title
    </p>
    <p style={{ fontSize: '1rem' }}>
      Message
    </p>
  </div>
</div>
```

---

### Glassmorphism Card

```jsx
<div className="glass-strong" style={{
  padding: 'var(--spacing-12)',
  borderRadius: 'var(--radius-2xl)',
  border: '2px solid var(--color-gray-200)'
}}>
  Content
</div>
```

---

### Hero Section

```jsx
<div className="hero">
  <div className="hero-badge animate-scale-in">
    <Icon className="icon" />
    <span>Badge text</span>
  </div>
  
  <h1 className="hero-title animate-fade-in-up">
    FinSim
  </h1>
  
  <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
    Subtitle
  </p>
  
  <div className="flex items-center justify-center gap-4">
    <button className="btn btn-primary btn-lg">Primary</button>
    <button className="btn btn-secondary btn-lg">Secondary</button>
  </div>
</div>
```

---

### Decorative Background

```jsx
<div className="decorative-blob blob-primary animate-float" style={{
  width: '400px',
  height: '400px',
  top: '100px',
  right: '-100px'
}} />

<div className="decorative-blob blob-secondary animate-float" style={{
  width: '350px',
  height: '350px',
  bottom: '200px',
  left: '-100px',
  animationDelay: '1s'
}} />
```

---

## 📋 QUICK REFERENCE

### Najčešće kombinacije:

**Card:**
```css
.finsim-card              → Base card
.feature-card             → Interactive card
.feature-card-icon        → Icon container
```

**Button:**
```css
.btn .btn-primary         → Gradient button
.btn .btn-primary .btn-lg → Large gradient
.btn .btn-secondary       → White button
.btn .btn-outline         → Outline button
```

**Banner:**
```css
.banner .banner-info      → Blue banner
.banner .banner-warning   → Amber banner (glow)
.banner .banner-success   → Green banner
.banner .banner-error     → Red banner
```

**Effects:**
```css
.glass                    → Light blur
.glass-strong             → Strong blur
.gradient-text            → Gradient text
.decorative-blob          → Background decoration
```

**Animations:**
```css
.animate-fade-in-up       → Fade from bottom
.animate-scale-in         → Scale fade
.animate-float            → Float infinite
.animate-pulse            → Pulse infinite
```

**Layout:**
```css
.container                → 1400px max-width
.grid-features            → Auto-fit grid
.hero                     → Hero section
```

---

## 💡 TIPS

### Animation Delays

Dodaj `style={{ animationDelay: '0.3s' }}` za stagger efekat:
```jsx
<div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
<div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
<div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
```

---

### Color Variables

Koristi CSS variables za boje:
```jsx
style={{ color: 'var(--color-primary-600)' }}
style={{ background: 'var(--color-gray-50)' }}
```

---

### Spacing Variables

Koristi spacing variables:
```jsx
style={{ padding: 'var(--spacing-8)' }}
style={{ marginBottom: 'var(--spacing-12)' }}
style={{ gap: 'var(--spacing-4)' }}
```

---

### Ripple Efekat na Buttons

Za ripple visibility:
```jsx
<button className="btn btn-primary">
  <span style={{ position: 'relative', zIndex: 1 }}>Text</span>
  <Icon style={{ position: 'relative', zIndex: 1 }} />
</button>
```

---

**🎨 SVE CSS klase iz globals.css fajla!**
**Kopiraj, kombinuj, prilagodi!**
