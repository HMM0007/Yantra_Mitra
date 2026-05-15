# YantraMitra AI - Premium Portfolio Website

A modern, premium, highly interactive single-page portfolio website for **YantraMitra AI** - an AI-powered agricultural mobile application designed to help farmers diagnose machinery problems instantly.

## 🌾 Project Overview

YantraMitra AI is a startup showcasing website built with modern web technologies. It features:

- **Modern Design**: Clean, elegant, premium startup aesthetic
- **Interactive Animations**: Smooth Framer Motion animations throughout
- **Glassmorphism UI**: Contemporary design patterns with glass effects
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading and smooth interactions
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Features

### Sections Included:

1. **Hero Section** - Captivating headline with CTA buttons and animated mobile mockup
2. **About Section** - YantraMitra AI project overview and key features
3. **Features Section** - 6 interactive feature cards with hover animations
4. **How It Works** - Step-by-step timeline showing the process
5. **Why YantraMitra AI** - Statistics and impact cards
6. **Team Section** - Meet the team with social links
7. **Technology Stack** - Technologies and tools used
8. **Future Vision** - Roadmap and upcoming features
9. **Contact/Footer** - Call-to-action and contact information
10. **Sticky Navbar** - Navigation with smooth scroll
11. **Scroll-to-Top Button** - Smooth scroll back to top

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins & Inter (Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Clone or navigate to the project**
   ```bash
   cd d:\YantraMitra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Color Palette

- **Sage Green** (Primary): `#8bc863`, `#6ba84d`
- **Forest Green** (Dark): `#1f4221`, `#365e39`
- **White** (Background): `#ffffff`
- **Light Sage**: `#f9fdf6`, `#e0eea1`

### Typography

- **Headings**: Poppins (Bold, 600-800 weight)
- **Body**: Inter / Poppins (Regular, 400-500 weight)

### Spacing

- Mobile: 16px padding
- Tablet: 24px padding
- Desktop: 32px+ padding

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

### Animation Effects
- Floating animations on hero elements
- Smooth scroll reveal animations
- Hover scale and lift effects
- Gradient and glow animations
- Staggered animations on card reveals

### Interactive Elements
- Smooth scroll navigation
- Mobile menu toggle
- Interactive buttons with hover states
- Scroll-to-section functionality
- Animated progress indicators

### Performance
- Optimized images and assets
- Lazy loading on scroll
- Smooth 60fps animations
- Minimal CSS bundle size

## 🔧 Component Structure

```
src/
├── App.jsx           # Main component with all sections
├── main.jsx          # React entry point
└── index.css         # Global styles and Tailwind imports

Configuration files:
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS customization
├── postcss.config.js # PostCSS plugins
├── index.html        # HTML template
├── package.json      # Dependencies
└── .gitignore        # Git ignore rules
```

## 🎬 Animation Libraries Used

- **Framer Motion**: Advanced animations and gestures
- **CSS Animations**: Custom keyframe animations
- **Tailwind CSS**: Utility-based animations

## 🌐 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  sage: { /* your colors */ },
  forest: { /* your colors */ }
}
```

### Modify Content
Edit sections in `App.jsx`:
- Team members
- Features list
- Technology stack
- Roadmap items

### Adjust Animations
Modify animation parameters in:
- `tailwind.config.js` - Global animations
- `App.jsx` - Component-specific animations

## 📊 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Upload dist folder to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop dist folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📝 Logo Integration

The logo placeholder shows "YM" initials. To add the YantraMitra AI logo:

1. Save logo as `logo.svg` or `logo.png` in `public/`
2. Update the navbar logo in `App.jsx`:
   ```jsx
   <img src="/logo.svg" alt="YantraMitra AI" className="w-10 h-10" />
   ```

## ✨ Premium Features Implemented

✅ Smooth scroll behavior
✅ Modern glassmorphism design
✅ Animated gradient backgrounds
✅ Interactive hover effects
✅ Floating particles and shapes
✅ Sticky navigation
✅ Section reveal animations
✅ Responsive mobile-first design
✅ Professional typography hierarchy
✅ CTA button animations
✅ Smooth transitions throughout
✅ Performance optimized

## 📱 Mobile Responsiveness

- Mobile-first approach
- Touch-friendly interactions
- Optimized spacing for small screens
- Hamburger menu for mobile navigation
- Readable font sizes on all devices
- Proper image scaling

## 🔐 Security

- No sensitive data in client code
- Proper form validation
- HTTPS ready
- Content Security Policy compatible

## 📄 License

This project is proprietary to YantraMitra AI. All rights reserved.

## 👥 Team

- **Aditya Golande**
- **Harshal More**
- **Vishwapratap Kamble**
- **Suyash Sonawane**
- **Prasad Kadam**

## 🤝 Support

For questions or support, email: contact@yantramitra.ai

---

**Built with ❤️ for empowering farmers through technology**

"तुमच्या शेतीसाठी स्मार्ट साथी" - Your Smart Companion for Farming
