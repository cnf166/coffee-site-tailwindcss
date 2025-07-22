# CoffeeStyle Template Clone

A pixel-perfect clone of the CoffeeStyle Webflow template, built with modern web technologies.

## 🌐 Live Demo

**[View Live Site](https://cnf166-coffee-site-clone.web.app/)**

## 📖 Project Overview

This project is a faithful recreation of the [CoffeeStyle Webflow template](https://coffeestyle-template.webflow.io/), reimplemented using vanilla HTML, CSS, and Tailwind CSS. The goal was to practice frontend development skills while creating a responsive, modern coffee shop website.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern CSS**: Utilizes Tailwind CSS for efficient styling and consistent design system
- **Clean Code**: Well-structured HTML with semantic markup
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Cross-browser Compatible**: Works across all modern browsers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and animations
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Firebase Hosting**: Deployment platform

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- A modern web browser
- A code editor (VS Code recommended)
- Node.js (for Tailwind CSS development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cnf166/coffee-site-tailwindcss.git
cd coffee-site-clone
```

2. Install Tailwind CSS (if setting up development environment):
```bash
npm install -D tailwindcss
npx tailwindcss init
```

3. Build CSS (for development):
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

4. Open `index.html` in your browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📁 Project Structure

```
coffee-site-clone/
├── public/
│   ├── assets              # Image/Video assets
│   └── index.html          # Main HTML file Compiled
|   └── main.js             # JavaScript files
├── src/
│   ├── input.css           # Compiled Tailwind CSS
|
├── README.md               # Project documentation
└── package.json            # Node.js dependencies
```

## 🎨 Design Features

- Hero section with compelling coffee imagery
- Product showcase with hover effects
- About section highlighting coffee quality
- Contact information and location details
- Smooth scrolling navigation
- Mobile-first responsive design

## 📱 Responsive Breakpoints

The site is optimized for the following breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above


## 🚀 Deployment

This project is deployed on Firebase Hosting. To deploy your own version:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Deploy:
```bash
firebase deploy
```

## 📊 Performance

The site is optimized for:
- Fast loading times
- Minimal HTTP requests
- Optimized images
- Efficient CSS delivery

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@cnf166](https://github.com/cnf166)

## 🙏 Acknowledgments

- Original design by [Webflow CoffeeStyle Template](https://coffeestyle-template.webflow.io/)
- Tailwind CSS team for the amazing utility framework
- Firebase team for hosting services

## 📞 Contact

If you have any questions about this project, please feel free to reach out:

- Email: nguyenvietanh166.fw@gmail.com

---

**⭐ If you found this project helpful, please give it a star!**
