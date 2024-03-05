function parouimpar() {

    var numero1 = document.getElementById("numero1").value;
    numero1 = parseInt(numero1);

    if (numero1 % 2 === 0) {
        document.getElementById("resultado").innerText = "O número é Par";
    } else if (numero1 % 2 === 1) {
        document.getElementById("resultado").innerText = "O número é Ímpar";
    }

}


function ordemdecrescente() {

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var numero4 = parseInt(document.getElementById("numero4").value);
    var numero5 = parseInt(document.getElementById("numero5").value);

    var numeros = [numero1, numero2, numero3, numero4, numero5];

    numeros.sort(function(a, b) {
        return b - a;
    });

    var resultadoHTML = "Números em ordem decrescente: " + numeros.join(", ");
    document.getElementById("resultado").innerText = resultadoHTML;

}

function imc(){
    var altura = parseInt(document.getElementById("altura").value)/100;
    var peso = parseInt(document.getElementById("peso").value);

    var resultado = peso/(altura*altura);

    if(resultado <= 18.5){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está abaixo do peso.";
    }
    else if(resultado > 18.5 && resultado < 25){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está no peso ideal.";
    }
    else if(resultado >= 25 && resultado < 30){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está levemente acima do peso.";
    }
    else if(resultado >= 30 && resultado < 35){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está em grau de Obesidade I.";
    }
    else if(resultado >= 35 && resultado < 40){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está em grau de Obesidade II (Severa).";
    }
    else if(resultado > 40){
        document.getElementById("resultado").innerText = "O seu imc é de: " + resultado + " e você está em grau de Obesidade III (Mórbida).";
    }

}


function triangulo(){
        var ladoa = parseInt(document.getElementById("numero1").value);
        var ladob = parseInt(document.getElementById("numero2").value);
        var ladoc = parseInt(document.getElementById("numero3").value);

    if(ladoa == ladob && ladob == ladoc){
        document.getElementById("resultado").innerText = "O triângulo é equilátero";
    }
    else if(ladoa == ladob || ladob == ladoc || ladoa == ladoc){
        document.getElementById("resultado").innerText = "O triângulo é isósceles";
    }
    else if(ladoa != ladob != ladoc){
        document.getElementById("resultado").innerText = "O triângulo é escaleno";
    }
}