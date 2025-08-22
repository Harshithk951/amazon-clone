# Amazon Clone - E-commerce Website

A responsive Amazon clone built with HTML, CSS, and JavaScript. This project replicates the look and feel of Amazon's website with a modern, mobile-friendly design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Dropdown menus, search functionality, and mobile navigation
- **Product Showcase**: Multiple product categories with image galleries
- **Hero Carousel**: Auto-rotating banner images with navigation controls
- **Modern UI/UX**: Clean, professional design following Amazon's design principles
- **Cross-browser Compatible**: Works on all modern browsers

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Project Structure

```
amazon-clone/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── banner1.jpg     # Hero banner images
│   ├── banner2.jpg
│   ├── banner3.jpg
│   ├── banner4.jpg
│   ├── banner5.jpg
│   ├── amazon-logo.jpg # Amazon logo
│   ├── Prime.jpg       # Prime membership image
│   └── products/       # Product category images
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
   ```

2. Open `index.html` in your web browser

3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. Navigate to `http://localhost:8000` in your browser

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to GitHub
2. Go to your repository Settings
3. Scroll down to "GitHub Pages" section
4. Select "Deploy from a branch"
5. Choose the branch (usually `main` or `master`)
6. Click "Save"

Your site will be available at: `https://yourusername.github.io/amazon-clone`

### Other Hosting Platforms

- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload files to S3 bucket

## Features in Detail

### Navigation
- Responsive navbar with search functionality
- Country/region selector
- Language dropdown with multiple options
- Account and cart functionality
- Mobile hamburger menu

### Hero Section
- Auto-rotating carousel with 5 banner images
- Navigation arrows and dot indicators
- Responsive image sizing

### Product Categories
- Appliances (Air conditioners, Refrigerators, etc.)
- Home & Kitchen (Bedding, Decor, Storage, Lighting)
- Under ₹499 deals
- Baby care & toys
- Headphones (boAt, BOULT, Noise, Zebronics)
- TV screens (4K, Ultra Premium, Big Screens)
- Electronics (Phones, Laptops, Tablets, Headphones)
- Beauty & Personal Care
- Bikes (7 different models)

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Breakpoints for different screen sizes
- Touch-friendly interactions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes only. All Amazon branding and design elements are property of Amazon.com, Inc.

## Acknowledgments

- Amazon.com for the design inspiration
- Font Awesome for the icons
- Google Fonts for typography
- Unsplash and other image sources for product images

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/amazon-clone/issues) page
2. Create a new issue with detailed description
3. Include browser version and device information

## Roadmap

- [ ] Add shopping cart functionality
- [ ] Implement user authentication
- [ ] Add product search and filtering
- [ ] Create product detail pages
- [ ] Add payment integration
- [ ] Implement wishlist feature
- [ ] Add product reviews and ratings
- [ ] Create admin panel

---

**Note**: This is a demo project created for educational purposes. It does not include actual e-commerce functionality like real payments, inventory management, or user accounts.
