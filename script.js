const buttons = document.querySelectorAll('button')
const result = document.getElementById('result')
const operation = document.getElementById('operation')
const equals = document.getElementById('equals')

let value = result.value
let numbersArray = []
let numbResult = ""
let numA = ""
let numB = ""
let operator = ""

const plus = (num1,num2) => eval(`${num1} + ${num2}`) 
const minus = (num1,num2) => eval(`${num1} - ${num2}`) 
const times = (num1,num2) => eval(`${num1} * ${num2}`) 
const obelus = (num1,num2) => eval(`${num1} / ${num2}`) 


const appearOperation = (number) => {
    operation.style.display = 'block'
    operation.value = number;
    numbResult = ""
};
const desappearOperation = () => operation.style.display = 'none';


const operations = (op) => {
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
        case 'equals':
            numB = numbResult;

            switch (operator) {
                case 'plus':   
                    let calculo = plus(numA, numB)
                    numbResult = `${calculo}`;
                    operation.value = `${numbResult} +`
                    result.value = numbResult;
                    break;
                    

            }

            
    }
}





buttons.forEach( function (button) {
    button.addEventListener('click', function () {
        const number = parseInt(button.id)
        if (!number) {
            operations(button.id)

        } else {
            numbResult+= number
        }
        result.value = numbResult
    })
})
