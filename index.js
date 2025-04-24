const objects = ['salma', 'amina', 'vaja', 'zineb', 'sajo', 'selva', 'Y', 'S', 'sajoselva'];

const duplicatedObjects = [...objects, ...objects]; 


function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


shuffleArray(duplicatedObjects);


const mindGame = document.getElementById('Mind-game');
duplicatedObjects.forEach(object => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.card = object;
  card.addEventListener('click', handleCardClick);
  
  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');
  

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-front');
  

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-back');
  cardBack.textContent = object;

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  mindGame.appendChild(card);
});


let selectedCards = [];
let attempts = 0;
let matchedPairs = 0;
const totalPairs = objects.length;

document.getElementById("Efforts").textContent = "Try count: " + attempts;


function handleCardClick() {
  
  if(selectedCards.length < 2 && 
     !this.classList.contains('flipped') && 
     !this.classList.contains('matched')) {
    
  
    this.classList.add("flipped");
    selectedCards.push(this);
    
  
    if(selectedCards.length === 2) {
      
      attempts++;
      document.getElementById("Efforts").textContent = "Try count: " + attempts;
      
      
      setTimeout(() => {
        const [firstCard, secondCard] = selectedCards;
        
        if(firstCard.dataset.card === secondCard.dataset.card) {
        
          firstCard.classList.add('matched');
          secondCard.classList.add('matched');
          matchedPairs++;
          
       
          if(matchedPairs === totalPairs) {
            showGameComplete();
          }
        } else {
         
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
        }
        
       
        selectedCards = [];
      }, 1000);
    }
  }
}

function showGameComplete() {
  const note = document.getElementById("Note");
  note.textContent = `Congratulations! You completed the game in ${attempts} attempts.`;
  note.classList.add('game-complete');
}