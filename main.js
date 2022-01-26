const letterAndNumAndSymbolArr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "K",
  "k",
  "L",
  "l",
  "M",
  "m",
  "N",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
];
let ran = document.querySelector(".ran");
randomPass();
function randomPass() {
  let passParts = [];

  for (let i = 0; i < 8; i++) {
    passParts.push(
      letterAndNumAndSymbolArr[
        // this is the random index of arr
        Math.floor(Math.random() * letterAndNumAndSymbolArr.length)
      ]
    );
  }
  let lastPass = passParts.join("");
  console.log(lastPass);
  ran.innerText = lastPass;
}
