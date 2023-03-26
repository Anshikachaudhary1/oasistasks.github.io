const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) * 5/9;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return kelvin * 9/5 - 459.67;
}

// Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Update temperature inputs
function updateTemperatures() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const kelvinInput = document.getElementById('kelvin');
}
  // Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Fahrenheit to Kelvin
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  // Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Kelvin to Celsius
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Kelvin to Fahrenheit
  function kelvinToFahrenheit(kelvin) {
    return kelvin * 9/5 - 459.67;
  }
  
  // Celsius to Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Update temperature inputs
  function updateTemperatures() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const kelvin = parseFloat(kelvinInput.value);
  
    if (!isNaN(celsius)) {
      fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
      kelvinInput.value = celsiusToKelvin(celsius).toFixed(2);
    } else if (!isNaN(fahrenheit)) {
      celsiusInput.value = fahrenheitToCelsius(fahrenheit).toFixed(2);
      kelvinInput.value = fahrenheitToKelvin(fahrenheit).toFixed(2);
    } else if (!isNaN(kelvin)) {
      celsiusInput.value = kelvinToCelsius(kelvin).toFixed(2);
      fahrenheitInput.value = kelvinToFahrenheit(kelvin).toFixed(2);
    } else {
      // Reset inputs if all are empty or invalid
      celsiusInput.value = '';
      fahrenheitInput.value = '';
      kelvinInput.value = '';
    }
  }
  
  // Event listeners for input changes
  celsiusInput.addEventListener('input', updateTemperatures);
  fahrenheitInput.addEventListener('input', updateTemperatures);
kelvinInput.addEventListener('input', updateTemperatures);
  