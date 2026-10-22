// Referencias al DOM
const inputCelsius = document.getElementById("celsius")
const btnConvertir = document.getElementById("convertir")

function convertirTemperatura() {
    const valor = inputCelsius.value.trim();

  
    if (valor === "") {
        console.error("El campo esta vacio")
        inputCelsius.focus()
        return;
    }

    const celsius = Number(valor);
    if (isNaN(celsius)) {
        console.error("Ingresa un numero");
        inputCelsius.value = "";
        inputCelsius.focus();
        return;
    }

  
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;


    console.log(`Grados celsius:` + celsius)
    console.log(`Grados Kelvin:` + kelvin)
    console.log(`Grados Fahrenheit:` + fahrenheit)
  


    inputCelsius.value = "";
    inputCelsius.focus();
}

btnConvertir.addEventListener("click", convertirTemperatura);

