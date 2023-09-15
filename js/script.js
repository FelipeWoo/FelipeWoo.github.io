document.addEventListener("DOMContentLoaded", function() {
    const images = ['img/img1.svg', 'img/img2.svg', 'img/img2.svg','img/img3.svg' ,'img/img2.svg','img/img2.svg'];  // Add more image names here
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("prendamex-image").src = images[index];
    }, 10000);  // 10 seconds
});
