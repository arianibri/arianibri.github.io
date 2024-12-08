let year = prompt("Enter the year: ");
year = parseInt(year);

let chineseZodiac = (year - 4) % 12;

switch (chineseZodiac) {
  case 0:
    alert(`The year ${year} is the year of Rat`);
    break;
  case 1:
    alert(`The year ${year} is the year of Ox`);
    break;
  case 2:
    alert(`The year ${year} is the year of Tiger`);
    break;
  case 3:
    alert(`The year ${year} is the year of  Rabbit`);
    break;
  case 4:
    alert(`The year ${year} is the year of Dragon`);
    break;
  case 5:
    alert(`The year ${year} is the year of Snake`);
    break;
  case 6:
    alert(`The year ${year} is the year of Horse`);
    break;
  case 7:
    alert(`The year ${year} is the year of Goat`);
    break;
  case 8:
    alert(`The year ${year} is the year of Monkey`);
    break;
  case 9:
    alert(`The year ${year} is the year of Rooster`);
    break;
  case 10:
    alert(`The year ${year} is the year of Dog`);
    break;
  case 11:
    alert(`The year ${year} is the year of Pig`);
    break;
  default:
    alert(`The year ${year} is not valid!`);
    break;
}
