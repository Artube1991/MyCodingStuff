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

const addPlayer = document.getElementById("add-player");

const closingForm = document.getElementById("closing-form");

const tableBody = document.getElementById("table-body");

const finishingGame = document.getElementById("finishing-game");

const results = document.createElement('article');
formBlock.append(results);

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

const endingRegister = () => {
    addPlayer.setAttribute("style", "display: none;");
    closingForm.setAttribute("style", "display: none;");
    playerRegister.setAttribute("style", "display: none;"); 
    finishingGame.setAttribute("style", "display: block;"); 
};

closingForm.addEventListener("click", endingRegister);

const addingPlayer = (e) => {
    e.preventDefault();
    players.push(playerRegister.name.value);
    console.log(playerRegister.name.value);
    console.log(players);
    console.log(isTableHeadExistence);

    const tableHead = document.getElementById("table-head-row");
    
    if (isTableHeadExistence === false) {
        isTableHeadExistence = true;
        for (let i=0; i <=14; i++) {
            const tableCellHead = document.createElement("th");
            tableHead.append(tableCellHead);
            tableCellHead.innerText = `Вопрос №${i}`;
            if (i === 0) {
                tableCellHead.innerText = "Имя игрока";
            }
            }
        }
    
    const playerRow = document.createElement("tr");
    tableBody.append(playerRow);
    playerRow.setAttribute(`id`, `player-id-${players.length}`);

    const playerName = document.createElement("td");
    playerRow.append(playerName);
    playerName.innerText = playerRegister.name.value;

    for (i=0; i <= 13; i++) {
        const playerScores = document.createElement("td");
        playerRow.append(playerScores);
        
        const scores = document.createElement("input");
        playerScores.append(scores);
        scores.setAttribute("name", "scores");
        scores.setAttribute("type", "number");
        scores.setAttribute("min", "-8");
        scores.setAttribute("max", "8");
    };

    playerRegister.name.value = '';

    let points = document.getElementById("player-id-1");
    console.log(points);
};

playerRegister.addEventListener("submit", addingPlayer);

const resultingTheGame = () => {
    const rowsScores = tableBody.querySelectorAll('tr');
    results.textContent = '';
    results.textContent = 'Дорогие друзья, девятая игра в серии литературного "Что? Где? Когда?" подошла к концу. Пришла пора подвести её итоги. По итогам сыгранных четырнадцати вопросов баллы распределились следующим образом: '
    const players = [];
    const playersScores = [];

    rowsScores.forEach(row => {
    const inputs = row.querySelectorAll('input[name="scores"]');
    let sum = 0;
    const playerScoreRow = row.querySelectorAll("td");
    const player = playerScoreRow[0].textContent.trim();
    players.push(player);
    const playerScoresShowed = document.createElement("p");
    results.append(playerScoresShowed);

    inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      sum += value;
    }
  })

    playersScores.push(sum);

    if (sum > 4) {
        playerScoresShowed.textContent = `${player} — ${sum} баллов`
    } else if (sum > 1 && sum < 5) {
        playerScoresShowed.textContent = `${player} — ${sum} балла`
    } else if (sum === 1) {
        playerScoresShowed.textContent = `${player} — ${sum} балл`
    } else if (sum <= 0) {
        playerScoresShowed.textContent = `${player} — 0 баллов`
    };

    });

    console.log(players);
    console.log(playersScores);
};

finishingGame.addEventListener("click", resultingTheGame);

console.log(suitList);

console.log(startButton);