import chai from 'chai';

import Square from '../src/Square'

chai.should();

describe('Square', () => {
    let square;
    beforeEach(() => {
        square = new Square(10);
    })

    it('should return value of get',() => {
        square.value.should.equal(10);
    });

    it('should return value of area',() => {
        square.getArea().should.equal(100);
    });
    
});