/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

function getDeck(){
    let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
    let ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  
    let deck = new Array();
    for (let i = 0; i < suits.length; i++){
      for (let j = 0; j < ranks.length; j++){
        let card = {val: ranks[j], Suit: suits[i], displayVal: ranks[j]};
        deck.push(card);
      }
    }
    
    let transDeck = new Array()
    for (let d = 0; d < deck.length; d++) {
      if (deck[d].val === 'A') {
        deck[d].val = 11
      }
      else if (deck[d].val === 'J') {
        deck[d].val = 10
      }
      else if (deck[d].val === 'Q') {
        deck[d].val = 10
      }
      else if (deck[d].val === 'K') {
        deck[d].val = 10
      }
    }
  
    return deck;
  }
  console.log(getDeck())

let blackjackDeck = getDeck();
function shuffleDeck(cardDeck) {
    for (let i = 0; i < 1000; i++){
        let location1 = Math.floor(Math.random() * cardDeck.length);
        let location2 = Math.floor(Math.random() * cardDeck.length);
        let tmp = cardDeck[location1];
        cardDeck[location1] = cardDeck[location2];
        cardDeck[location2] = tmp;
    }
    return cardDeck.pop();
}

const shuffleDraw = shuffleDeck(blackjackDeck);
console.log(shuffleDraw);

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO
class cardPlayer {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.addCard = function(newObject) {
            this.hand.push(newObject);
        }
        /*
        function shuffleDeck(cardDeck) {
            for (let i = 0; i < 1000; i++){
                let location1 = Math.floor(Math.random() * cardDeck.length);
                let location2 = Math.floor(Math.random() * cardDeck.length);
                let tmp = cardDeck[location1];
                cardDeck[location1] = cardDeck[location2];
                cardDeck[location2] = tmp;
            }
            return cardDeck.pop();
        }
        const shuffleDraw = shuffleDeck(blackjackDeck);
        console.log(shuffleDraw);
        function drawCard() {
            this.hand.push(shuffleDraw)
        }
        
        drawCard()
        */
    }
}

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO

const Player = new cardPlayer('Player');
console.log(Player);
Player.addCard(shuffleDeck(blackjackDeck));
Player.addCard(shuffleDeck(blackjackDeck));
console.log(Player);
const Dealer = new cardPlayer('Dealer');
console.log(Dealer);
Dealer.addCard(shuffleDeck(blackjackDeck));
Dealer.addCard(shuffleDeck(blackjackDeck));
console.log(Dealer);
// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
// const calcPoints = (hand) => {
//   // CREATE FUNCTION HERE
let playerArr = Player.hand;
console.log(playerArr);
function calcScore(arr) {
    let sum = 0;
    let ace = '';
    let sumAce = {};
/*    function add(playArr) {
        for (let i = 0; i < playArr.length; i++) {
            sum += parseInt(playArr[i].val);
            return sum
        }
    }
    console.log(add(arr))*/

    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].val);
    }
    if (!arr.includes('A')) {
        ace = false
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].displayVal === 'A' && sum > 21) {
            ace = false;
            arr[j].val = 1;
            sum = 0;
            for (let k = 0; k < arr.length; k++) {
                sum += parseInt(arr[k].val);
            };
            console.log(arr[j]);
        }
        else {
            console.log(arr[j]);
            ace = true};
    }
    sumAce = {
        Total: sum,
        isSoft: ace
    }
    return sumAce;
}

let playerScore = calcScore(playerArr)
console.log(playerScore)


// }

// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE
let dealerArr = Dealer.hand;
console.log(dealerArr);
function dealerShouldDraw(dealArr) {
    dealerObj = calcScore(dealArr);
    if (dealerObj.Total <= 16) {
        Dealer.addCard(shuffleDeck(blackjackDeck));
    }
    else if (dealerObj.Total === 17 && dealerObj.isSoft === false){
        Dealer.addCard(shuffleDeck(blackjackDeck));
    }
    else {return false}
    return dealerObj;
}
console.log(dealerShouldDraw(dealerArr))
let dealerScore = calcScore(dealerArr)
console.log(dealerScore)
// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE
console.log(playerScore);
console.log(dealerScore);
function determineWinner(playerScore, dealerScore) {
    if (playerScore.Total > dealerScore.Total){
        result = `Player: ${playerScore.Total}; Dealer: ${dealerScore.Total}; Winner: Player`
    }
    else if (dealerScore.Total > 21){
        result = `Player: ${playerScore.Total}; Dealer: ${dealerScore.Total}; Winner: Player`        
    }
    else if (playerScore.Total < dealerScore.Total && dealerScore.Total <= 21){
        result = `Player: ${playerScore.Total}; Dealer: ${dealerScore.Total}; Winner: Dealer`
    }
    else {
        result = `Player: ${playerScore.Total}; Dealer: ${dealerScore.Total}; Winner: Tie`
    }
    return result;
}
winner = determineWinner(playerScore, dealerScore)
console.log(winner)
// }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
// const getMessage = (count, dealerCard) => {
//   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
// const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
//  */
// const startGame = function() {
//   player.drawCard();
//   dealer.drawCard();
//   player.drawCard();
//   dealer.drawCard();

//   let playerScore = calcPoints(player.hand).total;
//   showHand(player);
//   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
//     player.drawCard();
//     playerScore = calcPoints(player.hand).total;
//     showHand(player);
//   }
//   if (playerScore > 21) {
//     return 'You went over 21 - you lose!';
//   }
//   console.log(`Player stands at ${playerScore}`);

//   let dealerScore = calcPoints(dealer.hand).total;
//   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
//     dealer.drawCard();
//     dealerScore = calcPoints(dealer.hand).total;
//     showHand(dealer);
//   }
//   if (dealerScore > 21) {
//     return 'Dealer went over 21 - you win!';
//   }
//   console.log(`Dealer stands at ${dealerScore}`);

//   return determineWinner(playerScore, dealerScore);
// }
// // console.log(startGame());