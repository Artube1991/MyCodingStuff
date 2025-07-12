const startButton = document.getElementById("start");

const main = document.getElementById("main");

const suitList = ["spades", "hearts", "clubs", "diamonds"];

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
        let randomRank = getRandomInt(0, cardList.length);
        let randomSuit = getRandomInt(0, suitList.length);
        console.log(randomRank);

        newCardList.push(cardList[randomRank]);
        console.log(newCardList);

        cardList.splice(randomRank, 1);
        console.log("the arr cut ==", cardList);

        let card = document.createElement("img");
        card.className = "card";
        card.setAttribute(`src`, `./media/back.png`);
        card.setAttribute("data-rank", newCardList[i]);
        card.setAttribute("data-suit", suitList[randomSuit]);
        card.setAttribute("data-show", "false");
        main.append(card);
    };
        const cards = document.querySelectorAll('[data-rank]');
        cards.forEach(card => {
        card.addEventListener("click", () => {
        const rank = card.getAttribute('data-rank');
        const suit = card.getAttribute('data-suit');
        let show = card.getAttribute('data-show');
        // alert(`Ты кликнул по карте с рангом ${rank}, а показ карты ${show}`);
        if (show === "false") {
            card.setAttribute(`src`, `./media/${rank}-${suit}.png`);
            card.setAttribute('data-show', true);
            // card.setAttribute(`src`, `./media/${newCardList[i]}-${suitList[randomSuit]}.png`);
            console.log(show);
         } else if (show === "true") {
            card.setAttribute(`src`, `./media/back.png`);
            card.setAttribute('data-show', false);
            console.log(show);
         }
    });
  });
    if (startButton.textContent === "Начать игру") {
        startButton.textContent = "Новая раздача";
    }
};

startButton.addEventListener("click", startTheGame);

const formBlock = document.getElementById("form-block");

const playerRegister = document.getElementById("player-register");

const showTable = document.getElementById("show-table");

const closingForm = document.getElementById("closing-form");

const tableBody = document.getElementById("table-body");

let players = [];

let isTableHeadExistence = false;

let isTableShowing = false;

const showingTable = () => {
    if (isTableShowing === false) {
        formBlock.setAttribute("style", "display: block;");
        isTableShowing = true;
        showTable.innerText = "Скрыть турнирную таблицу";
    } else {
        formBlock.setAttribute("style", "display: none;");
        isTableShowing = false;
        showTable.innerText = "Показать турнирную таблицу";
    }
};

showTable.addEventListener("click", showingTable);

const addingPlayer = (e) => {
    e.preventDefault();
    players.push(playerRegister.name.value);
    console.log(playerRegister.name.value);
    console.log(players);
    console.log(isTableHeadExistence);

    // const table = document.createElement("table");
    // table.className = "tournament-table";
    // formBlock.append(table);

    // const tableRowHead = document.createElement("tr");
    // table.append(tableRowHead);

    const tableHead = document.getElementById("table-head-row");
    
    if (isTableHeadExistence === false) {
    for (let i=0; i <=15; i++) {
        const tableCellHead = document.createElement("th");
        tableHead.append(tableCellHead);
        tableCellHead.innerText = `Вопрос №${i}`;
        isTableHeadExistence = true;
    }
    }
    
    const playerRow = document.createElement("tr");
    tableBody.append(playerRow);
    playerRow.setAttribute(`id`, `player-id-${players.length}`);

    const playerName = document.createElement("td");
    playerRow.append(playerName);
    playerName.innerText = playerRegister.name.value;

    for (i=0; i <= 14; i++) {
        const playerScores = document.createElement("td");
        playerRow.append(playerScores);
        
        const scores = document.createElement("input");
        playerScores.append(scores);
        scores.setAttribute("type", "number");
        scores.setAttribute("min", "-8");
        scores.setAttribute("max", "8");
    };
};

playerRegister.addEventListener("submit", addingPlayer);

console.log(suitList);

console.log(startButton);