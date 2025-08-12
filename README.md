# 🍩 Holy Donuts - E-Commerce Web Application

## 📋 Project Overview

**Holy Donuts** is a modern, responsive web application for a donut shop, featuring a beautiful UI and complete e-commerce functionality. This project demonstrates modern web development practices with a focus on user experience and responsive design.

## ✨ Key Features

### 🎨 Design & UI
- **Responsive Design**: Perfectly works on all devices (phones, tablets, desktops)
- **Modern UI**: Beautiful design with pink color scheme matching donut theme
- **Smooth Animations**: Elegant transitions and visual effects
- **Mobile-First**: Optimized mobile experience

### 🔐 User Management
- **Authentication System**: Complete login/register functionality
- **Role Management**: Regular users and admin roles
- **User Profiles**: Edit personal information
- **Secure Data Storage**: Safe browser-based storage

### 🛍️ E-Commerce Features
- **Product Catalog**: Browse donuts, coffee, sandwiches, and ice blended drinks
- **Shopping Cart**: Add/remove products with quantity management
- **Product Filtering**: Filter by categories
- **Product Details**: Detailed product information pages

### 👨‍💼 Admin Dashboard
- **User Management**: View, edit, delete user accounts
- **Product Management**: Add, edit, delete products
- **Statistics**: View user and product counts
- **Easy-to-Use Interface**: Simple and clear design

### 💳 Payment System
- **Stripe Integration**: Secure and reliable payment processing
- **Checkout Page**: Easy-to-use payment form
- **Order Confirmation**: Payment success page

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Page structure
- **CSS3**: Styling and layout
- **Bootstrap 5**: Responsive design framework
- **JavaScript (ES6+)**: Interactivity and functionality
- **Font Awesome**: Icons

### Data Storage
- **Local Storage**: User data and cart persistence
- **JSON**: Product data format

### External Services
- **Stripe**: Payment processing
- **CDN**: Bootstrap and Font Awesome libraries

## 📁 Project Structure

```
NTi-Team4-WEB-DESIGN/
├── 📁 assets/
│   └── 📁 img/
│       ├── 📁 donuts/          # Donut images
│       ├── 📁 coffee/          # Coffee images
│       ├── 📁 ice-blended/     # Ice blended drink images
│       ├── 📁 sandwich/        # Sandwich images
│       ├── 📁 tabs/            # Category icons
│       ├── 📁 icons/           # General icons
│       └── 📁 payment/         # Payment method icons
├── 📁 css/                     # Stylesheets
│   ├── home.css               # Homepage styling
│   ├── menu.css               # Menu page styling
│   ├── cart.css               # Shopping cart styling
│   ├── login.css              # Login page styling
│   ├── register.css           # Registration page styling
│   ├── admin.css              # Admin dashboard styling
│   ├── header.css             # Header styling
│   ├── footer.css             # Footer styling
│   └── details.css            # Product details styling
├── 📁 js/                      # JavaScript files
│   ├── menu.js                # Menu page logic
│   ├── cart.js                # Shopping cart logic
│   ├── login.js               # Login logic
│   ├── register.js            # Registration logic
│   ├── admin.js               # Admin dashboard logic
│   ├── navbar.js              # Navigation logic
│   ├── storage.js             # Local storage management
│   ├── detail.js              # Product details logic
│   └── products.json          # Product data
├── 📁 pages/                   # HTML pages
│   ├── menu.html              # Menu page
│   ├── cart.html              # Shopping cart page
│   ├── login.html             # Login page
│   ├── register.html          # Registration page
│   ├── admin.html             # Admin dashboard
│   ├── profile.html           # User profile page
│   ├── details.html           # Product details page
│   ├── contact.html           # Contact page
│   ├── about.html             # About page
│   ├── checkout.html          # Checkout page
│   └── success.html           # Payment success page
├── 📄 index.html              # Homepage
├── 📄 README.md               # Documentation
└── 📄 .gitignore              # Git ignore file
```

## 🚀 How to Run the Project

### Method 1: Live Server (Recommended)
1. Install Visual Studio Code
2. Install the "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"

### Method 2: Python
```bash
# Navigate to project directory
cd NTi-Team4-WEB-DESIGN

# Start Python server
python -m http.server 8000

# Open browser and go to
http://localhost:8000
```

