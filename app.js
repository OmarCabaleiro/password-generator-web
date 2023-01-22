var BtnAlphaNumOnly = document.getElementById("BtnAlphaNumOnly");
var BtnInclSymbols = document.getElementById("BtnInclSymbols");

var alphanumArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var inclSymArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "?"]

function Alphanumeric() {
  Password.innerHTML = (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]) +
  (alphanumArr[Math.floor(Math.random() * alphanumArr.length)]);
}

function IncludeSymbols() {
  Password.innerHTML = (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]) +
  (inclSymArr[Math.floor(Math.random() * inclSymArr.length)]);
}