// Foi alterado o título e subtítulo.
var	tSecundario = document.querySelector(".tsecundario");
var titulo = document.querySelector(".texto");
tSecundario.innerText = 'Meus Pacientes';
titulo.innerText = 'Paulista Nutrições';

// Cria a variável paciente e peso pela classe.
var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.innerText;
    
    // Cria a variável altura pela classe.
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.innerText;
    
    // Define a função de cálculo do IMC a varíavel IMC, dentor dos parenteses colocamo os parametros, para utilizar as varias utilizadas dentro da função
    var IMC = calculaIMC(peso, altura);
    
    // Valores booleanos
    
    var pesoValido = true;
    var alturaValida = true;
    
    if (pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.innerText = IMC;
    }

    if(!validarPeso(peso)){
        console.log("Peso Inválido!")
        var pesoValido = false;
        tdIMC.innerText = 'Peso Inválido!';
        paciente.classList.add('paciente__invalido');
    }
    
    if (!validarAltura(altura)){
        var alturaValida = false;
        //alert("Altura Inválida!");
        tdIMC.innerText = 'Altura Inválida!';
        paciente.classList.add('paciente__invalido');

    }
    
};      

function calculaIMC (peso, altura){
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
};

function validarPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }

};

function validarAltura(altura){
    if(altura > 0.00 && altura < 3.00){
        return true;
    }
    else{
        return false;
    }
};