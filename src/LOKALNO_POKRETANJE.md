# 🚀 Vodič za lokalno pokretanje FinSim projekta

## 📋 Preduslovi

Prije nego što počneš, instaliraj:
- **Node.js** (verzija 18 ili novija) - [Download](https://nodejs.org/)
- **npm** ili **yarn** (dolazi sa Node.js)
- **Git** (opciono) - [Download](https://git-scm.com/)

---

## 📥 METODA 1: Download iz Figma Make (Najlakše)

### Korak 1: Preuzmi projekat
1. Klikni na **"Download"** dugme u Figma Make interfejsu (gore desno)
2. Projekat će se preuzeti kao `.zip` fajl
3. **Raspakuj** `.zip` fajl u folder po izboru

### Korak 2: Otvori terminal
- **Windows:** Otvori folder, pa pritisni `Shift + Desni klik` → "Open PowerShell window here"
- **Mac/Linux:** Otvori Terminal i navigiraj do foldera:
  ```bash
  cd putanja/do/finsim-projekta
  ```

### Korak 3: Instaliraj dependencies
```bash
npm install
```

### Korak 4: Pokreni projekat
```bash
npm run dev
```

### Korak 5: Otvori u browseru
- Aplikacija će se pokrenuti na: **http://localhost:5173**
- Browser će se možda automatski otvoriti
- Ako ne, kopiraj link i otvori ga ručno

---

## 📁 METODA 2: Manualno kreiranje projekta

Ako download ne radi, slijedi ove korake:

### Korak 1: Kreiraj projekat

```bash
# Kreiraj Vite React projekat
npm create vite@latest finsim-redizajn -- --template react

# Uđi u folder
cd finsim-redizajn
```

### Korak 2: Instaliraj dependencies

```bash
# Osnovne dependencies
npm install react-router-dom lucide-react html2canvas recharts

# Tailwind CSS (opciono, već imamo globals.css)
npm install -D tailwindcss postcss autoprefixer
```

### Korak 3: Kopiraj fajlove

Sada moraš ručno kreirati sve fajlove iz Figma Make projekta:

#### **Struktura foldera:**
```
finsim-redizajn/
├── public/
│   └── (ostavi prazan)
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── data/
│   │   └── profiles.ts
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── StepsPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── RightsPage.jsx
│   │   ├── SimulatorPage.jsx
│   │   └── video-racun.mp4  👈 STAVI VIDEO OVDJE
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Korak 4: Kreiraj `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

### Korak 5: Kreiraj `main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Korak 6: Pokreni projekat

```bash
npm run dev
```

---

## 🎥 Dodavanje videa

### Gdje staviti video fajl:

**Opcija 1: U `/src/pages/` folder (trenutno u kodu)**
```
src/pages/video-racun.mp4
```

**Opcija 2: U `/public/` folder (preporučeno za veće fajlove)**
```
public/videos/video-racun.mp4
```

Ako staviš u `/public/`, **promijeni putanju u `StepsPage.jsx`:**

```jsx
// Promijeni ovu liniju:
src="/pages/video-racun.mp4"

// U:
src="/videos/video-racun.mp4"
```

### Podržani formati:
- ✅ `.mp4` (najbolja kompatibilnost)
- ✅ `.webm` (odlična kompresija)
- ✅ `.ogg`

---

## 🔧 Troubleshooting

### Problem: `npm install` ne radi
**Rješenje:**
```bash
# Očisti cache
npm cache clean --force

# Pokušaj ponovo
npm install
```

### Problem: Port 5173 je zauzet
**Rješenje:**
```bash
# Pokreni na drugom portu
npm run dev -- --port 3000
```

### Problem: Video se ne učitava
**Rješenje:**
1. Provjeri da je video na pravom mjestu
2. Provjeri ime fajla (mora biti `video-racun.mp4`)
3. Provjeri da je putanja ispravna u `StepsPage.jsx`
4. Reload stranice sa `Ctrl+Shift+R` (hard refresh)

### Problem: Stranica je prazna
**Rješenje:**
1. Provjeri browser console (`F12`)
2. Provjeri da li su svi fajlovi na pravom mjestu
3. Provjeri da li `globals.css` postoji

### Problem: TypeScript greške
**Rješenje:**
```bash
# Dodaj types
npm install -D @types/react @types/react-dom
```

---

## 📱 Mobile testiranje

### Na lokalnoj mreži:
1. **Pokreni dev server:**
   ```bash
   npm run dev -- --host
   ```

2. **Pronađi local IP adresu:**
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
   - Traži nešto kao `192.168.1.X`

3. **Na telefonu otvori:**
   ```
   http://192.168.1.X:5173
   ```

---

## 🏗️ Production Build

Kada završiš razvoj:

```bash
# Kreiraj production build
npm run build

# Preview production build
npm run preview
```

Build će biti u `dist/` folderu, spreman za deploy.

---

## 🎯 Brzi start (TL;DR)

```bash
# 1. Preuzmi i raspakuj projekat
# 2. Otvori terminal u folderu

npm install          # Instaliraj dependencies
npm run dev          # Pokreni projekat

# Otvori: http://localhost:5173
```

---

## 📞 Dodatna pomoć

Ako nešto ne radi:
1. Provjeri da li Node.js verzija je 18+: `node --version`
2. Provjeri da li si u pravom folderu: `ls` ili `dir`
3. Provjeri browser console za greške (`F12`)
4. Probaj restart terminal/editor

---

✅ **Gotovo! Projekat bi trebao da radi!** 🚀

Ako imaš problema, javi mi tačnu grešku pa ću pomoći! 💪
