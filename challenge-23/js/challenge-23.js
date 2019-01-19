(function (win, doc) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonOperation = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonClean = doc.querySelector('[value="CE"]');
    var $buttonEquals = doc.querySelector('[value="="]');

    function handleClickOperation() {
        if (operatorLast($visor.value)) {
            $visor.value = $visor.value.replace(/[÷x+-]$/, this.value);
        } else {
            $visor.value += this.value;
        }
    }
    function handleClickNumbers() {
        if (/^0/.test($visor.value)) {
            $visor.value = this.value;
        } else {
            $visor.value += this.value.toString();
        }
    }
    function handleClickClean() {
        $visor.value = 0;
    }
    function removeLast(item) {
        return item = item.slice(0, -1);
    }
    function operatorLast(operator) {
        return /[÷x+-]$/.test(operator);
    }
    function handleClickEquals() {
        if (operatorLast($visor.value)) {
            $visor.value = $visor.value.slice(0, -1);
        }
        var allValues = $visor.value.match(/\d+[÷x+-]?/g);
        $visor.value = allValues.reduce(function (accumulated, actual) {
            var firstValue = removeLast(accumulated);
            var operator = accumulated.split('').pop();
            var lastValue = operatorLast(actual) ? removeLast(actual) : actual;
            var lastOperator = operatorLast(actual) ? actual.split('').pop() : '';
            switch (operator) {
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case 'x':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '÷':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
        });
    }
    Array.prototype.forEach.call($buttonOperation, function (button) {
        button.addEventListener('click', handleClickOperation, false);
    })
    Array.prototype.forEach.call($buttonNumbers, function (button) {
        button.addEventListener('click', handleClickNumbers, false);
    })
    $buttonClean.addEventListener('click', handleClickClean, false);
    $buttonEquals.addEventListener('click', handleClickEquals, false);



}(window, document));