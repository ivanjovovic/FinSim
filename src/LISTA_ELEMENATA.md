# 📋 Kompletna Lista Elemenata - FinSim Landing Page

Detaljni pregled svih elemenata na početnoj stranici.

---

## 🎨 LANDING PAGE ELEMENTI (Po redoslijedu)

### 1. DECORATIVE BACKGROUND BLOBS (2 elementa)

#### Blob 1 - Primary (Top Right)
```jsx
<div className="decorative-blob blob-primary animate-float">
```
**Stilovi:**
- `width: 400px`
- `height: 400px`
- `top: 100px`
- `right: -100px`
- `background: var(--color-primary-400)`
- `border-radius: 50%`
- `filter: blur(100px)`
- `opacity: 0.3`
- `position: absolute`
- `z-index: -1`
- `animation: float 3s ease-in-out infinite`

#### Blob 2 - Secondary (Bottom Left)
```jsx
<div className="decorative-blob blob-secondary animate-float">
```
**Stilovi:**
- `width: 350px`
- `height: 350px`
- `bottom: 200px`
- `left: -100px`
- `animationDelay: 1s`
- Ostalo isto kao Blob 1

**Funkcija:** Vizualna dekoracija, stvara dubinu, dodaje boju pozadini

---

### 2. WARNING BANNER

```jsx
<div className="banner banner-warning animate-fade-in-down" role="alert">
```

#### Elementi:
1. **Ikona** - AlertCircle
   - `className: "icon"`
   - `style: color: var(--color-warning-700), flexShrink: 0`
   - `width/height: 1.5rem`

2. **Content Container** - `<div>`
   
   a) **Naslov** - `<p>`
      - `fontWeight: 600`
      - `marginBottom: var(--spacing-1)`
      - `fontSize: 1.125rem`
      - `color: var(--color-warning-900)`
      - Tekst: "Važno upozorenje"
   
   b) **Poruka** - `<p>`
      - `fontSize: 1rem`
      - `color: var(--color-warning-800)`
      - Tekst: "Ovo je samo edukativna vježba..."

**Stilovi bannera:**
- `background: linear-gradient(135deg, warning-50, warning-100)`
- `border: 2px solid warning-300`
- `box-shadow: 0 0 30px rgba(251, 191, 36, 0.2)` (glow)
- `borderRadius: var(--radius-xl)`
- `padding: var(--spacing-6)`
- `marginBottom: var(--spacing-8)`
- `display: flex`
- `gap: var(--spacing-4)`
- `::before pseudo`: 6px left accent bar (gradient warning-500 → warning-600)

**Animacija:** fadeInDown (0s delay)
**Accessibility:** `role="alert"`

---

### 3. INFO BANNER

```jsx
<div className="banner banner-info glass-strong animate-fade-in-down">
```

#### Elementi:
1. **Ikona** - Sparkles
   - `className: "icon animate-pulse"`
   - `style: color: var(--color-primary-600)`

2. **Content** - `<div className="flex items-center gap-2">`
   
   a) **Tekst** - `<p>`
      - `fontSize: 1.125rem`
      - `fontWeight: 600`
      - `color: var(--color-primary-900)`
      - Tekst: "Jednostavan vodič za tvoje finansije"

**Stilovi:**
- `background: linear-gradient(135deg, primary-50, secondary-50)`
- `border: 2px solid primary-200`
- `marginBottom: var(--spacing-12)`
- `animationDelay: 0.1s`
- Glassmorphism: `backdrop-filter: blur(20px)`

**Animacija:** fadeInDown (0.1s delay)

---

### 4. HERO SECTION

#### A) HERO BADGE

```jsx
<div className="hero-badge animate-scale-in">
```

**Elementi:**
1. **Ikona** - TrendingUp
   - `className: "icon"`
   - `style: width: 1.25rem, height: 1.25rem, color: primary-600`

2. **Tekst** - `<span>`
   - Tekst: "Finansijska pismenost za sve"

**Stilovi:**
- `display: inline-flex`
- `alignItems: center`
- `gap: var(--spacing-2)`
- `padding: var(--spacing-3) var(--spacing-6)`
- `background: linear-gradient(135deg, primary-50, secondary-50)`
- `border: 2px solid primary-200`
- `borderRadius: var(--radius-full)`
- `color: var(--color-primary-900)`
- `fontSize: 1rem`
- `fontWeight: 600`
- `marginBottom: var(--spacing-6)`
- `box-shadow: var(--shadow-sm)`

**Animacija:** scaleIn (0s delay)

