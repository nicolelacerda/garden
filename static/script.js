document.addEventListener('mousemove', function(event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY + 20; 
    
    const items = document.querySelectorAll('.item');
    let delay = 0;
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.left = `${mouseX}px`;
            item.style.top = `${mouseY}px`;
        }, delay);
        
        delay += 130; 
    });
});

const emojis = ['🌻', '🍀', '🍁', '🌸', '🍓', '🍅', '🌼', '🌿', '🍂', '🌵', '💐', '🍇', '🌴', '🥕', '💐', '🌹', '🌲', '🍄', '🌵', '🍂', '🌽'];
 
function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function plantar(event) {
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.textContent = getRandomEmoji();
    newItem.style.left = `${event.pageX - 20}px`;
    newItem.style.top = `${event.pageY - 20}px`;

    document.querySelector('.container').appendChild(newItem);
}

document.addEventListener('click', plantar);



