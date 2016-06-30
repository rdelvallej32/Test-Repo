'use strict';

// Question 1
//Given an array with 1,000,000 integers between 1 and 1,000,000, one integer is in
//the array twice. Find the duplicate.

const duplicate = function duplicate(array) {

  //check if there are no arguments
 if(array === undefined) {
   return undefined;
 }

 //if there is an array, then sort it and then loop through it
 else if (array) {
 let sorted = array.sort(function(a,b) { return a - b; });
   console.log(sorted);
   //loop the sorted array
   for (let i = 0; i <= sorted.length -1; i++) {
       //check to see if current index and next index are the same
       if(sorted[i] === sorted[i + 1]) {

           return sorted[i];
         }

     }
     ///if there are not duplicate numbers return null
     return null;
   }
};

// Question 2
// Find the first non-repeating character in a string: ('DEFD'; E)
const firstChar = function firstChar(string) {
  //declare the variables to have ready for when I need to use.
	let stringObj = {};
	let counter = 0;
	let character;

	if(string === undefined) {
		return undefined;
	}

	//iterate through the string
	for(let i = 0; i < string.length; i++) {
		//store each character into a variable
		character = string.charAt(i);

		//check to see if the character is repeated and add a counter as the value to the key
		stringObj[character] = stringObj[character] ? stringObj[character] + (++counter) : 1;

		console.log(stringObj[character]);

		}

		//search through the object and find the string character that occurs once
		for(let i = 0; i < string.length; i++) {
			if(stringObj[string.charAt(i)] === 1) {
				console.log(stringObj);
				return string.charAt(i);
			}
		}

    //return null if there are no repeating characters
		return null;

};

// Question 3
// Write a function that will shuffle a deck of cards.
const Deck = function() {

	this.card = [];

};

let Card = function(rank, suit) {
	this.rank = rank,
	this.suit = suit;
};

// Add a couple of methods to Deck.prototype and take number as parameter to determine
//how many decks the user wants to create
const createDeck = function(n){
  const suits = ['C', 'D', 'H', 'S' ];
  const ranks = ['A',2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K'];
  let i, r, s;
  let doubleLength = suits.length * ranks.length;

	this.card = [];

	///loop through both ranks and suits to create card objects

	for(i = 0; i < n; i++ ) {

	for(s = 0; s < suits.length; s++) {

		for(r = 0; r < ranks.length; r++) {

			///create a card object for each suit along with its rank and push it into the
      //cards array of 52 indices
			this.card[i * doubleLength + s * ranks.length + r] =  new Card(ranks[r], suits[s]);

		}

		}

	}

	console.log(this.card.length);
  return this.card;

};

Deck.prototype.createDeck = createDeck;

const shuffleDeck = function() {

	let tempValue;
	let currentIndex;
	let randomIndex;

///use the Fisher-Yates Shuffle to randomly shuffle the array of cards
for (currentIndex = 0; currentIndex < this.card.length; currentIndex++) {
      randomIndex = Math.floor(Math.random() * this.card.length);
      tempValue = this.card[currentIndex];
      this.card[currentIndex] = this.card[randomIndex];
      this.card[randomIndex] = tempValue;
    }

    console.log(this.card);
    return this.card;


};

Deck.prototype.shuffleDeck = shuffleDeck;


// Used by testing
module.exports = {
  duplicate: duplicate,
  firstChar: firstChar,
  deck: Deck,
  createDeck,
  shuffleDeck,
  card: Card,
};
