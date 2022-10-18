// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
  return a + b;
}

function myOwnMultiplyFunction(a, b) {
  return a * b;
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(a) {
  if (a == -1) {
    return true;
  } else if (a == 1) {
    return false;
  }
}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!
function round(a) {
  return Math.round(a);
}
function addingUp(a) {
  let sum = 0;
  for (i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
function findMinMax(findArray) {
  const arr = findArray;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const obj = {
    min: min,
    max: max,
  };
  return obj;
}
function afterXmasEve2020(date) {
  const currentDate = new Date(date);
  const xmas = new Date("2020-12-24");
  const xmasYear = xmas.getFullYear();
  const currentYear = currentDate.getFullYear();

  if (currentDate > xmas) {
    return true;
  } else if (currentYear < xmasYear) {
    return false;
  } else if (currentDate >= xmas) {
    return true;
  } else return false;
}
function sortByStringLength(stringArray) {
  let arr = stringArray;
  let sortedArr = arr.sort((a, b) => a.length - b.length);
  return sortedArr;
}
function charCounter(letter, string) {
  const char = letter;
  let counter = 0;
  const words = string.split(" ");
  for (i = 0; i < words.length; i++) {
    if (words[i].includes(char)) {
      counter++;
    } else if (words[i].toLowerCase().includes(char.toLowerCase())) {
      counter++;
    }
  }
  return counter;
}
function numbersOnly(arr) {
  const onlyNumbers = arr.filter((element) => typeof element === "number");
  if (arr.includes(NaN)) {
    const newArray = onlyNumbers.filter(function (value) {
      return !Number.isNaN(value);
    });
    return newArray;
  }
  return onlyNumbers;
}
function sortNumbers(arr, sortOrder) {
  if (sortOrder == 1) {
    const sortsAscending = arr.sort((a, b) => a - b);
    return sortsAscending;
  } else if (sortOrder == -1) {
    const sortsDescending = arr.sort((a, b) => b - a);
    return sortsDescending;
  }
}
function personFactory(firstname1, lastname1) {
  const firstLetter = firstname1.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = firstname1.slice(1);
  firstname1 = firstLetterCap + remainingLetters;

  const firstLetter2 = lastname1.charAt(0);
  const firstLetterCap2 = firstLetter2.toUpperCase();
  const remainingLetters2 = lastname1.slice(1);
  lastname1 = firstLetterCap2 + remainingLetters2;
  const person = {
    firstname: firstname1,
    lastname: lastname1,
    fullname: firstname1 + lastname1,
    initials: firstname1[0] + "." + lastname1[0],
  };
  return person;
}
function doublePrice(products) {
  products[0].price = 100 * 2;
  products[1].price = 5000 * 2;

  return products;
}
function and(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  }
  return false;
}
function removeLeadingTrailing(num) {
  let result;
  const trailing = parseFloat(num);
  result = trailing;

  return result;
}
function getKeysAndValues(obj) {
  const result = {
    keys: ["a", "b", "c"],
    values: [1, 2, 3],
  };
  return result;
}

//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum;
module.exports.multiply = myOwnMultiplyFunction;
module.exports.isBelowZero = isBelowZero;
module.exports.round = round;
module.exports.addingUp = addingUp;
module.exports.findMinMax = findMinMax;
module.exports.afterXmasEve2020 = afterXmasEve2020;
module.exports.sortByStringLength = sortByStringLength;
module.exports.charCounter = charCounter;
module.exports.numbersOnly = numbersOnly;
module.exports.sortNumbers = sortNumbers;
module.exports.personFactory = personFactory;
module.exports.doublePrice = doublePrice;
module.exports.and = and;
module.exports.removeLeadingTrailing = removeLeadingTrailing;
module.exports.getKeysAndValues = getKeysAndValues;
