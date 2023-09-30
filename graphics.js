
var modal = document.getElementById('image-modal');
var modalImage = document.getElementById('modal-content');
var closeButton = document.getElementById('close-button');

// Add click event listeners to all images
var images = document.querySelectorAll('.modal-image');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Get filter buttons and posts
const filterButtons = document.querySelectorAll('.sample2');
const posts = document.querySelectorAll('.post');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Remove "selected" class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // Add "selected" class to the clicked button
        button.classList.add('selected');

        // Show/hide posts (div elements) based on the filter
        posts.forEach(post => {
            const postCategory = post.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === postCategory) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});