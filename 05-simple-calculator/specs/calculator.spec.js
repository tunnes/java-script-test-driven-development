/* eslint-disable */

// Global
import { expect } from 'chai';
import { div, sub, sum, mult } from '../src/calculator.js';

describe('Calculator Spec', function(){
   /*
    *  SmokeTest:
    *  Its most basical and low test level, its basicle an test to check primitive types,
    *  function exists, instance or module etc..
    * 
    */ 
    describe('SmokeTest', function(){
        it('Should exist `multiplication` method in calculator library.', function(){
            expect(mult).to.exist;
            expect(mult).that.is.a('function');
        });

        it('Should exist `subtraction` method in calculator library.', function(){
            expect(sub).to.exist;
            expect(sub).that.is.a('function');
        });

        it('Should exist `division` method in calculator library.', function(){
            expect(div).to.exist;
            expect(div).that.is.a('function');
        });

        it('Should exist `sum` method in calculator library.', function(){
            expect(sum).to.exist;
            expect(sum).that.is.a('function');
        });        
    });
    describe('Sum', function(){
        it('Should return 4 when `sum(2, 4)`', function(){
            expect(sum(2,2)).to.be.equal(4);
        });
    });
    describe('Multiplication', function(){
        it('Shout return 20 when `mult(2, 10)`',function(){
            expect(mult(2, 10)).to.equals(20);
        });
    });
    describe('Subtraction', function(){
        it('Should return -4 when `sub(6, 10)`', function(){
            expect(sub(6, 10)).to.be.equal(-4);
        });

        it('Should return 2 when `sub(6, 2)`', function(){
            expect(sub(6, 2)).to.be.equal(4);
        });
    });
    describe('Division', function(){
        it('Shout return 10 when `mult(100, 10)`',function(){
            expect(div(100, 10)).to.equals(10);
        });

        it('Shout return 0 when `mult(2, 0)`',function(){
            expect(div(2, 0)).to.equals(0);
        });
    });    
});