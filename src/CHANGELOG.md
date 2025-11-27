# Changelog

Sve značajne promjene u FinSim projektu.

---

## [2.0.0] - 2024-11-23

### 🎨 Ultra-Advanced Design System

**Kompletno redizajniran `globals.css` sa:**

#### Premium Color Palette
- Primary palette (10 shades) - Financial Trust Blue
- Secondary palette (10 shades) - Premium Purple  
- Accent palette (10 shades) - Success Green
- Warning palette (10 shades)
- Danger palette (10 shades)
- Neutral grays (10 shades) - High contrast

#### Advanced Spacing System
- 8px grid sistem sa 16 spacing opcija
- Od 4px do 96px
- Konzistentan kroz cijeli projekat

#### Border Radius System
- 7 nivoa: none, sm, md, lg, xl, 2xl, 3xl, full
- Od 0 do 48px + full circle

#### Premium Shadow System
- 7 nivoa sjenki: xs, sm, md, lg, xl, 2xl, inner
- Dodatni glow efekti za Primary, Secondary, Accent

#### Transition System
- 4 brzine: fast (150ms), base (200ms), slow (300ms), slower (500ms)
- Custom bounce easing

### 🎭 Advanced Animations

#### Keyframe Animacije
- `fadeInUp` - Fade sa translateY
- `fadeInDown` - Fade sa translateY (obrnuto)
- `slideInLeft` - Slide sa lijeva
- `slideInRight` - Slide sa desna
- `scaleIn` - Scale fade
- `float` - Lebdenje (infinite)
- `pulse` - Pulse efekat (infinite)
- `shimmer` - Shimmer efekat
- `gradientShift` - Gradient animacija (infinite)

#### Animation Classes
- `.animate-fade-in-up`
- `.animate-fade-in-down`
- `.animate-slide-in-left`
- `.animate-slide-in-right`
- `.animate-scale-in`
- `.animate-float`
- `.animate-pulse`

### 🎨 Premium Effects

#### Glassmorphism
- `.glass` - Lagani blur sa transparency
- `.glass-strong` - Jači blur efekat

#### Gradient Backgrounds
- `.gradient-primary`
- `.gradient-secondary`
- `.gradient-accent`
- `.gradient-blue-purple` - Sa animacijom
- `.gradient-text` - Gradient text clip

### 💎 Advanced Components (CSS)

#### Card System
**`.finsim-card`**
- Premium white card
- 2xl border radius
- ::before pseudo za top border accent
- Hover: translateY + shadow + glow
- Focus-within outline

**`.feature-card`**
- Center aligned content
- ::after pseudo za shimmer efekat
- Hover: translateY + scale + shadow + glow
- Icon container sa scale i rotate animacijom

**`.feature-card-icon`**
- 5rem × 5rem
- 2xl border radius
- Hover: scale(1.15) + rotate(5deg)

#### Banner System
**`.banner`** (base)
- Rounded corners
- Flex layout sa gap
- ::before pseudo za left accent bar (6px)

**Variants:**
- `.banner-info` - Blue theme
- `.banner-warning` - Amber theme + gradient background + glow
- `.banner-success` - Green theme
- `.banner-error` - Red theme

#### Button System
**`.btn`** (base)
- Inline-flex sa gap
- Padding i border-radius
- ::before pseudo za ripple efekat
- :active scale(0.96)
- 4px focus outline

**Variants:**
- `.btn-primary` - Gradient (blue → purple) + glow + animation
- `.btn-secondary` - White + shadow
- `.btn-outline` - Transparent + border

**Sizes:**
- `.btn-sm` - Small
- `.btn-lg` - Large

### 🎯 Hero Section Styles

- `.hero` - Container
- `.hero-badge` - Badge sa gradient background
- `.hero-title` - 4rem gradient animated text
- `.hero-subtitle` - 1.5rem subtitle

### 🎨 Layout & Grid

- `.container` - Max-width 1400px
- `.container-narrow` - Max-width 1200px
- `.container-wide` - Max-width 1600px
- `.grid-features` - Auto-fit grid (min 300px)

### 🎨 Decorative Elements

**`.decorative-blob`**
- Absolute positioning
- 50% border-radius (circle)
- blur(100px)
- opacity: 0.3
- z-index: -1

