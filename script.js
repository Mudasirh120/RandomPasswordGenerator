const defaultText = `"Protect data with strong password."`;
const slider = document.querySelector("#range");
const value = document.querySelector("#value");
const copy = document.querySelector(".copy");
const generate = document.querySelector(".generate");
const generated = document.querySelector(".password");
const lower = document.querySelector(".low");
const upper = document.querySelector(".upp");
const number = document.querySelector(".num");
const symbol = document.querySelector(".sym");
const dependencies = document.querySelectorAll(".dependency");
let generatedPassword = "";
const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~!@#$%^&*()_+[]{}|;:,.<>?",
};

const password = {};
let options = [];
slider.addEventListener("change", () => {
  value.value = slider.value;
});
value.addEventListener("change", () => {
  slider.value = value.value;
});
function fetchCheck() {
  options = [];
  password.lowercase = lower.checked;
  password.uppercase = upper.checked;
  password.numbers = number.checked;
  password.symbols = symbol.checked;
  if (password.lowercase) {
    options.push("lowercase");
  }
  if (password.uppercase) {
    options.push("uppercase");
  }
  if (password.numbers) {
    options.push("numbers");
  }
  if (password.symbols) {
    options.push("symbols");
  }
  password.length = slider.value;
}
function checkPara(paras) {
  if (paras.lowercase || paras.uppercase || paras.numbers || paras.symbols) {
    return true;
  } else {
    return false;
  }
}
function fetchOptions(opt) {
  return opt[Math.floor(Math.random() * opt.length)];
}
function fetchCharacter(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}
function generatePassword() {
  generatedPassword = "";
  fetchCheck();
  if (checkPara(password)) {
    for (let i = 0; i < password.length; i++) {
      const randomOption = fetchOptions(options);
      const randomCharacter = fetchCharacter(characters[randomOption]);
      generatedPassword += randomCharacter;
    }
    generated.textContent = generatedPassword;
    generated.classList.toggle("valid", true);
    // generated.style.color = "#0075ff";
  } else {
    generated.textContent = defaultText;
    generated.classList.toggle("valid", false);
    alert("Please Select at least one option!");
  }
}
copy.addEventListener("click", () => {
  if (generated.textContent.toString() === defaultText) {
    fetchCheck();
    alert("Please generate a password first!");
  } else {
    const text = generated.textContent;
    console.log(text);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        alert("Something Went Wrong!");
        console.log(err);
      });
  }
});
generate.addEventListener("click", () => {
  generatePassword();
});
generatePassword();
dependencies.forEach((dependency) => {
  dependency.addEventListener("change", () => {
    generatePassword();
  });
});
