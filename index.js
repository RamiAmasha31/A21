      document.addEventListener('DOMContentLoaded', function () {
    const imageSlider = document.getElementById('image-slider');
    const images = [
        'images/resturant/image1.avif',
        'images/resturant/image2.avif',
        'images/resturant/image3.avif',
        'images/resturant/image4.avif',
        'images/resturant/image5.avif',
        'images/resturant/image6.avif',
        'images/resturant/image7.avif',
        // Add more image URLs as needed
    ];
    let currentImageIndex = 0;

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newImage = new Image();
        newImage.src = images[currentImageIndex];
        newImage.alt = 'Gallery Image';
        newImage.className = 'rounded-md cursor-pointer transition duration-300 transform hover:scale-105';
        
        // Replace the existing image with the new one
        imageSlider.innerHTML = '';
        imageSlider.appendChild(newImage);
    }

    // Change image every 5 seconds
    setInterval(changeImage, 5000);
});
        function toggleSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the selected section
            const selectedSection = document.getElementById(sectionId);
            selectedSection.classList.remove('hidden');
        }
        function toggleSection1(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.part');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the selected section
            const selectedSection = document.getElementById(sectionId);
            selectedSection.classList.remove('hidden');
        }
   