---

#### B) HERO TITLE

```jsx
<h1 className="hero-title animate-fade-in-up">
```

**Tekst:** "FinSim"

**Stilovi:**
- `fontSize: 4rem`
- `fontWeight: 900`
- `lineHeight: 1`
- `marginBottom: var(--spacing-6)`
- `background: linear-gradient(135deg, primary-600, secondary-600, accent-500)`
- `backgroundSize: 200% auto`
- `-webkit-background-clip: text`
- `-webkit-text-fill-color: transparent`
- `background-clip: text`
- `animation: gradientShift 5s ease infinite`

**Animacija:** fadeInUp (0.2s delay)

---

#### C) HERO SUBTITLE

```jsx
<p className="hero-subtitle animate-fade-in-up">
```

**Tekst:** "Nauči kako najbolje koristiti svoju naknadu"

**Stilovi:**
- `fontSize: 1.5rem`
- `color: var(--color-gray-600)`
- `maxWidth: 700px`
- `margin: 0 auto var(--spacing-8)`
- `lineHeight: 1.6`
- `animationDelay: 0.3s`

**Animacija:** fadeInUp (0.3s delay)

---

#### D) HERO DESCRIPTION

```jsx
<p className="animate-fade-in-up">
```

**Tekst:** "Simulacija sa velikim slovima, jasnim objašnjenjima i bez prave banke. Naučite da upravljate svojim finansijama na siguran način."

**Stilovi:**
- `fontSize: 1.25rem`
- `color: var(--color-gray-600)`
- `maxWidth: 800px`
- `margin: 0 auto var(--spacing-12)`
- `lineHeight: 1.7`
- `animationDelay: 0.4s`

**Animacija:** fadeInUp (0.4s delay)

---

#### E) HERO CTA BUTTONS (2 dugmeta)

```jsx
<div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up">
```

**Container stilovi:**
- `marginBottom: var(--spacing-16)`
- `animationDelay: 0.5s`
- `flexWrap: wrap`

##### Button 1 - Primary (Započni odmah)

```jsx
<button className="btn btn-primary btn-lg">
```

**Elementi:**
1. **Tekst** - `<span style={{ position: 'relative', zIndex: 1 }}>`
   - "Započni odmah"

2. **Ikona** - ArrowRight
   - `className: "icon"`
   - `style: width: 1.5rem, height: 1.5rem, position: relative, zIndex: 1`

**Funkcionalnost:**
- `onClick={() => navigate('/koraci')}`
- `aria-label="Započni sa prvim korakom"`

**Stilovi:**
- `background: linear-gradient(135deg, primary-600, secondary-600)`
- `backgroundSize: 200% 200%`
- `color: white`
- `padding: var(--spacing-7) var(--spacing-12)`
- `fontSize: 1.25rem`
- `borderRadius: var(--radius-2xl)`
- `box-shadow: var(--shadow-lg), 0 0 20px rgba(59, 130, 246, 0.3)` (glow)
- Hover: background-position shift, shadow increase, translateY(-2px)
- ::before: Ripple efekat

##### Button 2 - Secondary (Odaberi profil)

```jsx
<button className="btn btn-secondary btn-lg">
```

**Elementi:**
1. **Ikona** - Users
   - `className: "icon"`
   - `style: width: 1.5rem, height: 1.5rem`

2. **Tekst** - `<span>`
   - "Odaberi profil"

**Funkcionalnost:**
- `onClick={() => navigate('/profil')}`
- `aria-label="Pogledaj profile"`

**Stilovi:**
- `background: white`
- `color: var(--color-gray-900)`
- `border: 2px solid var(--color-gray-300)`
- `box-shadow: var(--shadow-md)`
- Hover: background gray-50, shadow increase

**Animacija:** fadeInUp (0.5s delay)

---

### 5. FEATURE CARDS GRID (3 kartice)

```jsx
<div className="grid-features">
```

**Container stilovi:**
- `display: grid`
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- `gap: var(--spacing-8)`
- `marginBottom: var(--spacing-16)`

---

#### CARD 1 - PROFIL (Plava)

```jsx
<div className="feature-card animate-fade-in-up">
```

**Struktura:**

1. **Icon Container**
   ```jsx
   <div className="feature-card-icon">
   ```
   - `background: linear-gradient(135deg, primary-100, primary-200)`
   - `width: 5rem`
   - `height: 5rem`
   - `margin: 0 auto var(--spacing-6)`
   - `borderRadius: var(--radius-2xl)`
   - Hover: `scale(1.15) rotate(5deg)`
   
   a) **Ikona** - Wallet
      - `className: "icon-xl"`
      - `style: color: var(--color-primary-600)`
      - `width/height: 4rem`

