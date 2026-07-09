const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function () {

    const temperature = Number(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    // Result elements
    const celsiusResult = document.getElementById("celsiusResult");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const kelvinResult = document.getElementById("kelvinResult");

    // Error element
    const error = document.getElementById("error");

    // Clear previous error
    error.textContent = "";

    // Check empty input
    if (document.getElementById("temperature").value === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert to Celsius first
    if (unit === "celsius") {
        celsius = temperature;
    }
    else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    }
    else {
        celsius = temperature - 273.15;
    }

    // Absolute zero check
    if (celsius < -273.15) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    // Convert to all units
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;
document.getElementById("result").style.display = "block";
    // Display results
    celsiusResult.textContent = "Celsius: " + celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = "Kelvin: " + kelvin.toFixed(2) + " K";

});