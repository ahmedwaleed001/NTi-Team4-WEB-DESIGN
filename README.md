# Holy Donuts - Web Application

## 🍩 About
Holy Donuts is a modern web application for a donut shop, featuring a beautiful UI and full e-commerce functionality.

## 🚀 Features
- **Responsive Design**: Works perfectly on all devices
- **User Authentication**: Login/Register system with role-based access
- **Product Catalog**: Browse donuts, coffee, sandwiches, and ice blended drinks
- **Shopping Cart**: Add/remove items with quantity management
- **Admin Dashboard**: Manage users and products
- **Payment Integration**: Stripe payment processing
- **Modern UI**: Beautiful design with smooth animations

## 🛠️ Technologies Used
- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (ES6+)
- Local Storage for data persistence
- Font Awesome for icons

## 📁 Project Structure
```
NTi-Team4-WEB-DESIGN/
├── assets/
│   └── img/           # Product images and icons
├── css/               # Stylesheets
├── js/                # JavaScript files
├── pages/             # HTML pages
└── index.html         # Homepage
```

## 🚀 How to Run

### Option 1: Using Live Server (Recommended)
1. Install Visual Studio Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

### Option 2: Using Python
```bash
# Navigate to project directory
cd NTi-Team4-WEB-DESIGN

# Start Python server
python -m http.server 8000

# Open browser and go to
http://localhost:8000
```

### Option 3: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd NTi-Team4-WEB-DESIGN

# Start server
http-server

# Open browser and go to the URL shown in terminal
```

## 🔧 Fixed Issues

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

## 👥 Default Users

### Admin Account
- Email: `admin@donuts.com`
- Password: `admin123`

### User Account
- Email: `user@donuts.com`
- Password: `user123`

## 🛒 How to Use

1. **Browse Products**: Visit the menu page to see all available items
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the navigation
4. **Checkout**: Proceed to checkout and complete payment
5. **Admin Panel**: Login with admin credentials to manage the store

## 🎨 Design Features
- Pink color scheme matching the donut theme
- Smooth animations and transitions
- Mobile-first responsive design
- Modern card-based layouts
- Interactive hover effects

## 📱 Responsive Design
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔒 Security Features
- Input validation on forms
- Password confirmation
- Role-based access control
- Secure data storage in localStorage

## 🚀 Deployment Ready
The project is now ready for deployment on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📞 Support
For any issues or questions, please check the code comments or contact the development team.

---

**Note**: This is a frontend-only application using localStorage for data persistence. For production use, consider implementing a backend server with a proper database.