2. **Naslov**
   ```jsx
   <h3>
   ```
   - Tekst: "Upoznaj svoj profil"
   - `marginBottom: var(--spacing-4)`
   - `color: var(--color-gray-900)`
   - `fontSize: 2rem`

3. **Kratak opis**
   ```jsx
   <p>
   ```
   - Tekst: "Ko si i šta primaš"
   - `fontSize: 1.125rem`
   - `color: var(--color-gray-600)`
   - `marginBottom: var(--spacing-6)`
   - `lineHeight: 1.7`

4. **Detaljan opis**
   ```jsx
   <p>
   ```
   - Tekst: "Odredi svoj profil korisnika (invalidnina, dječiji dodatak, stariji korisnik) i saznaj koje su tvoje mjesečne primanja."
   - `fontSize: 1rem`
   - `color: var(--color-gray-500)`
   - `marginBottom: var(--spacing-8)`
   - `lineHeight: 1.6`

5. **Action Link**
   ```jsx
   <div className="flex items-center justify-center gap-2">
   ```
   - `color: var(--color-primary-600)`
   - `fontWeight: 600`
   - `fontSize: 1.125rem`
   
   a) **Tekst** - `<span>` "Otvori"
   b) **Ikona** - ArrowRight
      - `className: "icon"`
      - `width/height: 1.25rem`

**Funkcionalnost:**
- `onClick={() => navigate('/profil')}`
- `onKeyDown` - Enter/Space support
- `tabIndex={0}`
- `role="button"`
- `aria-label="Upoznaj svoj profil: Ko si i šta primaš"`

**Stilovi kartice:**
- `background: white`
- `borderRadius: var(--radius-2xl)`
- `border: 2px solid var(--color-gray-200)`
- `padding: var(--spacing-10)`
- `textAlign: center`
- `cursor: pointer`
- `position: relative`
- `overflow: hidden`
- ::after: Shimmer efekat
- Hover: 
  - `translateY(-12px)`
  - `scale(1.02)`
  - `box-shadow: var(--shadow-2xl), var(--glow-primary)`
  - `borderColor: primary-400`
  - Shimmer aktivacija

**Animacija:** fadeInUp (0.6s delay)

---

#### CARD 2 - PRAVA (Ljubičasta)

```jsx
<div className="feature-card animate-fade-in-up">
```

**Identična struktura kao Card 1, razlike:**

1. **Icon Container**
   - `background: linear-gradient(135deg, secondary-100, secondary-200)`
   - Ikona: **Shield**
   - `color: var(--color-secondary-600)`

2. **Naslov:** "Saznaj svoja prava"

3. **Kratak opis:** "Šta banka smije i ne smije"

4. **Detaljan opis:** "Nauči koja prava imaš nad svojim platnim računom. Razumij šta banka može i ne može da uradi bez tvoje dozvole."

5. **Action Link**
   - `color: var(--color-secondary-600)`

**Funkcionalnost:**
- `onClick={() => navigate('/prava')}`
- `aria-label="Saznaj svoja prava: Šta banka smije i ne smije"`

**Hover:**
- `borderColor: secondary-400`
- `glow-secondary`

**Animacija:** fadeInUp (0.7s delay)

---

#### CARD 3 - SIMULATOR (Zelena)

```jsx
<div className="feature-card animate-fade-in-up">
```

**Identična struktura, razlike:**

1. **Icon Container**
   - `background: linear-gradient(135deg, accent-100, accent-200)`
   - Ikona: **Calculator**
   - `color: var(--color-accent-600)`

2. **Naslov:** "Probaj simulator"

3. **Kratak opis:** "Vježbaj sa lažnim novcem"

4. **Detaljan opis:** "Simuliraj mjesečne troškove, planiraj budžet i nauči da upravljaš svojim primanjima. Potpuno sigurna okolina za učenje."

5. **Action Link**
   - `color: var(--color-accent-600)`

**Funkcionalnost:**
- `onClick={() => navigate('/simulator')}`
- `aria-label="Probaj simulator: Vježbaj sa lažnim novcem"`

**Hover:**
- `borderColor: accent-400`
- `glow-accent`

**Animacija:** fadeInUp (0.8s delay)

---

### 6. "ZAŠTO KORISTITI FINSIM?" SEKCIJA

```jsx
<div className="finsim-card animate-fade-in-up">
```

