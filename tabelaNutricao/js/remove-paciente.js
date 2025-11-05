/*pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    });
});*/

const Tabela = document.querySelector("tbody");

Tabela.addEventListener('dblclick', function(event){
    let AlvoEvento = event.target;
    let PaiAlvo = AlvoEvento.parentNode;
    
    PaiAlvo.remove();
});
