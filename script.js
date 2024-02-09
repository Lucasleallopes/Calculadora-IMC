function calculadora() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseInt(document.getElementById('peso').value);
    var result;
    
    result = peso / Math.pow(altura, 2);
    result = result.toFixed(1);

    if(result < 18.5) {
        document.getElementById('display').innerText = `IMC = ${result} \n Magreza`
        document.body.style.backgroundColor = "lightyellow"
    } else if(result >= 18.5 && result <= 24.9) {
        document.getElementById('display').innerText = `IMC = ${result}  \n Normal`
        document.body.style.backgroundColor = 'yellow'
    } else if(result >= 25 && result <= 29.9) {
        document.getElementById('display').innerText = `IMC = ${result}  Sobrepeso`
        document.body.style.backgroundColor = '#FF6863'
    } else if(result >= 30 && result <= 34.9) {
        document.getElementById('display').innerText = `IMC = ${result}  Obesidade grau 1`
        document.body.style.backgroundColor = 'darkred'
    } else if(result >= 35 && result <= 39.9) {
        document.getElementById('display').innerText = `IMC = ${result}  Obesidade grau 2`
        document.body.style.backgroundColor = '#843951'
    } else if(result >= 40) {
        document.getElementById('display').innerText = `IMC = ${result}  Obesidade grau 3`
        document.body.style.backgroundColor = 'brown'
    }
}
