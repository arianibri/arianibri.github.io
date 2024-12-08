function calculator (firstNum,secondNum,operator)
{
    switch(operator)
    {
        case  '+':
            return firstNum+secondNum;
        case '-':
             return firstNum-secondNum;
        case '/':
            return firstNum/secondNum;
        case '*':
             return firstNum*secondNum;
        default:
            console.log("Please insert valid operator!");
            break;
    }
}

let firstNum=parseInt(prompt("Enter first number: "));
let secondNum=parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");
if(!isNaN(firstNum && secondNum)){
    console.log("Result = ", calculator(firstNum,secondNum,operator));
} else {
    alert("You entered invalid values")
}