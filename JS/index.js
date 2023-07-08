let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU',
    },
    {
        'name': 'HTML',
        'img': 'data:image/png;base64,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',
    },
    {
        'name': 'jQuery',
        'img': 'https://static.javatpoint.com/jquerypages/images/jquery-tutorial.jpg',
    },
    {
        'name': 'JS',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433',
    },
    {
        'name': 'Node',
        'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
    },
    {
        'name': 'Python',
        'img': 'data:image/jpeg;base64,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',
    }
];



const parentDiv = document.querySelector('#card-section');

// step -2 get the 12 cards
const gameCard = cardsArray.concat(cardsArray);
// console.log(gameCard);

//shuffle array images in the game
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


// count the how many times the card click
let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the match card
const card_match = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((currElm) => {
        currElm.classList.add('card_match');
    })
}


const resetGame = () => {
    clickCount = 0;
    firstCard = "";
    secondCard = "";
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currElm) => {
        currElm.classList.remove('card_selected');
    })
}


// select the card and show which is selected
parentDiv.addEventListener('click', function (event) {
    let currCard = event.target;

    clickCount++;
    //these will select whole area we hava to remove the that
    if (currCard.id === 'card-section') {
        return false;
    }

    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected');

        }
        else {
            secondCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected');

        }
        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // currCard.classList.add('card_match');

                setTimeout(() => {
                    card_match();
                    resetGame();
                }, 1000);

            }
            else {
                setTimeout(() => {
                    resetGame()
                }, 1000);

            }
        }
    }
});

for (let i = 0; i < shuffledChild.length; i++) {

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;


    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;



    parentDiv.appendChild(childDiv);
    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);

}