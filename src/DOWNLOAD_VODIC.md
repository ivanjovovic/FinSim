# 📥 Detaljni vodič za download i setup

## 🎯 DVA NAČINA ZA PREUZIMANJE

---

## ✅ METODA 1: Download iz Figma Make (PREPORUČENO)

### Korak 1: Pronađi Download dugme
1. U Figma Make interfejsu, **gore desno** traži dugme **"Download"** ili **"Export"**
2. Može biti ikonica strelice nadole ⬇️

### Korak 2: Download projekta
1. Klikni na **Download** dugme
2. Projekat će se preuzeti kao `.zip` fajl
3. Ime fajla će biti nešto kao: `finsim-redizajn.zip`

### Korak 3: Raspakuj projekat
**Windows:**
```
1. Desni klik na .zip fajl
2. "Extract All..." ili "Izvadi sve..."
3. Odaberi lokaciju (npr. Desktop ili Documents)
4. Klikni "Extract"
```

**Mac:**
```
1. Dupli klik na .zip fajl
2. Automatski će se raspakovat
```

### Korak 4: Dodaj video fajl
```
1. Otvori raspakovan folder
2. Navigiraj do: finsim-redizajn/src/pages/
3. Kopiraj svoj video i preimenuj ga u: video-racun.mp4
4. Stavi ga u pages/ folder
```

### Korak 5: Otvori terminal
**Windows:**
```
1. Otvori raspakovan folder
2. Pritisni Shift + Desni klik (u praznom prostoru)
3. Odaberi "Open PowerShell window here" ili "Open in Terminal"
```

**Mac:**
```
1. Otvori raspakovan folder u Finder-u
2. Desni klik na folder
3. "Services" → "New Terminal at Folder"
Ili: Drag & drop folder u Terminal app
```

**Linux:**
```
1. Otvori Terminal
2. Navigiraj do foldera:
   cd ~/Downloads/finsim-redizajn
```

### Korak 6: Instaliraj dependencies
U terminalu upiši:
```bash
npm install
```

Čekaj 1-2 minuta dok se instaliraju paketi.

**Šta ako dobiješ grešku?**
```bash
# Pokušaj:
npm cache clean --force
npm install
```

### Korak 7: Pokreni projekat
```bash
npm run dev
```

**Trebao bi vidjeti:**
```
VITE v5.3.4  ready in 823 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.5:5173/
➜  press h to show help
```

### Korak 8: Otvori u browseru
1. Otvori browser (Chrome, Firefox, Edge)
2. Idi na: **http://localhost:5173**
3. **GOTOVO!** ✅

---

## 🔧 METODA 2: Manualno kreiranje (ako Download ne radi)

### Korak 1: Kreiraj novi Vite projekat
Otvori terminal i upiši:

```bash
npm create vite@latest finsim-redizajn -- --template react
```

Odgovori na pitanja:
```
? Select a framework: › React
? Select a variant: › TypeScript
```

### Korak 2: Uđi u folder
```bash
cd finsim-redizajn
```

### Korak 3: Instaliraj dependencies
```bash
npm install
npm install react-router-dom lucide-react html2canvas recharts
```

### Korak 4: Kreiraj strukturu foldera
**Windows (PowerShell):**
```powershell
# U folderu projekta:
mkdir src\components\figma
mkdir src\components\ui
mkdir src\data
mkdir src\pages
mkdir src\styles
```

**Mac/Linux:**
```bash
mkdir -p src/components/figma
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/pages
mkdir -p src/styles
```

### Korak 5: Kopiraj fajlove iz Figma Make

Sada moraš **ručno kopirati** sadržaj svakog fajla iz Figma Make:

#### **Lista fajlova za kopiranje:**

1. **Config fajlovi (u root folderu):**
   - `package.json` ✅ (već kreiran gore)
   - `vite.config.ts`
   - `tsconfig.json`
   - `tsconfig.node.json`
   - `index.html`

2. **Glavni fajlovi:**
   - `src/App.tsx`
   - `src/main.tsx`

3. **Stilovi:**
   - `src/styles/globals.css` ⭐ (VAŽNO!)

4. **Stranice:**
   - `src/pages/LandingPage.jsx`
   - `src/pages/StepsPage.jsx`
   - `src/pages/ProfilePage.jsx`
   - `src/pages/RightsPage.jsx`
   - `src/pages/SimulatorPage.jsx`
   - `src/pages/video-racun.mp4` 🎥

