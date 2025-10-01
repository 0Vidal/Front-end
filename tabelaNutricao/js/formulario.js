var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click', 
    function (event){
        event.preventDefault();

        // seleciona o formulário
        var form = document.querySelector('#form-adiciona');

        // acessamos os valores <input> do formulário
        var paciente = dadosPacientesFormulario(form);
        console.log(paciente);


        var pacienteTr = criaTr(paciente);

        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr);
        form.reset();

    }
);

function dadosPacientesFormulario(form){

    //objeto = {
        //propriedade/caracteristica: valor,
        //propriedade: valor,
        //propriedade: valor
 //   }

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        IMC: calculaIMC(form.peso.value, form.altura.value)
        
    }

    return paciente;
};

function criaTr(paciente){
      // cria o elemento <tr>
      var pacienteTr = document.createElement("tr");
     
      pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
      pacienteTr.appendChild(criaTd(paciente.peso, "info-nome"));
      pacienteTr.appendChild(criaTd(paciente.altura, "info-nome"));
      pacienteTr.appendChild(criaTd(paciente.gordura, "info-nome"));
      pacienteTr.appendChild(criaTd(paciente.IMC, "info-nome"));

      return pacienteTr;
}


function criaTd(dado, classes){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classes);

    return td;
}