const defaultText = `"Protect data with strong password."`;
const slider = document.querySelector("#range");
const value = document.querySelector("#value");
const copy = document.querySelector(".copy");
const generated = document.querySelector(".password");
const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~!@#$%^&*()_+[]{}|;:,.<>?",
};
const password = {
  length: 8,
  lowercase: true,
  uppercase: false,
  numbers: false,
  symbols: false,
};
const options = ["lowercase", "uppercase", "numbers", "symbols"];
slider.addEventListener("change", () => {
  value.value = slider.value;
});
value.addEventListener("change", () => {
  slider.value = value.value;
});
copy.addEventListener("click", () => {
  if (generated.textContent.toString() === defaultText) {
    fetchCharacter(characters[fetchOptions(options)]);
    // alert("Please generate a password first!");
  } else {
    const text = generated.textContent;
    console.log(text);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
function checkPara(paras) {
  if (paras.lowercase || paras.uppercase || paras.numbers || paras.symbols) {
    return true;
  } else {
    return false;
  }
}
let fetchOptions = function (opt) {
  return opt[Math.floor(Math.random() * opt.length)];
};
function fetchCharacter(str) {
  console.log(str.charAt(Math.floor(Math.random() * str.length)));
}
