let phonePrice = 119.95;
let taxRate = 5;
let quantityOfPhones = 30;
let taxOfPrice;
let priceWithTax;
let amountOfPayment;

taxOfPrice = (phonePrice * taxRate) / 100;
priceWithTax = phonePrice + taxOfPrice;
console.log('The price per phone with tax rate 5% is: ', priceWithTax,'$')

amountOfPayment = priceWithTax * quantityOfPhones;
console.log('The amount to pay 30 phones with tax rate per phone 5% is: ',amountOfPayment,'$')