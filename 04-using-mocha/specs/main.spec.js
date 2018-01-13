/* eslint-disable */
/*
    Describle:
    Ele descreve o teste de um certo método, ou arquivo

    Context:
    Serve para separar os casos de teste.

    Reporters:
    Um report é a representação grafica pelo terminal do processo de teste.
    ou seja ele vai exibir uma linha ou um feedback de como esta o processo de relização dos testes.
    para alterar a exibição usamos o comando npm test -- --reporter=report e para visualizar todos 
    os disponiveis: npm test -- --reporters

    FailFast
    Quando você solicita o teste ele roda tudo e só depois retorna o erro
    para parar no primeiro erro devemos usar o seguinte: npm test -- --bail

    Only:
    Para rodar apenas um contexto devemos usar o ".only"

    Para pular um teste:
    Usamos o ".skip" como sufixo do it

    Hooks do Mocha:
    Basicamente funcionam como os hooks do git, são funções que são executadas antes ou depois de algum
    comando, no caso do Mocha são executados relativo a função teste que seria o "it" eles são utilizados
    para por exemplo criar variaveis que simulam um banco de dados, retornos fake de funções e assim vai.


*/ 

describe('Main', function() {
  // roda uma vez, antes do bloco inteiro:
  before(function(){
    console.log("before");
    // Normalmente abre a conexão com o banco
    // Cria um conjunto de dados.
  });

  // roda uma vez, depois do bloco inteiro:
  after(function(){
    console.log("after");
    // Normalmente fecha a conexão com o banco
    // Apaga um conjunto de dados.
  });
  
  // roda todas as vezes, antes de cada bloco de teste:
  beforeEach(function(){
    console.log("beforeEach");
  });

  // roda todas as vezes, depois de cada bloco de teste:
  afterEach(function(){
    console.log("afeterEach");
  });

  describe('Method A', function(){
    context('Case 1', function(){
      it.skip('Should happen blabla', function(){
          // O que espera que aconteca..
          // Entra de dados / método sum(2,2). 
          // Espera retornar (4) => true | (3) => false

          // throw new Error('Just an error');
      });
    });
    context('Case 2', function () {
      it('Should happen 01', function(){
        // throw new Error('Just another error');
      });
      it('Should happen 02', function(){
        // throw new Error('Just another error');
      });
      it('Should happen 03', function(){
        // throw new Error('Just another error');
      });
    });
  });
});


