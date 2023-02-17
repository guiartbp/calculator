const buttons = document.querySelectorAll('button')
const result = document.getElementById('result')
const operation = document.getElementById('operation')
const equals = document.getElementById('equals')

let value = result.value;
let numbersArray = [];
let numbResult = "";
let numA = "";
let numB = "";
let operator = "";
let calculo;
let asd = 2.34
const plus = (num1,num2) => eval(`${num1} + ${num2}`) 
const minus = (num1,num2) => eval(`${num1} - ${num2}`) 
const times = (num1,num2) => eval(`${num1} * ${num2}`) 
const divide = (num1,num2) => eval(`${num1} / ${num2}`) 
const timesMinusOne = (num1) => eval(`${num1} * -1`) 


const appearOperation = (number) => {
    operation.style.display = 'block'
    operation.value = number;
    numbResult = ""
};
const desappearOperation = () => operation.style.display = 'none';


const operations = (op) => {
    numB = numbResult;
    switch (op) {
        case 'clearEntry': 
            numbResult = ""; numB = "";
            desappearOperation();
            break;
        case 'c':
            numbResult = numbResult.slice(0, -1);
            break;
        case 'plus':
            operator = op
            numA = numbResult;
            numB = `${numA} +`;
            appearOperation(numB);
            break;

        case 'minus': 
            operator = op
            numA = numbResult;
            numB = `${numA} -`;
            appearOperation(numB);
            break

        case 'times': 
            operator = op
            numA = numbResult;
            numB = `${numA} ×`;
            appearOperation(numB);
            break

        case 'divide': 
            operator = op
            numA = numbResult;
            numB = `${numA} ÷`;
            appearOperation(numB);
            break
        case 'timesMinusOne': 
            operator = op
            numA = numbResult;
            numB = `${numA} × -1`;
            appearOperation(numB);
            break
        case 'dot': 
            let dota = "."
            if (numbResult.length === 0) {
                numbResult += '0.'
            } else if (!numbResult.includes(dota)){
                numbResult += '.'
            }
            break

        case 'equals':

            switch (operator) {
                case 'plus':   
                    calculo = plus(numA, numB);
                    numbResult = `${calculo}`;
                    break;

                case 'minus':  
                    calculo = minus(numA, numB);
                    numbResult = `${calculo}`;

                    break; 

                case 'times':  
                    calculo = times(numA, numB);
                    numbResult = `${calculo}`;

                    break; 
                case 'divide':  
                    calculo = divide(numA, numB);
                    numbResult = `${calculo}`;
                    break;
                case 'timesMinusOne':  
                    calculo = timesMinusOne(numA);
                    numbResult = `${calculo}`;
                    break;  
            }
            desappearOperation();
            numB = ''

    }
}





buttons.forEach( function (button) {
    button.addEventListener('click', function () {
        const number = parseInt(button.id)
        
        if (!Number.isInteger(number)) {
            operations(button.id)
            

        } else {
            numbResult+= number
        }
        result.value = numbResult
    })
})
