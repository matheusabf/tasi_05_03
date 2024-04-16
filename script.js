function parouimpar() {

    var numero1 = document.getElementById("numero1").value;
    numero1 = parseInt(numero1);

    if (numero1 % 2 === 0) {
        document.getElementById("resultado").innerText = "O número é Par";
    } else if (numero1 % 2 === 1) {
        document.getElementById("resultado").innerText = "O número é Ímpar";
    }

}


function ordemcrescente() {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var numero4 = parseInt(document.getElementById("numero4").value);
    var numero5 = parseInt(document.getElementById("numero5").value);

    var numeros = [numero1, numero2, numero3, numero4, numero5];

    numeros.sort(function(a, b) {
        return a - b;
    });

    var resultadoHTML = "Números em ordem crescente: " + numeros.join(", ");
    document.getElementById("resultado").innerText = resultadoHTML;

}

function media(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = (num1+num2)/2;

    
        document.getElementById("resultado").innerText = "A média dos números [" + num1+ " e "+num2+ "] é ["+resultado+"]";
    

}


function quadrado(){
        var valor1 = parseInt(document.getElementById("numero1").value);
        var valor2 = parseInt(document.getElementById("numero2").value);
        var valor3 = parseInt(document.getElementById("numero3").value);

        var resultado1 = valor1*valor1;
        var resultado2 = valor2*valor2;
        var resultado3 = valor3*valor3;

        document.getElementById("resultado").innerText = "O valor do numero 1 ao quadrado é "+resultado1+"\nO valor do numero 2 ao quadrado é "+resultado2+"\nO valor do numero 3 ao quadrado é "+resultado3;
}
