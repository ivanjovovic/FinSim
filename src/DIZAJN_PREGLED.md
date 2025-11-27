# 🎨 Dizajn Pregled - FinSim v2.0

Ultra-napredan dizajn fokusiran na korisničko iskustvo i pristupačnost.

---

## 🎯 Dizajn Filozofija

### 1. **Accessibility First** ♿
- Veliki fontovi (18px+ body)
- Visok kontrast (7:1 ratio)
- Keyboard navigation
- Screen reader podrška
- Focus indicators (4px)

### 2. **Premium Visual Design** 💎
- Glassmorphism efekti
- Gradient animacije
- Float dekoracije
- Smooth transitions
- Layered shadows

### 3. **Intuitivno Korisničko Iskustvo** 🎯
- Jasna hijerarhija
- Očigledni call-to-action
- Consistent spacing (8px grid)
- Responsive layout

---

## 🎨 Visual Design Elements

### Color System

```
PRIMARY (Blue) - Povjerenje, Sigurnost
├─ Light shades (50-300) → Backgrounds
├─ Mid shades (400-600) → Primary elements
└─ Dark shades (700-900) → Text, borders

SECONDARY (Purple) - Premium, Kreativnost
├─ Light shades → Accents
└─ Dark shades → CTA elements

ACCENT (Green) - Uspjeh, Pozitivnost
└─ Success states, checkmarks

WARNING (Amber) - Pažnja
└─ Important notices

DANGER (Red) - Upozorenje
└─ Errors, kritične poruke
```

### Typography Hierarchy

```
H1 (3rem/48px)    → Hero naslovi
H2 (2.5rem/40px)  → Section naslovi
H3 (2rem/32px)    → Card naslovi
H4 (1.5rem/24px)  → Sub-naslovi
P  (1.125rem/18px)→ Body tekst
```

### Spacing Scale (8px grid)

```
4px  → Micro spacing (icons)
8px  → Tight spacing (gaps)
16px → Base spacing (padding)
24px → Medium spacing (sections)
32px → Large spacing (components)
48px → XL spacing (sections)
```

---

## 🎭 Animacije i Efekti

### Entry Animations

**fadeInUp** - Glavni sadržaj
```css
0%   → opacity: 0, translateY(30px)
100% → opacity: 1, translateY(0)
Duration: 0.6s
```

**scaleIn** - Kartice i elementi
```css
0%   → opacity: 0, scale(0.9)
100% → opacity: 1, scale(1)
Duration: 0.4s
```

**slideIn** - Side elements
```css
Left:  -40px → 0
Right: 40px → 0
Duration: 0.5s
```

### Infinite Animations

**float** - Decorative blobs
```css
0%, 100% → translateY(0)
50%      → translateY(-10px)
Duration: 3s infinite
```

**gradientShift** - Gradient backgrounds
```css
0%   → position: 0% 50%
50%  → position: 100% 50%
100% → position: 0% 50%
Duration: 5s infinite
```

**pulse** - Icons
```css
0%, 100% → opacity: 1, scale(1)
50%      → opacity: 0.8, scale(1.05)
Duration: 2s infinite
```

### Hover Animations

**Cards**
- `translateY(-12px)` - Lift effect
- `scale(1.02)` - Subtle zoom
- Shadow increase (md → 2xl)
- Glow effect (0 → 30px blur)
- Border color change
- Icon: `scale(1.15) rotate(5deg)`

**Buttons**
- Ripple effect (::before pseudo)
- `translateY(-2px)` lift
- Shadow increase
- Gradient position shift

**Links**
- Color shift
- Underline animation

---

## 💎 Premium Efekti

### Glassmorphism

**Light Glass:**
```css
background: rgba(255, 255, 255, 0.7)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.3)
```

**Strong Glass:**
```css
background: rgba(255, 255, 255, 0.9)
backdrop-filter: blur(20px)
border: 1px solid rgba(255, 255, 255, 0.5)
```

### Gradient Effects

**Animated Gradient Text:**
```css
background: linear-gradient(135deg, blue, purple, green)
background-size: 200% auto
background-clip: text
-webkit-text-fill-color: transparent
animation: gradientShift 5s infinite
```

**Animated Gradient Button:**
```css
background: linear-gradient(135deg, blue, purple)
background-size: 200% 200%
animation: gradientShift 5s infinite
```

### Glow Effects

```css
--glow-primary: 0 0 20px rgba(59, 130, 246, 0.3)
--glow-secondary: 0 0 20px rgba(168, 85, 247, 0.3)
--glow-accent: 0 0 20px rgba(34, 197, 94, 0.3)
```

**Korištenje:**
- Hover na kartice → `box-shadow: shadow-2xl, glow-primary`
- Warning banner → `box-shadow: 0 0 30px rgba(amber, 0.2)`
- Primary button → `box-shadow: shadow-lg, glow-primary`

### Shimmer Effect

**Na feature karticama:**
```css
::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255,255,255,0.3), 
    transparent
  );
  left: -100%;
}

hover → left: 100%
```

### Decorative Blobs

```css
.decorative-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  z-index: -1;
  animation: float 3s infinite;
}
```

