# Jagannath Engineering & Equipment - Static Website

A complete multi-page static website for Jagannath Engineering & Equipment, a civil and industrial works company based in Odisha, India.

## Project Overview

This is a professional static website built with HTML5, Tailwind CSS, and vanilla JavaScript. The site showcases the company's engineering services, project portfolio, and credentials.

## Technology Stack

- **HTML5**: Semantic, accessible markup
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: Minimal JS for interactions
- **Libraries**:
  - GSAP + ScrollTrigger (animations)
  - AOS (scroll reveal animations)
  - Alpine.js (reactive components)
  - GLightbox (image gallery)
  - Lenis (smooth scrolling)

## Project Structure

```
jagannath-portfolio/
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── proprietor.jpg
│   │   ├── partners/
│   │   │   ├── tpl.png
│   │   │   └── ppel.png
│   │   └── projects/
│   │       ├── proj1.jpg
│   │       ├── proj2.jpg
│   │       └── ... (proj8.jpg)
│   └── favicon.ico
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── about.html
├── services.html
├── projects.html
├── certifications.html
├── contact.html
└── README.md
```

## Pages

1. **Home (index.html)**: Hero section, services overview, featured projects, stats, testimonials
2. **About (about.html)**: Company information, proprietor details, experience, timeline
3. **Services (services.html)**: Detailed service descriptions across all disciplines
4. **Projects (projects.html)**: Portfolio gallery with filtering and lightbox
5. **Certifications (certifications.html)**: Legal credentials and compliance information
6. **Contact (contact.html)**: Contact form, map, and business information

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags, structured data, semantic HTML
- **Accessibility**: ARIA labels, focus management, screen reader friendly
- **Performance**: Lazy loading, preloaded fonts, optimized images
- **Interactive Elements**: 
  - Smooth scrolling with Lenis
  - GSAP animations and counters
  - AOS scroll reveals
  - Alpine.js mobile menu and filtering
  - GLightbox image gallery

## Company Information

- **Firm**: Jagannath Engineering & Equipment
- **Proprietor**: Moti Ranjan Parida
- **Location**: Aradichhak, Bhadrak, Odisha - 756133
- **Phone**: +91 98536 87795
- **Email**: jagannathengineering2020@gmail.com
- **GST**: 21CNJPP2022R1ZH
- **UDYAM**: OD-05-0008533
- **License**: Class B (849MAL76)
- **Co-Partner**: SBM Infra Projects

## Services

### Direct Services:
- Civil Work
- Maintenance Work  
- Electrical Work
- Railway Work

### Partnership Services (via SBM Infra Projects):
- Mechanical Work
- Equipment Suppliers
- Medical Supply

## Key Partnerships

- **TATA Projects Limited (TPL)**: Infrastructure development
- **Power Plant Engineers Limited (PPEL)**: Power plant engineering

## Setup Instructions

1. Download/clone the repository
2. Open any HTML file in a web browser
3. For development, use a local server (e.g., Live Server in VS Code)
4. Update Formspree endpoint in contact.html for form functionality

## Contact Form Setup

The contact form uses Formspree. To activate:
1. Replace `xxxxdemo` in contact.html with your Formspree endpoint
2. Update the form action URL: `https://formspree.io/f/YOUR_FORM_ID`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Progressive enhancement approach

## License

This website is created for Jagannath Engineering & Equipment. All rights reserved.

---

**Built with modern web technologies for optimal performance and user experience.**