// ==========================================================
// utils.js - وظائف مساعدة: Lazy Loading, Icons
// ==========================================================

// 1. وظيفة تحديث أيقونة وضع الليل (Exported function)
export function updateToggleIcon(isDarkMode, element) {
    if (!element) return;
    const icon = element.querySelector('i');
    icon.classList.toggle('fa-sun', !isDarkMode);
    icon.classList.toggle('fa-moon', isDarkMode);
}

// 2. التحميل الكسول للصور (Intersection Observer for Lazy Loading)
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // إلغاء تحميل lazy والسماح بالتحميل الفعلي
                    img.removeAttribute('loading'); 
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "0px 0px 50px 0px" }); // تحميل قبل 50 بكسل من الرؤية

        lazyImages.forEach(img => {
            observer.observe(img);
        });
    }

    console.log('Utils JS: تم تطبيق التحميل الكسول للصور.');
});

// يمكنك إضافة وظيفة Form Validation هنا أيضًا
