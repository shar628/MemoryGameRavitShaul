const gameboard = document.querySelector(".gameboard");

const numOfCards = 12;

export function createDeck() {
    for (let i = 0; i < numOfCards; i++) {
        //creat elements
        const flipCard = document.createElement("div");
        const flipCardInner = document.createElement("div");
        const flipCardFront = document.createElement("div");
        const flipCardBack = document.createElement("div");
        //add classes to each
        flipCard.classList.add("flip-card");
        flipCardInner.classList.add("flip-card-inner");
        flipCardFront.classList.add("flip-card-front");
        flipCardBack.classList.add("flip-card-back");

        //   Place each in his container
        gameboard.appendChild(flipCard);
        flipCard.appendChild(flipCardInner);
        flipCardInner.append(flipCardFront, flipCardBack);
    }
}
