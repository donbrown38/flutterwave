
const card1 = document.querySelectorAll("#class_card");

let currentIndex = 0,

setInterval(() => {
   const currentImage = item[currentIndex];
   const nextIndex = (currentIndex + 1) % images.length;
   const nextImage = item[nextIndex];
   
   currentImage.style.opacity = 0;
   nextImage.style.opacity = 1;

   currentIndex = nextIndex

}, 3000);