const roomCardsGroup = document.querySelectorAll('.room-card');
const roomTitles = document.querySelectorAll('.room-description__link');

// book by click
roomCardsGroup.forEach(card => {
    const button = card.querySelector('.price-and-book__button');
    
    let isBooked = false; 

    button.addEventListener('click', () => {
        isBooked = true; 
    });

    card.addEventListener('mouseleave', () => {
        if (isBooked) {
            card.classList.add('booked'); 
            isBooked = false; 
        }
    });
});

// unbook by click
roomCardsGroup.forEach(card => {
    card.addEventListener('click', (event) => {
        const targetClassesToExclude = event.target.classList.contains('room-booked__link');
            
        if (targetClassesToExclude) {
            return;  
        }
        else if (card.classList.contains('booked')) {
            card.classList.remove('booked');
        } 
    });
});

// add visited class to the room link
roomTitles.forEach(title => {
    title.addEventListener('click', function(event) {
        event.preventDefault(); 
        this.classList.add('visited');
    });
});