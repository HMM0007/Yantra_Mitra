# YantraMitra AI - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

### Step 3: Start Building!
Edit files in the `src/` folder and see changes instantly.

---

## 📖 What's Included

- **Modern React Setup**: Latest React 18 with Vite
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Professional animations
- **Lucide Icons**: Beautiful icon library
- **Responsive Design**: Works on all devices
- **Production Ready**: Optimized and minified

---

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📁 Project Structure

```
YantraMitra/
├── src/
│   ├── App.jsx          ← Main component
│   ├── main.jsx         ← Entry point
│   └── index.css        ← Global styles
├── public/
│   └── logo.svg         ← Logo file
├── index.html           ← HTML template
├── vite.config.js       ← Vite config
├── tailwind.config.js   ← Tailwind config
├── package.json         ← Dependencies
└── README.md            ← Full documentation
```

---

## 🎯 Next Steps

1. **Customize Logo**: Replace `public/logo.svg` with your actual logo
2. **Add Social Links**: Update links in the Contact section
3. **Update Team Info**: Edit team member details
4. **Deploy**: Push to GitHub, Netlify, or Vercel

---

## 🌐 Deploy to Production

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Drag dist/ folder to Netlify
```

### GitHub Pages
```bash
# Build
npm run build

# Push dist/ to gh-pages branch
```

---

## 💡 Tips & Tricks

- Customize colors in `tailwind.config.js`
- Edit content directly in `App.jsx`
- Use Framer Motion docs for advanced animations
- Lucide React has 1000+ icons available

---

## ❓ Troubleshooting

### Port 3000 is already in use
```bash
# Kill process on port 3000
# Windows: taskkill /PID <PID> /F
# Mac/Linux: lsof -ti:3000 | xargs kill -9
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying
```bash
# Clear cache and rebuild
npm run build
npm run preview
```

---

## 📞 Support

For issues or questions:
- Check the README.md for detailed docs
- Review the code comments in App.jsx
- Visit Framer Motion docs: https://www.framer.com/motion/
- Visit Tailwind CSS docs: https://tailwindcss.com/

---

## 🎉 Happy Building!

This is a professional-grade portfolio website ready for production. Customize it to match your brand and deploy!

**"तुमच्या शेतीसाठी स्मार्ट साथी"** - Your Smart Companion for Farming
