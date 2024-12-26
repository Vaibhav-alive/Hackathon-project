function show() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block'
    const container = document.getElementById('container')
    container.classList.add('overlay')
    const container2 = document.getElementById('m-container')
    container2.classList.add('overlay')
    const table = document.getElementById('table')
    table.classList.add('overlay')
}

 
 document.addEventListener('DOMContentLoaded', function() {
    let span = document.getElementById('btn');
    span.onclick = function() {
        let modal = document.getElementById('myModal');
        modal.style.display = 'none';
       let container = document.getElementById('container')
       container.classList.remove('overlay')
       let container2 = document.getElementById('m-container')
        container2.classList.remove('overlay')
        let table = document.getElementById('table')
        table.classList.remove('overlay')
    }

    // Select all elements with the class 'card-1' inside the main-container
const cards = document.querySelectorAll('.main-container .card-1');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the animation
            entry.target.classList.add('visible');
            // Optionally, unobserve the element after it has been animated
            observer.unobserve(entry.target);
        }
    });
});

// Start observing each card
cards.forEach(card => {
    observer.observe(card);
});
});

