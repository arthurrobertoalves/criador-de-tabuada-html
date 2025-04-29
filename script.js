function tabuada() {
    let numero = Number(document.getElementById('number').value);
    if (numero == 0){
        alert ('ERRO, Tente novamente com qualquer outro número!')
    }
    else{
    let i = 1;
    let resultado = '';
    while (i <= 10) {
        resultado += numero + ' * ' + i + ' = ' + (numero * i) + '<br>';
        i++;
    }
    document.getElementById("text").innerHTML = resultado;
}
}