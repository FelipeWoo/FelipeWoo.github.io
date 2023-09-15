document.addEventListener("DOMContentLoaded", function() {
    const images = ['img/img1.jpg', 'img/img2.jpg'];  // Add more image names here
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("rotating-image").src = images[index];
    }, 20000);  // 20 seconds
});
