const chai = require("chai");
const { before } = require("mocha");
const expect = chai.expect;

const { Word } = require("../class");

let newWord;
beforeEach(() => {
  newWord = new Word('computer')
})

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");

      expect(newWord).to.have.property("word")
    });

    it('should set the "word" property when a new word is created', function () {
      // const newWord = new Word("hillo");
      expect(newWord.word).to.equal("computer")

    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // expect.fail("replace with your code");
      // const newWord = new Word("hillo");
      const result = newWord.removeVowels();
      expect(result).to.equal('cmptr');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      const result = newWord.removeConsonants();
      expect(result).to.equal('oue');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const result = newWord.pigLatin();
      expect(result).to.equal("omputercay");
    });
  });
});
