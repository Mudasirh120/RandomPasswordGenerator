const slider = document.querySelector("#range");
const value = document.querySelector("#value");
function syncValue() {
  value.value = slider.value;
}
function syncSlider() {
  slider.value = value.value;
}
slider.addEventListener("change", syncValue);
value.addEventListener("change", syncSlider);
