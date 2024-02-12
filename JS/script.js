function konversiSuhu() {
    var inputCelsius = parseFloat(document.getElementById('input_Temperatur').value);

    if (isNaN(inputCelsius)) {
        alert('Masukkan suhu dalam bentuk angka!');
        return;
    }

    var hasilFahrenheit = (inputCelsius * 9/5) + 32;

    document.getElementById('nilaiTemperatur').value = parseInt(hasilFahrenheit);

    document.getElementById('Cara_Perhitungan').value = `${inputCelsius} * (9/5) + 32 = ${parseInt(hasilFahrenheit)}°F`;
}

function resetForm() {
    document.getElementById('input_Temperatur').value = '';
    document.getElementById('nilaiTemperatur').value = '';
    document.getElementById('Cara_Perhitungan').value = '';
}

function reverseKonversi() {
    var inputFahrenheit = parseFloat(document.getElementById('nilaiTemperatur').value);

    if (isNaN(inputFahrenheit)) {
        alert('Masukkan suhu dalam bentuk angka!');
        return;
    }

    var hasilCelsius = (inputFahrenheit - 32) * 5/9;
    
    document.getElementById('input_Temperatur').value = parseInt(hasilCelsius);
    document.getElementById('Cara_Perhitungan').value = `${inputFahrenheit} Fahrenheit (°F) setara dengan ${parseInt(hasilCelsius)} Celsius (°C)`;
}