**Placement:**
- Top-right: Primary blob (400×400px)
- Bottom-left: Secondary blob (350×350px)
- Različiti animation delays za varijaciju

---

## 📐 Layout System

### Container Widths

```css
.container         → 1400px (main content)
.container-narrow  → 1200px (text-heavy pages)
.container-wide    → 1600px (dashboards)
```

### Grid System

**Feature Grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem; /* 32px */
```

**Benefits Grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 2rem;
```

### Spacing Strategy

```
Section spacing: 3-4rem (48-64px)
Component spacing: 2rem (32px)
Element spacing: 1rem (16px)
Micro spacing: 0.5rem (8px)
```

---

## 🎯 Landing Page - Detaljni Pregled

### 1. **Decorative Background Layer**

```jsx
2 floating blobs:
  - Primary (top-right, 400px)
  - Secondary (bottom-left, 350px)
  - Float animation
  - Blur(100px)
  - Opacity: 0.3
  - Z-index: -1
```

### 2. **Warning Banner**

```
Komponente:
  - AlertCircle ikona (warning-700)
  - Naslov (1.125rem, weight: 600)
  - Tekst (1rem)
  - Gradient background
  - Glow shadow
  - Left accent bar (6px)
  
Animacija: fadeInDown (0s delay)
```

### 3. **Info Banner**

```
Komponente:
  - Sparkles ikona (pulse animacija)
  - Tekst (1.125rem, weight: 600)
  - Glassmorphism efekat
  - Gradient background (primary-50 → secondary-50)
  
Animacija: fadeInDown (0.1s delay)
```

### 4. **Hero Section**

**Badge:**
```
- TrendingUp ikona
- "Finansijska pismenost za sve" tekst
- Gradient background
- Border-radius: full
- Shadow: sm
Animacija: scaleIn (0s delay)
```

**Title:**
```
- "FinSim" tekst
- 4rem font size
- Gradient animated (blue → purple → green)
- Background-size: 200%
- GradientShift animation (5s infinite)
Animacija: fadeInUp (0.2s delay)
```

**Subtitle:**
```
- "Nauči kako najbolje koristiti svoju naknadu"
- 1.5rem font size
- Max-width: 700px
- Gray-600 color
Animacija: fadeInUp (0.3s delay)
```

**Description:**
```
- Extended opis aplikacije
- 1.25rem font size
- Max-width: 800px
- Line-height: 1.7
Animacija: fadeInUp (0.4s delay)
```

**CTA Buttons (dual):**
```
Primary Button:
  - "Započni odmah" + ArrowRight ikona
  - Gradient background (animated)
  - Glow shadow
  - Ripple efekat
  - navigate('/koraci')

Secondary Button:
  - "Odaberi profil" + Users ikona
  - White background
  - Border + shadow
  - navigate('/profil')

Layout: Flex row, gap: 1rem, wrap
Animacija: fadeInUp (0.5s delay)
```

### 5. **Feature Cards** (3 kartice u grid-u)

**Grid layout:**
```css
repeat(auto-fit, minmax(300px, 1fr))
gap: 2rem
margin-bottom: 4rem
```

**Svaka kartica:**

**Struktura:**
1. Icon container (5rem × 5rem)
   - Gradient background
   - Border-radius: 2xl
   - Center aligned
   - Hover: scale(1.15) rotate(5deg)

2. Naslov (h3)
   - 2rem font size
   - Margin-bottom: 1rem
   - Gray-900

3. Kratak opis (p)
   - 1.125rem font size
   - Gray-600
   - Margin-bottom: 1.5rem

4. Detaljan tekst (p)
   - 1rem font size
   - Gray-500
   - Line-height: 1.6
   - Margin-bottom: 2rem

5. Action link
   - "Otvori" + ArrowRight
   - Primary/Secondary/Accent boja
   - Flex layout
   - Font-weight: 600

**Hover efekti:**
- translateY(-12px)
- scale(1.02)
- Shadow: 2xl + glow
- Border-color: lighter
- Shimmer animation (::after)
- Icon: scale + rotate

**Accessibility:**
- tabIndex={0}
- role="button"
- aria-label sa punim opisom
- onKeyDown (Enter/Space)
- onClick navigation

**Animation delays:**
- Card 1 (Profil): 0.6s
- Card 2 (Prava): 0.7s
- Card 3 (Simulator): 0.8s

### 6. **"Zašto koristiti FinSim?" Sekcija**

**Container:**
```css
.finsim-card
padding: 3rem
margin-bottom: 4rem
```

**Header:**
- BookOpen ikona (3rem, primary-600)
- h2 naslov
- p subtitle (max-width: 700px)

**Grid (6 benefita):**
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
gap: 2rem
```

**Svaki benefit:**
- CheckCircle ikona (2rem, accent-500)
- h4 naslov (1.5rem)
- p opis (1rem, line-height: 1.7)
- Flex layout (gap: 1rem)

**Benefiti:**
1. Jednostavno i razumljivo
2. Potpuno besplatno
3. Sigurna simulacija
4. Dostupno svima
5. Praktično učenje
6. Mobilno prilagođeno

**Animacija:** fadeInUp (0.9s delay)

### 7. **Bottom CTA Section**

```
Container: Glassmorphism card
  - Strong glass efekat
  - Padding: 3rem
  - Border-radius: 2xl
  - Border: 2px gray-200
  - Margin-bottom: 4rem

