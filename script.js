function tabuada() {
    let numero = Number(document.getElementById('number').value);
    let i = 1;
    let resultado = '';
    while (i <= 10) {
        resultado += numero + ' * ' + i + ' = ' + (numero * i) + '<br>';
        i++;
    }
    document.getElementById("text").innerHTML = resultado;
}
