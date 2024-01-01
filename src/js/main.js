const AFFICHAGE = document.getElementById("screen");
//--------------------------------------------------
const CLEAR = document.getElementById("c");
const CLEARE = document.getElementById("ce");
const DIVISION = document.getElementById("division");
const SEPT = document.getElementById("sept");
const HUIT = document.getElementById("huit");
const NEUF = document.getElementById("neuf");
const MULTIPLICATION = document.getElementById("multiplication");
const QUATRE = document.getElementById("quatre");
const CINQ = document.getElementById("cinq");
const SIX = document.getElementById("six");
const SOUSTRACTION = document.getElementById("soustraction");
const UN = document.getElementById("un");
const DUEX = document.getElementById("deux");
const TROIS = document.getElementById("trois");
const ADDITION = document.getElementById("addition");
const ZERO = document.getElementById("zero");
const VIRGULE = document.getElementById("point");
const EGALE = document.getElementById("exe");
//--------------------------------------------
const ALLBUTTONS = document.querySelector("button");



window.addEventListener("keydown", function (addCaracters) {
  if (/^Numpad[0-9AddDivideSubtractMultiplyEnterDecimal]+$/.test(addCaracters.code)) {
      console.log(`Code = ${addCaracters.code}`);
  }
});
