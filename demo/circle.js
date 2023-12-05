import {
  calculateArea,
  calculateCircumference,
  calculateVolume,
} from "./circlCalc.js";

document
  .getElementById("submitVolumeButton")
  .addEventListener("click", function (e) {
    submitVolume();
    e.preventDefault();
  });

document
  .getElementById("submitAreaButton")
  .addEventListener("click", function (e) {
    submitArea();
    e.preventDefault();
  });

document
  .getElementById("submitCircumferenceButton")
  .addEventListener("click", function (e) {
    submitCircumference();
    e.preventDefault();
  });

function submitVolume() {
  let radius = circleForm.radiusForVolume.value;
  document.getElementById("outputVolume").innerHTML =
    "Final Volume: " + calculateVolume(radius);
}

function submitArea() {
  let radius = circleForm.radiusForArea.value;
  document.getElementById("outputArea").innerHTML =
    "Final Area: " + calculateArea(radius);
}
function submitCircumference() {
  let radius = circleForm.radiusForCircumference.value;
  document.getElementById("outputCircumference").innerHTML =
    "Final Circumference: " + calculateCircumference(radius);
}
