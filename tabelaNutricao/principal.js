    //Isso aparece quando inicia a página
	let Nome = prompt("Qual é o seu nome?");
	alert("Olá, " + Nome + " seja bem vindo!");

    //Isso muda os títulos, a partir da class
    var titulo = document.querySelector(".texto");
	var tsecundario = document.querySelector(".tsecundario");
    titulo.textContent = "Paulista Nutrição";
	tsecundario.textContent = "Meus clientes";

    //Cria a variável paciente, e busca elementos no html
    var pacientes = document.querySelectorAll(".paciente");
    

    for(var i = 0; i < pacientes.length; i++){

        var paciente = pacientes[i];

        var tdNome = paciente.querySelector(".info-nome");
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");
        var nome = tdNome.textContent;
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        //mostra o conteúdo no console
        console.log(nome);
        console.log(peso);
        console.log(altura);
        console.log(IMC);
            
        //Conta do IMC
        var IMC = peso / (altura * altura);
        

        //Valores booleanos
        var pesoValido = true;
        var alturaValida = true;

        //Isso mostra po IMC com dois números após a virgula
        if(pesoValido && alturaValida){
            var tdIMC = paciente.querySelector(".info-imc");
            tdIMC.textContent = IMC.toFixed(2);
        }

        //Alerta caso peso e altura sejam invalidos
        if(peso <= 0 || peso >= 1000){
            var pesoValido = false;
            alert("Peso Invalido");
            tdIMC.textContent = 'Peso invalido';
            paciente.classList.add('paciente_invalido');
        }

        if(altura < 0 || altura > 3.00){
            var alturaValida = false;
            alert("Altura Invalida");
        }
    }

    titulo.addEventListener('click', function(){
        alert("Clicaram no Paulista");
    });

