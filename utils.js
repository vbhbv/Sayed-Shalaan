// ==========================================================
// script.js - وظائف التحكم الرئيسية: وضع الليل والتنقل
// هذا الملف كان اسمه main.js سابقاً
// ==========================================================

// تم تغيير المسار ليناسب أن utils.js في نفس المجلد (الجذر)
import { updateToggleIcon } from './utils.js'; 

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. وظيفة وضع الليل (Dark Mode Logic)
    // ------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const localStorageKey = 'shalaan_modern_theme';
    
    let initialTheme = localStorage.getItem(localStorageKey);
    if (initialTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    updateToggleIcon(initialTheme === 'dark', themeToggle);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            const theme = isDark ? 'dark' : 'light';
            localStorage.setItem(localStorageKey, theme);
            updateToggleIcon(isDark, themeToggle);
        });
    }

    // 2. قائمة التنقل المتجاوبة (Responsive Navigation Toggle)
    // -----------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('site-navigation');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpened = navMenu.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpened); 
            
            menuToggle.querySelector('i').classList.toggle('fa-bars', !isOpened);
            menuToggle.querySelector('i').classList.toggle('fa-times', isOpened);
            document.body.classList.toggle('no-scroll', isOpened); 
        });
    }

    // 3. التمرير السلس (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('Script JS: تم تهيئة وظائف التحكم الأساسية بنجاح.');
});
