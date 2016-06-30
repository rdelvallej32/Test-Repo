'use strict';

const diagnostic = require('../lib/diagnostic.js');

describe('zero or more arguments', () => {

  describe('duplicate', () => {

    it('returns undefined when called without arguments', () => {
      expect(diagnostic.duplicate()).toBeUndefined();
    });

    it('returns null if there are no duplicates', () => {
      expect(diagnostic.duplicate([1,2,3,4,5,6,7,8])).toBeNull();
    });

    it('returns the duplicate in an random array', () => {
      expect(diagnostic.duplicate([4, -2, 2, 4, 7])).toBe(4);
    });

  });

  describe('firstChar', () => {

    it('returns undefined when called without arguments', () => {
      expect(diagnostic.firstChar()).toBeUndefined();
    });

    it('returns null if there all characters are repeating', () => {
      expect(diagnostic.firstChar("aaaaAAAA")).toBeNull();
    });

    it('returns the first non-repeating character of a large string', () => {
      expect(diagnostic.firstChar("racecars are fast")).toBe("f");
    });

  });

});

describe('Deck creation', () => {

  describe('with default value', () => {

    it('returns the correct Deck', () => {
      expect(diagnostic.deck()).toEqual();
    });

  });

});

describe("The Deck constructor", function() {

  it('is not undefined', () => {
     expect(diagnostic.deck).toBeDefined();
   });

  it("has method 'createDeck', which returns an array ", function() {
      expect(diagnostic.createDeck).toBeDefined();
      expect(typeof diagnostic.createDeck(1)).toBe('object');
  });

  it("has method 'shuffleDeck', which returns an array of card objects", function() {
      expect(diagnostic.shuffleDeck).toBeDefined();
      expect(typeof diagnostic.shuffleDeck()).toBe('object');
  });
});




const Deck = function() {
	this.card = [];
};

let Card = function(rank, suit) {
	this.rank = rank,
	this.suit = suit;
};

// Add a couple of methods to Deck.prototype
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

			///create a card object for each suit along with its rank
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

describe('Deck test suite', function()
{
  it('is not undefined', () => {
     expect(diagnostic.deck).toBeDefined();
   });

  it('it can create and shuffle a deck', function()
  {
    var myDeck = new Deck();
    expect(myDeck.createDeck(1)).toBeDefined();
    expect(myDeck.shuffleDeck()).toBeDefined();
  });
});