**Container stilovi:**
- `marginBottom: var(--spacing-16)`
- `animationDelay: 0.9s`
- `background: white`
- `borderRadius: var(--radius-2xl)`
- `border: 2px solid var(--color-gray-200)`
- `padding: var(--spacing-8)`
- ::before: Top accent bar (hidden by default)
- Hover: shadow i border color change

---

#### A) HEADER

```jsx
<div className="text-center">
```

**Stilovi:**
- `marginBottom: var(--spacing-10)`

**Elementi:**

1. **Ikona** - BookOpen
   ```jsx
   <BookOpen className="icon-xl">
   ```
   - `color: var(--color-primary-600)`
   - `width/height: 3rem`
   - `margin: 0 auto var(--spacing-6)`
   - `display: block`

2. **Naslov**
   ```jsx
   <h2>
   ```
   - Tekst: "Zašto koristiti FinSim?"
   - `marginBottom: var(--spacing-4)`
   - `fontSize: 2.5rem`

3. **Subtitle**
   ```jsx
   <p>
   ```
   - Tekst: "Edukativna platforma kreirana posebno za starije osobe i korisnike sa posebnim potrebama"
   - `fontSize: 1.125rem`
   - `color: var(--color-gray-600)`
   - `maxWidth: 700px`
   - `margin: 0 auto`

---

