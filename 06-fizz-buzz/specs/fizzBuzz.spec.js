/**
 *
 * FizzBuzz
 * 
 * Desenvolva uma micro-aplicação "FizzBuzz" utilizandos os pacotes npm vistos até agora  
 * e seguindo as diretrizes do TDD ou seja primeiro os testes! A aplicação deve possuir 
 * os seguintes requisitos:
 * 
 * - Quando parametrizado um número multiplo de 3 deve retornar uma string "Fizz"
 * - Quando parametrizado um número multiplo de 5 deve retornar uma string "Buzz"
 * - Quando parametrizado um número multiplo de 3 e 5 deve retornar uma string "FizzBuzz" 
 * - Quando parametrizado um número não multiplo de 3 ou 5 deve retornar o próprio número.
 * - Quando parametrazado o número 0 deve retornar 0 (Pois ele é multiplo de tudo).
 * 
 * Obs: A aplicação deve ser escrita com ES6 e nela deve ser aplicado o conceito de 
 * "CodeCoverage" com o hook do Git.
 * 
 **/ 

import { expect } from 'Chai'
import fizzBuzz from '../src/fizzBuzz'

describe('FizzBuzz', function(){
	describe('Smoke',function(){
		it('Should `fizzBuzz` is an function', function(){
			expect(fizzBuzz).to.be.a('function');
		});
	});
	describe('Regular', function(){
		it('Should return "Fizz" when pass any number multiple of `3` with parameter', function(){
			expect(fizzBuzz(9)).to.be.equal('Fizz');
		});
		it('Should return "Buzz" when pass any number multiple of `5` with paramter', function(){
			expect(fizzBuzz(10)).to.be.equal('Buzz');
		});
		it('Should return "FizzBuzz" when pass any number multiple `3` and `5` with parameter', function(){
			expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
		});
		it('Should return own number when pass any number not multiple of `3` or `5` with parameter', function(){
			expect(fizzBuzz(11)).to.be.equal(11);
		});
		it('Should return 0 when pass 0 with parameter',function(){
			expect(fizzBuzz(0)).to.be.equal(0);
		});
	});
});