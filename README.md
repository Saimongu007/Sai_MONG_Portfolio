# 🚀 Saimongu Marma - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and an elegant dark/light theme toggle.

![Portfolio Preview](https://sai-mong-portfolio.vercel.app/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** - Frosted glass effects with backdrop blur
- **Responsive Layout** - Optimized for mobile, tablet, and desktop (320px - 1920px+)
- **Dark/Light Theme Toggle** - Smooth 250ms transitions with lavender (light) and deep purple (dark) accents
- **Premium Animations** - GSAP-powered scroll animations with pop-up effects
- **Micro-interactions** - Hover effects, button lifts, and smooth transitions (200-350ms)

### 📱 Sections

#### 1. **Hero Section**
- Animated rotating role text (Frontend Developer, MERN Stack Developer, Problem Solver)
- Premium profile photo with glow effect
- Direct social media links (GitHub, LinkedIn, Facebook)
- Professional tagline and CTA buttons

#### 2. **About Section**
- Current project badge with live status
- Tech stack display with icons
- Personal interests showcase
- Journey timeline with milestones

#### 3. **Skills Section**
- Categorized skill layout (Frontend, Backend, Mobile, Tools)
- Animated progress bars
- Skill descriptions and proficiency levels
- Bounce-in animations on scroll

#### 4. **Education Section**
- Timeline layout with academic background
- Institution details and dates
- Slide-in animations

#### 5. **Achievements Section**
- Horizontal grid layout
- LeetCode, HackerRank, and other achievements
- Icon-based visual representation

#### 6. **Portfolio Section**
- 3-column grid layout (responsive)
- Project cards with:
  - Technology tags
  - Difficulty indicators
  - Role specifications
  - Multiple action buttons (Live Demo, GitHub, Case Study)
- Hover pop effects with scale and shadow

#### 7. **Contact Section**
- Strong call-to-action banner
- LinkedIn and Resume download buttons
- Contact information cards with icons
- Professional contact form
- "Available for opportunities" status indicator

#### 8. **Footer**
- Minimal, modern design
- Quick links (Projects, Resume, Contact)
- Social media icons
- Copyright information

### 🎬 Animations

#### Scroll Animations
- **Section Fade-In** - Titles and subtitles with blur removal
- **Hero Parallax** - Smooth parallax scrolling effect
- **Skill Card Bounce** - Elastic bounce with `back.out(1.4)` easing
- **Timeline Slide-In** - Staggered left-to-right animation
- **Project Card Pop** - Scale and lift on scroll reveal
- **Progress Bar Fill** - Animated width transition

#### Hover Animations
- **Button Lift** - `translateY(-2px)` with shadow
- **Card Hover** - Scale + shadow + border glow
- **Headline Letter Spacing** - Expands on hover
- **Icon Rotation** - Theme toggle spins 360°

#### Theme Toggle Animation
- Icon rotation (360°) with scale
- Smooth color fade (250ms)
- Pulse effect on click
- Glow effects (lavender/purple)

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Modern syntax, modules

### Libraries & Frameworks
- **GSAP 3.12.2** - Professional animation library
- **ScrollTrigger** - Scroll-based animations
- **Swiper.js 10** - Touch slider (if needed)
- **Unicons 4.0.8** - Icon library

### Fonts
- **Poppins** - Google Fonts (100-900 weights)

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── main.js                 # JavaScript functionality
├── profile.png             # Profile picture
├── assets/
│   ├── css/               # Additional CSS (if any)
│   ├── js/                # Additional JS (if any)
│   ├── pdf/               # Resume PDF
│   ├── blob.svg           # SVG graphics
│   └── *.png              # Project screenshots
├── .vscode/               # VS Code settings
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Saimongu007/portfolio.git
cd portfolio
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
```

3. **Using Live Server (VS Code)**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

### Configuration

#### Update Personal Information

**1. Edit `index.html`:**
```html
<!-- Update name, title, description -->
<h1 class="home__title">Your Name</h1>
<span class="home__subtitle">Your Title</span>

<!-- Update social links -->
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
```

**2. Edit `main.js`:**
```javascript
// Update rotating roles
const roles = [
    "Your Role 1",
    "Your Role 2",
    "Your Role 3"
];
```

**3. Replace Images:**
- Add your profile picture as `profile.png`
- Add project screenshots to `assets/`
- Update image paths in HTML

**4. Update Resume:**
- Add your resume PDF to `assets/pdf/resume.pdf`
- Update download link in HTML

## 🎨 Customization

### Color Scheme

**Light Mode (Lavender):**
```css
:root {
    --first-color: hsl(265, 65%, 65%);
    --first-color-lighter: hsl(265, 85%, 88%);
    --glow-color: rgba(167, 139, 250, 0.4);
}
```

**Dark Mode (Deep Purple):**
```css
body.dark-theme {
    --first-color: hsl(250, 69%, 61%);
    --glow-color: rgba(99, 102, 241, 0.5);
}
```

### Animation Timing
```css
:root {
    --theme-transition: 250ms ease-in-out;
}
```

### Breakpoints
- **Mobile**: 320px - 567px
- **Tablet**: 568px - 767px
- **Desktop**: 768px - 1023px
- **Large Desktop**: 1024px+

## 📊 Performance

### Optimization Features
- **GPU Acceleration** - Transform and opacity animations
- **Lazy Loading** - Images load on demand
- **Minified Assets** - Compressed CSS/JS (production)
- **Smooth 60fps** - Hardware-accelerated animations
- **Intersection Observer** - Efficient scroll detection

### Best Practices
- Semantic HTML5
- Accessible ARIA labels
- SEO-friendly meta tags
- Mobile-first approach
- Progressive enhancement

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 📱 Responsive Design

### Mobile (< 568px)
- Single column layout
- Stacked navigation
- Touch-optimized buttons
- Reduced animations

### Tablet (568px - 767px)
- 2-column grid for projects
- Horizontal navigation
- Balanced spacing

### Desktop (768px+)
- 3-column grid for projects
- Full navigation bar
- Enhanced animations
- Sticky sidebar (contact)

## 🔧 Development

### Local Development
```bash
# Install dependencies (if using build tools)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Code Style
- **Indentation**: 4 spaces
- **Naming**: BEM methodology for CSS
- **Comments**: Descriptive section headers
- **Organization**: Grouped by component

## 📝 To-Do / Future Enhancements

- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add testimonials slider
- [ ] Create admin panel for content management
- [ ] Add analytics integration
- [ ] Implement PWA features
- [ ] Add multi-language support
- [ ] Create API for dynamic content

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Saimongu Marma**
- GitHub: [@Saimongu007](https://github.com/Saimongu007)
- LinkedIn: [Saimongu Marma](https://www.linkedin.com/in/saimongu-marma/)
- Email: saimongumarma39@gmail.com

## 🙏 Acknowledgments

- **GSAP** - For amazing animation library
- **Unicons** - For beautiful icons
- **Google Fonts** - For Poppins font family
- **Swiper.js** - For touch slider functionality

## 📞 Support

For support, email saimongumarma39@gmail.com or open an issue on GitHub.

---

<div align="center">
  <p>Made with ❤️ by Saimongu Marma</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
