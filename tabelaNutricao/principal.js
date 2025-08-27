    //Isso aparece quando inicia a página
	let Nome = prompt("Qual é o seu nome?");
	alert("Olá, " + Nome + " seja bem vindo!");

    //Isso muda os títulos, a partir da class
    var titulo = document.querySelector(".texto");
	var pacientes = document.querySelector(".texto-secundario");
    titulo.textContent = "Paulista Nutrição";
	pacientes.textContent = "Meus clientes";

    //Cria a variável paciente, e busca elementos no html
    var paciente = document.querySelector("#primeiro-paciente");
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

    //Conta do IMC
    var IMC = peso / (altura * altura);
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC;

    console.log(IMC);