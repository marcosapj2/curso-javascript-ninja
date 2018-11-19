/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var qualquer = ['Marcos', 'Pedro', 'Larissa', 'João', 'Maria', true, false, true, false, 1, 2, 3, 4, 5, 6,];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function inArray (a) {
    return a;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(inArray(qualquer)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunction (a, b) {
    return console.log(a[b]);
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var different = [true, 1, 'string', {propriedade: 'variavel', metodo: function () {} }, function (){}]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(myFunction(qualquer, 0));
console.log(myFunction(qualquer, 1));
console.log(myFunction(qualquer, 2));
console.log(myFunction(qualquer, 3));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/  
// ?
function book ( bookName ) {
    var allBooks = {
        bookName1: {
            quantidadePaginas: 100,
            autor: 'Marcos Aurélio', 
            editora: 'Casa do Código'
        }, 
        bookName2: {
            quantidadePaginas: 200, 
            autor: 'Marcos Aurélio', 
            editora: 'Casa do Código'
        }, 
        bookName3: {
            quantidadePaginas: 120, 
            autor: 'Marcos Aurélio', 
            editora: 'Casa do Código'
        }
    };
    return allBooks[bookName];
    }
    /*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
    console.log(book('bookName1'));
    console.log(book('bookName2'));
    console.log(book('bookName3'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log('O livro bookName1 tem ' +book('bookName1').quantidadePaginas+ ' páginas!')
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O autor do livro bookName2 é ' +book('bookName1').autor+ '.')
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log('O livro bookName2 foi publicado pela editora ' +book('bookName1').editora+ '.')

