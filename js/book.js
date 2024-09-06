document.querySelectorAll('.room-card').forEach(card => {
    const button = card.querySelector('.book');
    
    let isBooked = false; 

    button.addEventListener('click', function(event) {
        isBooked = true; 
        event.stopPropagation(); 
    });

    card.addEventListener('mouseleave', function() {
        if (isBooked) {
            card.classList.remove('available');
            card.classList.add('booked'); 
            isBooked = false; 
        }
    });
});
