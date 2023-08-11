const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = [];
  for (let i = 0; i < expr.length; i) {
    if (expr[i] === "*") {
      arr.push("**********");
      i += 10;
      continue;
    }
    arr.push(expr[i] + expr[i + 1]);
    i += 2;
  }

  const arrToDots = arr.map((item) => {
    switch (item) {
      case "00":
        return "";
      case "10":
        return ".";
      case "11":
        return "-";
      case "**********":
        return " ";
      default:
        break;
    }
  });


  const arrLetters = [];
  let arrLetter = "";
  let counter = 0;

  for (let i = 0; i < arrToDots.length; i++) {
    if (arrToDots[i] === " ") {
      arrLetters.push(arrLetter, " ");
      arrLetter = "";
      counter = 0;
      i++
    } else if (counter === 5) {
      arrLetters.push(arrLetter);
      arrLetter = "";
      counter = 0;
    }
    {
      arrLetter += arrToDots[i];
      counter++;
    }
  }
  if (arrLetters.length > 0) {
    arrLetters.push(arrLetter);
  }
  console.log(arrToDots);
  console.log(arrLetters);



  const result = arrLetters
    .map((item) => (MORSE_TABLE.hasOwnProperty(item) ? MORSE_TABLE[item] : item))
    .join("");

    return result
}


module.exports = {
  decode,
};
