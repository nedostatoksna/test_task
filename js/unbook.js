document.querySelectorAll('.room-card').forEach(function(card) {
    card.addEventListener('click', function(event) {
        const targetClassesToExclude = event.target.classList.contains('book') 
            || event.target.classList.contains('room-booked') 
            || event.target.classList.contains('room-booked__text')
            || event.target.classList.contains('room-booked__text-wrapper')
            || event.target.classList.contains('room-booked__link');
            
        if (targetClassesToExclude) {
            return;  
        }
        else if (card.classList.contains('booked')) {
            card.classList.remove('booked');
            card.classList.add('available');
        } 
    });
});