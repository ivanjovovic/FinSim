# 🎨 ProfilePage - Ultra-Premium Redesign

Kompletno redizajnirana stranica za odabir profila korisnika.

---

## ✅ ŠTA JE URAĐENO

### 1. **Fullscreen Layout** ✅
- `minHeight: calc(100vh - 200px)` - Puna visina ekrana
- Decorative background blobs
- Container narrow (1200px max-width)
- Centiran sadržaj

### 2. **Premium Design** ✅
- Glassmorphism efekti
- Gradient icon containers
- Glow shadows na selected kartice
- Smooth animacije i transitions
- Hover efekti

### 3. **Mobile-First** ✅
- `repeat(auto-fit, minmax(320px, 1fr))` grid
- Responsive spacing
- Touch-friendly click areas
- Adaptive typography

---

## 📋 STRUKTURA STRANICE (Po redoslijedu)

### 1. **Decorative Background** (2 bloba)
```jsx
Primary blob (top-right, 350px)
Accent blob (bottom-left, 300px)
```
- Float animacije
- Različiti delays

---

### 2. **Header Section**

#### A) Step Badge
```jsx
<div className="hero-badge animate-scale-in">
```
**Elementi:**
- TrendingUp ikona
- "Korak 1 od 4" tekst

**Stilovi:**
- Gradient background (primary-50 → secondary-50)
- Border + shadow
- Scale in animacija

---

#### B) Title
```jsx
<h1>Izaberi svoj profil</h1>
```
**Stilovi:**
- Default h1 size (3rem/48px)
- fadeInUp animacija (0.1s delay)
- Margin bottom: 1.5rem

---

#### C) Subtitle
```jsx
<p>Pomozi nam da prilagodimo savjete...</p>
```
**Stilovi:**
- Font size: 1.25rem
- Color: gray-600
- Max-width: 800px
- Center aligned
- fadeInUp animacija (0.2s delay)

---

### 3. **Profile Cards Grid** (5 kartica)

**Grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: var(--spacing-6);
```

**Kartice:**
1. Korisnik minimalne zarade (Plava)
2. Korisnik materijalnog obezbjeđenja (Zelena)
3. Korisnik lične invalidnine (Crvena)
4. Korisnik dodatka za njegu i pomoć (Ljubičasta)
5. Korisnik naknade za nezaposlene (Narančasta)

---

#### STRUKTURA SVAKE KARTICE:

```jsx
<div className="finsim-card animate-fade-in-up">
```

**A) Selected Indicator** (samo kad je selected)
```jsx
<div style={{ position: 'absolute', top-right }}>
  <Check icon />
</div>
```
**Stilovi:**
- 3rem circle
- Gradient background
- Check ikona (1.75rem)
- Scale in animacija
- Glow shadow

---

**B) Icon Container**
```jsx
<div style={{ width: 4.5rem, height: 4.5rem }}>
  <Icon />
</div>
```
**Stilovi:**
- Gradient background (unique za svaki profil)
- XL border radius
- Margin bottom: 1.5rem
- Scale(1.1) when selected
- Smooth transition

**Ikone:**
- Minimalna zarada: **Briefcase**
- Materijalno: **Wallet**
- Invalidnina: **Heart**
- Njega: **HandHeart**
- Nezaposleni: **Briefcase**

---

**C) Title**
```jsx
<h3>Profile Label</h3>
```
**Stilovi:**
- Font size: 1.375rem
- Margin bottom: 0.75rem
- Gray-900 color

---

**D) Income Badge**
```jsx
<div style={{ inline-flex, badge }}>
  <Wallet icon />
  <span>Preporučeni: XXX €</span>
</div>
```
**Stilovi:**
- Inline-flex layout
- Padding: 0.5rem 1rem
- Full border radius
- Background: selected ? rgba(white, 0.8) : gray-100
- Font weight: 600
- Profile icon color
- Margin bottom: 1rem

---

**E) Description**
```jsx
<p>{profile.description}</p>
```
**Stilovi:**
- Font size: 1rem
- Color: gray-600
- Line height: 1.7

---

**F) Hover Indicator** (samo kad nije selected)
```jsx
<div className="flex items-center justify-center gap-2">
  <span>Klikni za odabir</span>
