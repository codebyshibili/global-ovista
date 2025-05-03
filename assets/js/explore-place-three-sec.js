document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /*
    * Home Two 
    * Explore Place section
  */

    const filterItems = document.querySelectorAll('.place-filters .nav-item');
    const prevButton = document.querySelector('.explore-place-prev');
    const nextButton = document.querySelector('.explore-place-next');
    const mobilePrevButton = document.querySelector('.mobile-btn .explore-place-prev');
    const mobileNextButton = document.querySelector('.mobile-btn .explore-place-next');

    let currentIndex = 0;

    // Function to update the active filter based on currentIndex
    function updateActiveFilter(index) {
        index = (index + filterItems.length) % filterItems.length; // Wrap around

        filterItems.forEach(item => item.classList.remove('filter-active'));
        filterItems[index].classList.add('filter-active');
        filterItems[index].click();
    }

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateActiveFilter(currentIndex);
    });

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateActiveFilter(currentIndex);
    });

    // Event listener for mobile buttons
    mobileNextButton.addEventListener('click', () => {
        currentIndex++;
        updateActiveFilter(currentIndex);
    });

    mobilePrevButton.addEventListener('click', () => {
        currentIndex--;
        updateActiveFilter(currentIndex);
    });

    // Initialize the active filter on load
    updateActiveFilter(currentIndex);


});
