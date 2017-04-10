import mocha, { it, describe } from 'mocha';
import { expect } from 'chai';
import helper from './Yahtzee.js'

describe('testing Yahtzee functions', () => {

  it('should have correct sum of face for five ones', () => {
    const arrayOfDice = [1,1,1,1,1]
    const sumOfFiveOnes = helper.sumOfFace(arrayOfDice, 1)

    expect(sumOfFiveOnes).to.equal(5);
  });

  // TODO: Write test and functionality to check if arrayOfDice contains pair

  // TODO: Write test and functionality to check if arrayOfDice is Yahtzee (5 of 5 the same)

})
