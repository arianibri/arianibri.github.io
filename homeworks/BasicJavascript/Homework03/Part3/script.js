function atm(balance, withdrawAmount)
{
    if(withdrawAmount > balance)
    {
        return 'Not enough money !';
    }
    else if(withdrawAmount > 0 && withdrawAmount <= balance)
    {
        return 'Amount remained in your balance is: ' + (balance - withdrawAmount) + '$'; 
    }
    else if(withdrawAmount <= 0)
    {
        return 'Please insert a valid amount!';
    }

}

let withdrawAmount = parseInt(prompt('Please insert the amount you want to cash out: '));
prompt(atm(100120,withdrawAmount));