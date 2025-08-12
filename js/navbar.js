// navbar.js
// تحكم في ظهور أزرار الناف بار حسب حالة تسجيل الدخول

function updateNavbarAuth() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');
    const userNameSpan = document.getElementById('userName');

    if (user) {
        // إذا كان المستخدم مسجل دخول: إخفاء أزرار Login/Sign Up وإظهار قائمة المستخدم
        if (authButtons) authButtons.style.display = 'none';
        if (userMenu) {
            userMenu.style.display = 'flex';
            userMenu.classList.remove('hidden');
            if (userNameSpan) userNameSpan.textContent = user.username;
        }
    } else {
        // إذا لم يكن مسجل دخول: إظهار أزرار Login/Sign Up وإخفاء قائمة المستخدم
        if (authButtons) authButtons.style.display = 'flex';
        if (userMenu) {
            userMenu.style.display = 'none';
            userMenu.classList.add('hidden');
        }
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
}

// تنفيذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', updateNavbarAuth);