Sadržaj:
  - h2 naslov
  - p opis (max-width: 600px)
  - Dual CTA buttons (flex wrap)

Animacija: fadeInUp (1s delay)
```

### 8. **Footer Info**

```
Layout:
  - Border-top: 2px gray-200
  - Padding: 3rem 0 2rem
  - Text-center

Sadržaj:
  - 3 key points
  - CheckCircle ikone (accent-500)
  - Separator dots (gray-300)
  - Flex layout (wrap)
  - Font-size: 1.125rem
  - Color: gray-500

Points:
  - Besplatno
  - Bez unosa pravih podataka
  - Prilagođeno starijim osobama

Animacija: fadeInUp (1.1s delay)
```

---

## 📱 Responsive Behavior

### Desktop (>1024px)
- Full feature grid (3 columns)
- Dual CTA buttons side-by-side
- Large spacing (4-6rem)
- Hero title: 4rem

### Tablet (768px - 1024px)
- Feature grid (2 columns)
- Reduced spacing (3-4rem)
- Hero title: 2.75rem

### Mobile (<768px)
- Feature grid (1 column)
- Stacked CTA buttons (full width)
- Reduced spacing (2-3rem)
- Hero title: 2.25rem
- Font-size base: 16px

### Extra Small (<480px)
- All buttons: 100% width
- Even smaller hero title
- Tight spacing

---

## ♿ Accessibility Implementation

### Keyboard Navigation

**Tab order:**
1. Skip to content link
2. Navigation links
3. Warning banner (focusable if needed)
4. Hero CTA buttons
5. Feature cards (tabIndex={0})
6. Benefits (headings tabbable)
7. Bottom CTA buttons
8. Footer links

**Keyboard actions:**
- Enter/Space na karticama → navigate
- Tab → next element
- Shift+Tab → previous element

### Focus Indicators

```css
*:focus-visible {
  outline: 3px solid primary-500;
  outline-offset: 3px;
  border-radius: 4px;
}

button:focus-visible {
  outline: 4px solid primary-500;
  outline-offset: 4px;
}
```

### ARIA Implementation

**Roles:**
- `role="alert"` → Warning banner
- `role="button"` → Feature cards
- `role="contentinfo"` → Footer

**Labels:**
- `aria-label` → Buttons i kartice (descriptive)
- `aria-hidden="true"` → Dekorativne ikone
- `aria-live="polite"` → Dynamic content

### Screen Reader Optimization

- Semantic HTML (h1, h2, h3, p, button)
- Proper heading hierarchy
- Descriptive link tekst
- Alt text za slike (kada se dodaju)
- Meaningful aria-labels

### Color Contrast

**Text kontrasti:**
- Gray-900 on white → 16:1 ✓
- Gray-600 on white → 7:1 ✓
- Primary-600 on white → 4.5:1 ✓
- All compliant with WCAG AA (4.5:1)

### Motion Sensitivity

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 CSS Architecture

### Stilovi organizovani po sekcijama:

1. **Theme Variables** - CSS custom properties
2. **Base Styles** - Reset i osnovni elementi
3. **Typography** - Font sizes i weights
4. **Animations** - Keyframes i animation classes
5. **Effects** - Glassmorphism, gradients
6. **Components** - Cards, buttons, banners
7. **Layout** - Containers, grids
8. **Utilities** - Helper classes
9. **Accessibility** - Focus, screen reader
10. **Responsive** - Media queries

### Naming Convention:

```css
Component-based:
  .component-name { }
  .component-name-variant { }

Utility:
  .utility-name { }

State:
  .is-active { }
  .has-error { }
```

---

## 🚀 Performance Optimization

### CSS Performance

- **Single globals.css** - Jedan fajl, lako caciranje
- **Minimal specificity** - Brze CSS selector matches
- **No deep nesting** - Flat struktura
- **CSS variables** - Brze promjene tema

### Animation Performance

- **Transform i opacity** - GPU akceleracija
- **will-change** - Priprema browsera (gdje treba)
- **RequestAnimationFrame** - Smooth 60fps

### Load Strategy

- Critical CSS inline (ako treba)
- Lazy load nesential assets
- Preload fontova
- Optimize images

---

## 📊 Design Metrics

### Visual Weight Distribution:

```
Hero section: 40%
Feature cards: 30%
Benefits: 15%
CTAs: 10%
Footer: 5%
```

### Color Usage:

```
Primary (Blue): 50%
Secondary (Purple): 20%
Accent (Green): 15%
Warning (Amber): 5%
Neutral (Gray): 10%
```

### Animation Timing:

```
Entry animations: 0-1.2s (staggered)
Hover animations: 0.2-0.3s
Infinite animations: 2-5s
Total page load feel: ~1.5s
```

---

**Dizajn kreiran sa fokusom na pristupačnost, korisničko iskustvo i vizuelnu privlačnost!** 🎨✨