### Method 3: Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd NTi-Team4-WEB-DESIGN

# Start server
http-server

# Open browser and go to the URL shown in terminal
```

## 👥 Default User Accounts

### Admin Account
- **Email**: `admin@donuts.com`
- **Password**: `admin123`
- **Permissions**: Manage users and products

### Regular User Account
- **Email**: `user@donuts.com`
- **Password**: `user123`
- **Permissions**: Shopping and account management

## 🛒 How to Use the Application

### For Regular Users
1. **Browse Products**: Go to the menu page to see all available products
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the navigation
4. **Manage Quantities**: Increase or decrease quantities in cart
5. **Complete Order**: Go to checkout and complete payment
6. **Manage Account**: Edit personal information from profile page

### For Admins
1. **Login**: Use admin account credentials
2. **Manage Users**: View, edit, delete user accounts
3. **Manage Products**: Add new products or edit existing ones
4. **Monitor Statistics**: View user and product counts

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Pink (#ff69b4) - matches donut theme
- **Secondary Color**: Light pink (#ff91c7)
- **Light Color**: Very light pink (#ffb3d9)
- **Dark Color**: Dark gray (#333)

### Responsive Design
- **Desktop**: Full display with multi-column layout
- **Tablet**: Medium layout optimized for medium screens
- **Mobile**: Single column layout optimized for phones

### Visual Effects
- **Hover Effects**: Effects when hovering over elements
- **Smooth Transitions**: Smooth transitions between pages
- **Loading Animations**: Loading animations
- **Card Design**: Elegant card design for products

## 📱 Device Compatibility

### Supported Browsers
- ✅ Chrome (Version 60+)
- ✅ Firefox (Version 55+)
- ✅ Safari (Version 12+)
- ✅ Edge (Version 79+)

### Supported Devices
- ✅ Desktop computers
- ✅ Laptops
- ✅ Tablets (iPad, Android Tablets)
- ✅ Smartphones (iPhone, Android Phones)

## 🔒 Security Features

### Input Validation
- **Email Validation**: Correct email format validation
- **Password Validation**: Minimum 6 characters
- **Phone Validation**: Correct phone number format
- **Password Confirmation**: Password matching confirmation

### Session Management
- **Secure Storage**: Using localStorage for local storage
- **Role Management**: Separating user and admin permissions
- **Logout**: Removing session data on logout

## 🚀 Deployment Ready

The project is ready for deployment on the following platforms:

### GitHub Pages
```bash
# Upload project to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages from repository settings
```

### Netlify
1. Upload project to GitHub
2. Connect Netlify account to GitHub
3. Select Repository
4. Click Deploy

### Vercel
1. Upload project to GitHub
2. Connect Vercel account to GitHub
3. Select Repository
4. Click Deploy

### Any Static Hosting Platform
- Can upload files directly to any hosting platform
- No backend server required
- Works as a complete static site

## 🔧 Issues Fixed

### Path Issues (Resolved)
- ✅ Fixed all relative paths in HTML files
- ✅ Corrected image paths in products.json
- ✅ Fixed navigation links between pages
- ✅ Updated JavaScript file paths
- ✅ Corrected CSS file references

### Specific Fixes
1. **Menu Page**: Fixed products loading and image paths
2. **Contact Page**: Corrected navigation links
3. **Cart Page**: Fixed product image paths
4. **Admin Page**: Updated products.json path
5. **Login/Register**: Fixed redirect paths
6. **Details Page**: Corrected navigation and image paths

## 📞 Support & Help

### Troubleshooting
1. **Check Console**: Open Developer Tools (F12) and look for errors
2. **Check Paths**: Ensure all files are in the correct locations
3. **Check Browser**: Ensure using a modern browser
4. **Check Server**: Ensure local server is running correctly

### Getting Help
- Review code comments
- Check this README file
- Contact the development team

## 📝 Important Notes

### About the Application
- This is a frontend-only application using localStorage for data persistence
- For production use, consider adding a backend server with a proper database
- Data is stored locally in the user's browser

### Future Development
- Possibility to add a real database
- Add notification system
- Improve payment system
- Add additional features like ratings and reviews

---

**Developed by NTi-Team4** 🚀

**Last Updated**: December 2024
