// navbar.js
// تحكم في ظهور أزرار الناف بار حسب حالة تسجيل الدخول

function updateNavbarAuth() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');
    const userNameSpan = document.getElementById('userName');

    if (user) {
        if (authButtons) authButtons.style.display = '';
        if (userMenu) {
            userMenu.style.display = 'flex';
            if (userNameSpan) userNameSpan.textContent = user.username;
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
}

// تنفيذ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', updateNavbarAuth);
