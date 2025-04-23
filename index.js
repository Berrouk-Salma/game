const objects = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const duplicatedObjects = [...objects, ...objects]; 
// console.log(duplicatedObjects);
function jumble(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

jumble(duplicatedObjects);
// console.log(duplicatedObjects);
const mindGame = document.getElementById('Mind-game');
duplicatedObjects.forEach(object => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.card = object;

    const cardInner = document.createElement('div');
    cardInner.textContent = object;
    cardInner.classList.add('card-inner');

    card.appendChild(cardInner);
    mindGame.appendChild(card);
});