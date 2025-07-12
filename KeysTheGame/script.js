let startButton = document.getElementById("start");

let main = document.getElementById("main");

let cardList = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace", "joker"];

let suitList = ["spades", "hearts", "clubs", "diamonds"];

let attr = "back";

let show = false;

const startTheGame = () => {
    console.log("The button is clicked!");
    for (let i = 1; i <=14; i++) {
        let p = document.createElement("p");
        p.textContent = `Блок ${i}`;
        main.append(p);
    }
    let card = document.createElement("img");
    console.log(main);
    main.append(card);
    card.setAttribute(`src`, `./media/${attr}.png`);
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