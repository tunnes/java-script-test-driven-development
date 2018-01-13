/* eslint-disable */
var expect = require('chai').expect;

describe('Main', function() {
    var testArray = new Array;
    
    beforeEach(function(){
        // Reset the testArray:
        testArray = [1, 2, 3, 4, 5];
    });

    describe('Module 01', function(){
        /**
         * SMOKE TEST: 
         * Uma fase inicial onde é feito o teste de tipos ou se existe o retono ou valor.
         * como visto abaixo com os seguintes blocos de teste:
         * 
         * http://chaijs.com/api/bdd/
         * 
         */ 
        it('Shoud have length 4', function(){
            testArray.pop();
            expect(testArray).to.have.lengthOf(4);
        });
        it('Shoud remove the value "5" from array when using pop function', function(){
            testArray.pop(5)
            expect(testArray).to.not.include(5)
        });
        it('Shoud be an array', function(){
            expect(testArray).to.be.a('array');
        });
        it('Shoud return true when pop 5 from array', function(){
            expect(testArray.pop() === 5).to.be.true;
        });
    });
});