#### B) BENEFITS GRID (6 elemenata)

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-8)' }}>
```

**Grid stilovi:**
- `display: grid`
- `gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))`
- `gap: var(--spacing-8)`

---

##### Benefit 1 - Jednostavno i razumljivo

```jsx
<div className="flex gap-4">
```

**Elementi:**
1. **Ikona** - CheckCircle
   - `className: "icon-lg"`
   - `style: color: var(--color-accent-500), flexShrink: 0`
   - `width/height: 2rem`

2. **Content** - `<div>`
   
   a) **Naslov** - `<h4>`
      - Tekst: "Jednostavno i razumljivo"
      - `marginBottom: var(--spacing-2)`
      - `color: var(--color-gray-900)`
      - `fontSize: 1.5rem`
   
   b) **Opis** - `<p>`
      - Tekst: "Veliki fontovi, jasne ikone i intuitivna navigacija prilagođena svima"
      - `fontSize: 1rem`
      - `color: var(--color-gray-600)`
      - `lineHeight: 1.7`

---

##### Benefit 2 - Potpuno besplatno

**Identična struktura, razlike:**
- **Naslov:** "Potpuno besplatno"
- **Opis:** "Bez skrivenih troškova, registracije ili pretplate. Pristupi odmah."

---

##### Benefit 3 - Sigurna simulacija

**Razlike:**
- **Naslov:** "Sigurna simulacija"
- **Opis:** "Nikakvi pravi podaci. Vježbaj bez straha i grešaka koliko god želiš."

---

##### Benefit 4 - Dostupno svima

**Razlike:**
- **Naslov:** "Dostupno svima"
- **Opis:** "Prilagođeno za starije osobe i osobe sa posebnim potrebama."

---

##### Benefit 5 - Praktično učenje

**Razlike:**
- **Naslov:** "Praktično učenje"
- **Opis:** "Uči kroz interaktivne primjere i simulacije stvarnih situacija."

---

##### Benefit 6 - Mobilno prilagođeno

**Razlike:**
- **Naslov:** "Mobilno prilagođeno"
- **Opis:** "Radi na svim uređajima - telefon, tablet ili računar."

---

### 7. BOTTOM CTA SECTION

```jsx
<div className="glass-strong animate-fade-in-up">
```

**Container stilovi:**
- `padding: var(--spacing-12)`
- `borderRadius: var(--radius-2xl)`
- `textAlign: center`
- `marginBottom: var(--spacing-16)`
- `border: 2px solid var(--color-gray-200)`
- `animationDelay: 1s`
- Glassmorphism: `background: rgba(255, 255, 255, 0.9)`, `backdrop-filter: blur(20px)`

**Elementi:**

1. **Naslov**
   ```jsx
   <h2>
   ```
   - Tekst: "Spreman za početak?"
   - `marginBottom: var(--spacing-6)`

2. **Opis**
   ```jsx
   <p>
   ```
   - Tekst: "Započni svoju finansijsku edukaciju već danas. Potpuno besplatno i bez obaveza."
   - `fontSize: 1.25rem`
   - `color: var(--color-gray-600)`
   - `marginBottom: var(--spacing-8)`
   - `maxWidth: 600px`
   - `margin: 0 auto var(--spacing-8)`

3. **CTA Buttons Container**
   ```jsx
   <div className="flex items-center justify-center gap-4">
   ```
   - `flexWrap: wrap`
   
   a) **Button 1 - Primary**
      ```jsx
      <button className="btn btn-primary btn-lg">
      ```
      - Tekst: "Započni učenje" + ArrowRight ikona
      - `onClick={() => navigate('/koraci')}`
      - Z-index na sadržaju za ripple efekat
   
   b) **Button 2 - Outline**
      ```jsx
      <button className="btn btn-outline btn-lg">
      ```
      - Calculator ikona + "Probaj simulator"
      - `onClick={() => navigate('/simulator')}`

**Animacija:** fadeInUp (1s delay)

---

### 8. FOOTER INFO

```jsx
<div className="text-center animate-fade-in-up">
```

**Container stilovi:**
- `paddingTop: var(--spacing-12)`
- `paddingBottom: var(--spacing-8)`
- `borderTop: 2px solid var(--color-gray-200)`
- `animationDelay: 1.1s`
- `role="contentinfo"`

**Element:**

```jsx
<p style={{ fontSize: '1.125rem', color: 'var(--color-gray-500)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
```

**Sadržaj (3 key points sa separatorima):**

1. **Point 1**
   ```jsx
   <span className="flex items-center gap-2">
   ```
   - CheckCircle ikona (`icon`, `color: accent-500`)
   - Tekst: "Besplatno"

2. **Separator**
   ```jsx
   <span style={{ color: 'var(--color-gray-300)' }}>•</span>
   ```

3. **Point 2**
   ```jsx
   <span className="flex items-center gap-2">
   ```
   - CheckCircle ikona
   - Tekst: "Bez unosa pravih podataka"

4. **Separator** - `•`

5. **Point 3**
   ```jsx
   <span className="flex items-center gap-2">
   ```
   - CheckCircle ikona
   - Tekst: "Prilagođeno starijim osobama"

**Animacija:** fadeInUp (1.1s delay)

---

## 📊 UKUPAN BROJ ELEMENATA

### Glavne Sekcije: **8**
1. Decorative Background (2 blobs)
2. Warning Banner
3. Info Banner
4. Hero Section (badge + title + subtitle + description + 2 buttons)
5. Feature Cards Grid (3 kartice)
6. "Zašto koristiti?" sekcija (header + 6 benefita)
7. Bottom CTA Section
8. Footer Info

### Interaktivni Elementi: **10**
- 2 Hero CTA buttons
- 3 Feature cards (clickable)
- 2 Bottom CTA buttons
- 3 Navigation links (implicitno u Layout)

### Ikone: **21**
- AlertCircle (Warning)
- Sparkles (Info)
- TrendingUp (Badge)
- ArrowRight (4×)
- Users (1×)
- Wallet (Card 1)
- Shield (Card 2)
- Calculator (Card 3 + Bottom CTA)
- BookOpen (Section header)
- CheckCircle (9× - 6 benefits + 3 footer)

### Tekstualni Elementi: **30+**
- Naslovi (h1, h2, h3, h4)
- Paragrafi
- Button labels
- Link tekstovi

### Animacije: **19**
- 2 Float animacije (blobs)
- 17 Entry animacija (fadeInUp/Down, scaleIn)
- ∞ Infinite animacije (pulse, gradientShift, float)

### CSS Klase Korištene: **40+**
- Layout: flex, grid-features, container
- Components: feature-card, btn, banner, finsim-card
- Effects: glass-strong, decorative-blob, gradient-text
- Animations: animate-fade-in-up, animate-float, animate-pulse
- Utilities: text-center, flex, items-center, gap-*

### Inline Styles: **60+**
- Spacing (margin, padding)
- Colors
- Font sizes
- Animation delays
- Positioning
- Dimensions

---

## 🎨 Vizuelni Hijerarhija

```
Level 1 (Najvažnije):
  - Hero Title "FinSim"
  - Primary CTA "Započni odmah"

Level 2 (Važno):
  - Feature Cards (3×)
  - Warning Banner
  - Section Naslovi

Level 3 (Sekundarno):
  - Info Banner
  - Descriptions
  - Benefits Grid

Level 4 (Supporting):
  - Icons
  - Secondary Buttons
  - Footer Info

Level 5 (Dekorativno):
  - Background Blobs
  - Separatori
  - Hover efekti
```

---

**UKUPNO: 100+ individualna elementa sa naprednim dizajnom i funkcionalnostima!** 🎨✨
