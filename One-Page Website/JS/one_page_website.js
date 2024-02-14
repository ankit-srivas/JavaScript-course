// one_page_website.js

// Function to open the lightbox
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Function to set up lightbox for all images
function setupLightbox() {
    var images = document.querySelectorAll('#pictures img');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });
}

// Run the setupLightbox function when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setupLightbox();
});
