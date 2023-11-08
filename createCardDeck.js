/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

function getDeck(){
  let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
  let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let deck = new Array();
  for (let i = 0; i < suits.length; i++){
    for (let j = 0; j < ranks.length; j++){
      let card = {Rank: ranks[j], Suit: suits[i], Value: ranks[j]};
      deck.push(card);
    }
  }
  
  let transDeck = new Array()
  for (let d = 0; d < deck.length; d++) {
    if (deck[d].Value === 'A') {
      deck[d].Value = 11
    }
    else if (deck[d].Value === 'J') {
      deck[d].Value = 10
    }
    else if (deck[d].Value === 'Q') {
      deck[d].Value = 10
    }
    else if (deck[d].Value === 'K') {
      deck[d].Value = 10
    }
  }

  return deck;
}
console.log(getDeck())
//code up to here is mine

const getDeck = () => {
  const deck = []
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']

  for (let index = 0; index < suits.length; index++) {
    // create an array of 13 objects
    for (let j = 1; j <= 13; j++) {
      // for each loop, push a card object to the deck

      // special cases for when j > 10
      const displayVal = ''

      switch (j) {
        case j === 1:
          displayVal = 'Ace'
          break
        case j > 1 && j <= 10:
          displayVal = j
          break
        case j === 11:
          displayVal = 'Jack'
          break
        case j === 12:
          displayVal = 'Queen'
          break
        case j === 13:
          displayVal = 'King'
          break
      }

      const card = {
        val: j,
        displayVal: displayVal,
        suit: suits[index],
      }

      if (displayVal === 'Ace') {
        card.val = 11
      }

      deck.push(card)
    }
  }
}

// CHECKS
const deck = getDeck()
console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)