**Variants:**
- `.blob-primary` - Blue
- `.blob-secondary` - Purple
- `.blob-accent` - Green

### ♿ Enhanced Accessibility

#### Focus Styles
- Enhanced 3px outline za sve
- 4px outline za buttons i links
- 4px outline offset

#### `.sr-only`
- Screen reader only content
- Properly hidden

#### `.skip-to-content`
- Skip link sa transition
- Top: -100px → 0 on focus

### 🎨 Responsive Typography

**Desktop:**
- h1: 3rem (48px)
- h2: 2.5rem (40px)
- h3: 2rem (32px)
- h4: 1.5rem (24px)
- p: 1.125rem (18px)

**Tablet (≤768px):**
- h1: 2.5rem
- h2: 2rem
- h3: 1.75rem
- Hero title: 2.75rem

**Mobile (≤480px):**
- Hero title: 2.25rem
- Buttons: 100% width

### 📱 Landing Page Redizajn (JSX)

**Potpuno nova struktura sa:**

#### 1. Decorative Background
- 2 animated floating blobs
- Primary i Secondary boje
- Različiti animation delays

#### 2. Warning Banner
- Gradient background
- AlertCircle ikona
- Dual-line tekst (naslov + poruka)
- Glow shadow

#### 3. Info Banner
- Glassmorphism
- Gradient background (primary → secondary)
- Sparkles ikona sa pulse animacijom

#### 4. Hero Section
- **Badge** - "Finansijska pismenost za sve" + TrendingUp ikona
- **Title** - "FinSim" gradient animated
- **Subtitle** - Main tagline
- **Description** - Extended opis
- **Dual CTA buttons** - Primary gradient + Secondary white

#### 5. Feature Cards (3 kartice)
**Profil kartica:**
- Wallet ikona
- Gradient blue background
- Naslov + kratak opis + long opis
- Arrow link
- onClick navigation
- Keyboard accessible

**Prava kartica:**
- Shield ikona
- Gradient purple background
- Isti layout kao profil

**Simulator kartica:**
- Calculator ikona
- Gradient green background
- Isti layout kao profil

**Svaka kartica:**
- animationDelay za stagger
- Hover sa shimmer efektom
- Scale i rotate na ikoni
- Shadow i glow

#### 6. "Zašto koristiti FinSim?" sekcija
- BookOpen hero ikona
- Grid 6 benefita (2×3)
- CheckCircle ikone (zelene)
- h4 naslov + p opis za svaki

**Benefiti:**
1. Jednostavno i razumljivo
2. Potpuno besplatno
3. Sigurna simulacija
4. Dostupno svima
5. Praktično učenje
6. Mobilno prilagođeno

#### 7. Bottom CTA Section
- Glassmorphism card
- h2 naslov
- p opis
- Dual CTA buttons
- Flex wrap layout

#### 8. Footer Info
- Border top
- 3 key points sa CheckCircle ikonama
- Separator dots (•)
- Flex wrap layout

### 🎨 Design Highlights

**Inline Styles korištene za:**
- Specifična spacing (margin, padding)
- Animation delays
- Custom colors
- Positioning
- Z-index layering

**CSS Classes korištene za:**
- Sve strukturne stilove
- Hover efekte
- Animacije
- Responsive behavior
- Accessibility

### ♿ Accessibility Features

#### ARIA Labels
- Svi buttons imaju aria-label
- Role="button" za kartice
- Role="alert" za bannere
- Role="contentinfo" za footer

#### Keyboard Navigation
- tabIndex={0} za kartice
- onKeyDown handler (Enter/Space)
- Focus indicators

#### Screen Readers
- Dekorativne ikone: aria-hidden="true"
- Semantic HTML strukture
- Properly labeled sections

### 📱 Responsive Behavior

- Mobile-first inline styles
- Flex-wrap za buttons
- Grid auto-fit za kartice
- Max-width constraints
- Breakpoint-aware typography

---

## [1.0.0] - Original

- Inicijalna verzija aplikacije
- Osnovne stranice
- Layout komponenta
- React Router setup

---

**v2.0.0 = Kompletna transformacija u ultra-premium design!** 🚀