</div>
```
**Stilovi:**
- Margin top: 1.5rem
- Color: gray-500
- Font size: 1rem

---

**KARTICA STATES:**

**Default (not selected):**
- Background: white
- Border: 2px solid gray-200
- Shadow: md

**Hover (not selected):**
- Transform: lift
- Border color: lighter
- Shadow: increase

**Selected:**
- Background: profile bgColor (light tint)
- Border: 2px solid profile iconColor
- Shadow: xl + glow (30px blur profile color)
- Icon scale: 1.1
- Selected indicator visible

**Focus:**
- Outline: 3px solid primary
- Accessible via keyboard (Tab, Enter, Space)

**Animation:**
- fadeInUp with staggered delay (0.3s + index * 0.1s)

---

### 4. **Custom Income Section** (Pokazuje se kada je profil odabran)

```jsx
<div className="finsim-card glass-strong animate-scale-in">
```

**Container stilovi:**
- Glassmorphism (strong blur)
- Border: 2px solid selected profile color
- Shadow: xl + glow
- Scale in animacija

---

#### A) Header
```jsx
<div className="flex items-center gap-4">
```

**Elementi:**
1. **Icon Container**
   - 3.5rem circle
   - Gradient background (profile color)
   - XL border radius
   - Sparkles ikona

2. **Text Container**
   - **Title (h2)**: "Unesi mjesečni iznos naknade"
   - **Subtitle (p)**: "Možeš prilagoditi iznos..."

---

#### B) Input Field

**Label:**
```jsx
<label htmlFor="income">Mjesečni prihod (€)</label>
```
**Stilovi:**
- Font size: 1.125rem
- Font weight: 600
- Margin bottom: 1rem

**Input Container:**
```jsx
<div style={{ position: 'relative' }}>
```

**Euro Symbol:**
```jsx
<span style={{ position: absolute, left }}>€</span>
```
**Stilovi:**
- Font size: 1.5rem
- Font weight: 700
- Profile icon color
- Z-index: 1

**Input Element:**
```jsx
<input type="number" min="0" step="10" />
```
**Stilovi:**
- Width: 100%
- Padding: 1.5rem 1.5rem 1.5rem 3.5rem
- Font size: 2rem (VELIKI za starije)
- Font weight: 700
- Background: white
- Border: 3px solid profile color
- XL border radius
- Box shadow: 0 0 0 4px glow color
- **Focus**: Shadow increase (6px glow)

**Pomoćni tekst:**
```jsx
<p>Preporučeni iznos za ... : XXX €</p>
```
**Stilovi:**
- Font size: 1rem
- Color: gray-500
- Margin top: 0.75rem

---

#### C) Continue Button

```jsx
<button className="btn btn-primary btn-lg">
  <span>Nastavi dalje</span>
  <ArrowRight icon />
