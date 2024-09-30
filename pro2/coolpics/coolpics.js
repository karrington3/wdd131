// Toggle menu for small screens
function toggleMenu() {
    var menu = document.getElementById('navMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Show image in modal
function showImage(src) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = src;
}

// Close modal when clicked
function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}
