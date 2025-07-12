let startButton = document.getElementById("start");

let main = document.getElementById("main");

let cardList = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace", "joker"];

let suitList = ["spades", "hearts", "clubs", "diamonds"];

let show = false;

const startTheGame = () => {
    main.innerHTML = '';
    console.log("The button is clicked!");
    for (let i = 0; i <=cardList.length; i++) {
        let card = document.createElement("img");
        card.setAttribute(`src`, `./media/${cardList[i]}-spades.png`);
        card.setAttribute(`border`, `solid, 1px, red`);
        main.append(card);
    }
    // let card = document.createElement("img");
    console.log(main);
    card.setAttribute(`src`, `./media/${attr}.png`);
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

console.log(cardList, + suitList);

console.log(startButton);