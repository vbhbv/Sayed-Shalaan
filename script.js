document.addEventListener('DOMContentLoaded', () => {
    console.log('موقع توابل سيد شعلان الحيالي جاهز!');

    // مثال بسيط: إضافة تأثير عند النقر على زر
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // يمكنك إضافة وظيفة تتبع أو رسالة تأكيد هنا
            // alert('جارٍ نقلك لصفحة المنتجات...');
        });
    }

    // هنا يمكنك إضافة أي منطق تفاعلي آخر (مثل معرض صور، أو قائمة منسدلة)
});