</button>
```

**Stilovi:**
- Width: 100%
- Primary gradient background
- Large size
- Disabled kada nema input ili je ≤ 0
- Ripple efekat
- Z-index layering za ripple visibility

**States:**
- **Enabled**: Full opacity, pointer cursor
- **Disabled**: 0.5 opacity, not-allowed cursor
- **Hover**: Background shift, lift, shadow increase
- **Active**: Scale(0.96)

---

### 5. **Help Card** (Pokazuje se kada NIJE odabran profil)

```jsx
<div className="banner banner-info glass-strong animate-fade-in-up">
```

**Container:**
- Info banner stil
- Glassmorphism
- fadeInUp animacija (0.8s delay)

**Elementi:**

**A) Icon Container**
- 3.5rem circle
- Gradient primary background
- XL border radius
- Info ikona (lg size)

**B) Content**
- **Title (h3)**: "Zašto biramo profil?"
  - Font size: 1.375rem
  - Color: primary-900
  - Margin bottom: 0.75rem

- **Text (p)**: Objašnjenje
  - Font size: 1.125rem
  - Color: primary-800
  - Line height: 1.7

---

### 6. **Success Message** (Pokazuje se kada JE odabran profil)

```jsx
<div className="banner banner-success glass animate-scale-in">
```

**Container:**
- Success banner stil
- Glassmorphism (light)
- Scale in animacija

**Elementi:**

**A) Check Icon**
- lg size
- Accent-600 color
- Flex-shrink: 0

**B) Content**
- **Title (p)**: "Odličan izbor!"
  - Font size: 1.125rem
  - Font weight: 600
  - Color: accent-900

- **Text (p)**: "Odabrali ste profil: ..."
  - Font size: 1rem
  - Color: accent-800
  - Selected profile name bolded

---

## 🎨 DESIGN FEATURES

### Premium Effects

**1. Glassmorphism**
- Strong blur na input sekciji
- Light blur na success/help banners

**2. Glow Shadows**
- Selected kartica: 30px blur profile color
- Input field: 4px → 6px on focus
- Selected indicator: 12px blur

**3. Gradients**
- Icon containers: unique za svaki profil
- Step badge: primary → secondary
- Continue button: blue → purple

**4. Animations**
- Entry: fadeInUp (staggered)
- Badge: scaleIn
- Selected indicator: scaleIn
- Float: background blobs
- Scale on selected icon

**5. Transitions**
- All: var(--transition-slow) (300ms)
- Smooth hover lifts
- Border color changes
- Shadow increases

---

## ♿ ACCESSIBILITY

### Keyboard Navigation ✅
- Tab through cards
- Enter/Space to select
- Tab to input
- Tab to button
- Enter to continue

### ARIA ✅
- `role="button"` na kartice
- `aria-label` sa punim opisom
- `aria-pressed={isSelected}` state
- `aria-label` na input i button

### Focus Indicators ✅
- 3px outline na sve
- Vidljiv focus state
- High contrast

### Large Inputs ✅
- Input: 2rem font size (32px)
- Large click areas
- High contrast borders

---

## 📱 RESPONSIVE BEHAVIOR

### Desktop (>1024px)
- Grid: 2-3 columns (auto-fit)
- Full spacing (6rem)

### Tablet (768px - 1024px)
- Grid: 2 columns
- Reduced spacing

### Mobile (360px - 768px)
- Grid: 1 column
- Stacked layout
- Full width button
- Touch-friendly (min 44px tap targets)

---

## 🎯 USER FLOW

1. **Ulaz na stranicu** → Header + Grid kartice vidljivi
2. **Help card** vidljiv (nije odabran profil)
3. **Klik na karticu** → Kartica se označava (selected state)
4. **Success message** se pojavljuje
5. **Input sekcija** se pojavljuje (scale in)
6. **Unos iznosa** → Button postaje enabled
7. **Klik na Continue** → Navigate to /prava

---

## 💾 LOCAL STORAGE

```js
localStorage.setItem('selectedProfile', profileId);
localStorage.setItem('monthlyIncome', customIncome);
```

**Koristi se za:**
- Praćenje odabranog profila kroz app
- Simulacije u Simulator stranici
- Personalizovani savjeti

---

## 🎨 PROFILE COLORS

| Profil | Icon | Gradient | Glow |
|--------|------|----------|------|
| Minimalna zarada | Briefcase | Blue → Cyan | Blue (0.3) |
| Materijalno | Wallet | Green → Emerald | Green (0.3) |
| Invalidnina | Heart | Red → Pink | Red (0.3) |
| Njega i pomoć | HandHeart | Purple → Violet | Purple (0.3) |
| Nezaposleni | Briefcase | Orange → Amber | Orange (0.3) |

---

## 📊 ELEMENTS COUNT

- **Glavne sekcije**: 6 (Header, Grid, Input, Help, Success, Background)
- **Profile kartice**: 5
- **Interaktivni elementi**: 7 (5 cards + 1 input + 1 button)
- **Ikone**: 15+
- **Animacije**: 12+
- **Conditional renders**: 3 (Input, Help, Success)

---

## 🚀 PERFORMANCE

- Single page render
- Conditional rendering (samo što treba)
- CSS animations (GPU accelerated)
- Local state (useState)
- LocalStorage za persistence

---

## ✅ CHECKLIST

- ✅ Fullscreen layout
- ✅ Premium dizajn (glassmorphism, gradients, glow)
- ✅ Mobile-first responsive
- ✅ Keyboard accessible
- ✅ Screen reader friendly
- ✅ Large fonts za starije
- ✅ Touch-friendly
- ✅ Smooth animacije
- ✅ User flow logičan
- ✅ LocalStorage persistence
- ✅ Clean JSX kod
- ✅ Inline + CSS classes

---

**ProfilePage je spremna za korištenje! 🎉**

*Ultra-premium design, pristupačnost, i odličan UX!*
