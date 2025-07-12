let startButton = document.getElementById("start");

let main = document.getElementById("main");

let suitList = ["spades", "hearts", "clubs", "diamonds"];

let show = false;

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const startTheGame = () => {
    main.innerHTML = '';
    let cardList = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace", "joker"];
    let newCardList = [];
    let cardAmount = cardList.length;
    console.log("The button is clicked!");
    console.log(cardAmount);
    for (let i = 0; i <=cardAmount - 1; i++) {
        let randomNumber = getRandomInt(0, cardList.length);
        console.log(randomNumber);

        newCardList.push(cardList[randomNumber]);
        console.log(newCardList);

        cardList.splice(randomNumber, 1);
        console.log("the arr cut ==", cardList);

        let card = document.createElement("img");
        card.setAttribute(`src`, `./media/${newCardList[i]}-spades.png`);
        main.append(card);
    }
    // let card = document.createElement("img");
    console.log(main);
    // card.setAttribute(`src`, `./media/${attr}.png`);
    if (startButton.textContent === "Начать игру") {
        startButton.textContent = "Новая раздача";
    }
    // if (show === false) {
    //     show = true 
    // } else {
    //     show = false
    // }
    // console.log(show);
};

startButton.addEventListener("click", startTheGame);

console.log(suitList);

console.log(startButton);