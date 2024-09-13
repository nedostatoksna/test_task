const roomCardsGroup = document.querySelectorAll('.room-card');
const roomTitles = document.querySelectorAll('.room-description__link');

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

roomCardsGroup.forEach(card => {
    card.addEventListener('click', (event) => {
        const targetClassesToExclude = event.target.classList.contains('price-and-book__button') 
            || event.target.classList.contains('room-booked') 
            || event.target.classList.contains('room-booked__text')
            || event.target.classList.contains('room-booked__text-wrapper')
            || event.target.classList.contains('room-booked__link');
            
        if (targetClassesToExclude) {
            return;  
        }
        else if (card.classList.contains('booked')) {
            card.classList.remove('booked');
        } 
    });
});

roomTitles.forEach(title => {
    title.addEventListener('click', function(event) {
        event.preventDefault(); 
        this.classList.add('visited');
    });
});