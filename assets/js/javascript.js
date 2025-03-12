// اضافه کردن به اسکریپت موجود
document.addEventListener('DOMContentLoaded', function() {
    // اسلایدرهای محصولات
    const productSwipers = document.querySelectorAll(".product-swiper");
    productSwipers.forEach((element) => {
      new Swiper(element, {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
    
    // اسلایدر موقعیت‌های مکانی
    if (window.innerWidth <= 768) {
      new Swiper('.location-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
      });
    }
  });