5. **Komponente:**
   - `src/components/Layout.tsx`
   - `src/components/ProtectedRoute.tsx`
   - `src/components/figma/ImageWithFallback.tsx`

6. **Data:**
   - `src/data/profiles.ts`

**KAKO KOPIRATI:**
```
1. Otvori fajl u Figma Make editoru
2. Selektuj sav kod (Ctrl+A / Cmd+A)
3. Kopiraj (Ctrl+C / Cmd+C)
4. Kreiraj isti fajl lokalno
5. Paste (Ctrl+V / Cmd+V)
6. Sačuvaj
```

### Korak 6: Provjeri strukturu
Tvoja struktura bi trebala izgledati ovako:

```
finsim-redizajn/
├── node_modules/          (nakon npm install)
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
│   │   └── video-racun.mp4
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Korak 7: Pokreni projekat
```bash
npm run dev
```

---

## 🎥 Provjera da li Video Radi

1. Pokreni aplikaciju (`npm run dev`)
2. U browseru idi na: **http://localhost:5173/koraci**
3. Scroll dole do **"Video vodič: Kako otvoriti račun?"** sekcije
4. Video bi trebao biti vidljiv sa kontrolama

**Ako video ne radi:**
- ✅ Provjeri ime: `video-racun.mp4` (tačno ovako!)
- ✅ Provjeri lokaciju: `src/pages/video-racun.mp4`
- ✅ Provjeri da je format `.mp4`
- ✅ Probaj hard refresh: `Ctrl+Shift+R`

---

## 📱 Testiranje na Telefonu (Opciono)

### Korak 1: Pokreni sa --host opcijom
```bash
npm run dev -- --host
```

### Korak 2: Pronađi IP adresu

**Windows:**
```bash
ipconfig
```
Traži liniju:
```
IPv4 Address. . . . . . . . . : 192.168.1.XXX
```

**Mac:**
```bash
ifconfig | grep inet
```
Ili otvori System Preferences → Network

**Linux:**
```bash
hostname -I
```

### Korak 3: Na telefonu
1. Povezuj se na **istu WiFi mrežu** kao računar
2. Otvori browser na telefonu
3. Idi na: `http://192.168.1.XXX:5173`
4. Gotovo! Možeš testirat responsive dizajn! 📱

---

## 🔍 Debugging

### Provjeri da li Node.js postoji:
```bash
node --version
```
**Trebao bi vidjeti:** `v18.0.0` ili novije

Ako ne:
- Preuzmi sa: https://nodejs.org/
- Instaliraj LTS verziju
- Restartuj terminal

### Provjeri da li npm postoji:
```bash
npm --version
```
**Trebao bi vidjeti:** `9.0.0` ili novije

### Provjeri da li si u pravom folderu:
```bash
# Windows
dir

# Mac/Linux
ls
```

**Trebao bi vidjeti:**
- `package.json`
- `src/` folder
- `node_modules/` (nakon npm install)

### Očisti sve i počni ispočetka:
```bash
# Obriši node_modules i package-lock
rm -rf node_modules package-lock.json

# Windows (PowerShell):
Remove-Item -Recurse -Force node_modules, package-lock.json

# Reinstaliraj
npm install
```

---

## ✅ Checklist

Prije nego pokreneš projekat, provjeri:

- [ ] Node.js je instaliran (`node --version`)
- [ ] npm je instaliran (`npm --version`)
- [ ] Projekat je preuzet/kreiran
- [ ] Video je na pravom mjestu (`src/pages/video-racun.mp4`)
- [ ] Dependencies su instalirani (`npm install`)
- [ ] Nema grešaka u terminalu
- [ ] Browser je spreman 🌐

---

## 🎉 Gotovo!

Ako si pratio sve korake, projekat bi trebao raditi!

**Komande za pamćenje:**
```bash
npm install      # Samo jednom (instaliraj pakete)
npm run dev      # Svaki put (pokreni projekat)
```

**Browser:**
```
http://localhost:5173
```

---

## 🆘 Ako nešto ne radi

1. **Provjeri terminal** - da li ima grešaka?
2. **Provjeri browser console** - pritisni `F12`
3. **Probaj restart:**
   ```bash
   # Zatvori dev server (Ctrl+C)
   # Pokreni ponovo
   npm run dev
   ```
4. **Probaj drugi browser** (Chrome, Firefox)
5. **Probaj drugi port:**
   ```bash
   npm run dev -- --port 3000
   ```

---

**Sretno! 🚀**

Ako imaš bilo kakvih pitanja, javi mi grešku/problem pa ću pomoći! 💪
