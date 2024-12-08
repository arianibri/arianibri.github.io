//Converts human years to dog years
function HumanToDogYears(years)
{
    return years * 7;
}


// Converts dog years to human years
function DogToHumanYears(years)
{
    return years / 7;
}


// Input for human years
let humanYears = parseInt(prompt("Please enter your age : "));
console.log("Your age based on dog's years is: ",HumanToDogYears(humanYears));
console.log("Your dogs age based on humans years is: ",DogToHumanYears(humanYears));



// ========================== BONUS =============================

//Question if the user wants to use  a different age of his dog 
let question = prompt(`Do you want to give a different age of your dog's years?
If yes, please type ( yes ) ! 
If no, please type ( no ) !`);


if(question == 'yes')
{
    // Input for dog years if the user wants to give different age of dogs years
    let dogYears = parseInt(prompt("Please enter your dog's years: "));
    console.log("Your dogs age based on humans years is: ",DogToHumanYears(dogYears));
    console.log("Your age based on dog's years is: ",HumanToDogYears(dogYears));
}    
else
{
    console.log("Thank you!");
}