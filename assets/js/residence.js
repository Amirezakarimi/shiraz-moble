const galleryModal = $.querySelector(".gallery__modal");
const commentModal = $.querySelector(".comment__modal");
const imageBox = $.querySelector(".right__details");
const commentSend = $.querySelector(".comment__send");
const allOverlay = $.querySelector(".all__overlay");
const cancelComment = $.querySelector(".cancel__comment");
const cancelCommentIcon = $.querySelector("#cancel-comment");
const cancelGalleryIcon = $.querySelector(".cancel-gallery");

commentSend.addEventListener("click", () => {
  commentModal.classList.add("comment__modal--active");
  allOverlay.classList.add("overlay--active");
});

cancelComment.addEventListener("click", () => {
  commentModal.classList.remove("comment__modal--active");
  allOverlay.classList.remove("overlay--active");
});

cancelCommentIcon.addEventListener("click", () => {
  commentModal.classList.remove("comment__modal--active");
  allOverlay.classList.remove("overlay--active");
});

imageBox.addEventListener("click", () => {
  galleryModal.classList.add("gallery__modal--active");
  allOverlay.classList.add("overlay--active");
});

cancelGalleryIcon.addEventListener("click", () => {
  galleryModal.classList.remove("gallery__modal--active");
  allOverlay.classList.remove("overlay--active");  
});

allOverlay.addEventListener("click", () => {
  galleryModal.classList.remove("gallery__modal--active");
  allOverlay.classList.remove("overlay--active");
});

const images = document.querySelectorAll('.galley__img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// نمایش اولین تصویر
showImage(currentIndex);

// افزودن دکمه‌های بعدی و قبلی
document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);
