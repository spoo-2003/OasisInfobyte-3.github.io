const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting

  const temperatureInput = parseFloat(form.querySelector("input").value);
  const selectedUnit = form.querySelector("input:checked").value;

  let temperature;
  if (selectedUnit === "option2") {
    temperature = temperatureInput * (9 / 5) + 32;
  } else if (selectedUnit === "option3") {
    temperature = temperatureInput + 273.15;
  }

  const resultTextarea = form.querySelector("textarea");
  resultTextarea.value = temperature.toFixed(6);
});
