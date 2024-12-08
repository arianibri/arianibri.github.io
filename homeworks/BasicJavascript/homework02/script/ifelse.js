let year = prompt("Enter the year: ");
year = parseInt(year);

let chinese_zodiac = (year - 4) % 12;
//alert(Result of chinese zodiac is: ${chinese_zodiac});

if(chinese_zodiac == 0)
{
    alert(`The year ${year} is the year of Rat`);
}
else if(chinese_zodiac == 1)
{
    alert(`The year ${year} is the year of Ox`);
}
else if(chinese_zodiac == 2)
{
    alert(`The year ${year} is the year of Tiger`);
}
else if(chinese_zodiac == 3)
{
    alert(`The year ${year} is the year of  Rabbit`);
}
else if(chinese_zodiac == 4)
{
    alert(`The year ${year} is the year of Dragon`);
}
else if(chinese_zodiac == 5)
{
    alert(`The year ${year} is the year of Snake`);
}
else if(chinese_zodiac == 6)
{
    alert(`The year ${year} is the year of Horse`);
}
else if(chinese_zodiac == 7)
{
    alert(`The year ${year} is the year of Goat`);
}
else if(chinese_zodiac == 8)
{
    alert(`The year ${year} is the year of Monkey`);
}
else if(chinese_zodiac == 9)
{
    alert(`The year ${year} is the year of Rooster`);
}
else if(chinese_zodiac == 10)
{
    alert(`The year ${year} is the year of Dog`);
}
else if(chinese_zodiac == 11)
{
    alert(`The year ${year} is the year of Pig`);
}