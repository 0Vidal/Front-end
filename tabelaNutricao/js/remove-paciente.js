const Tabela = document.querySelector("tbody");

Tabela.addEventListener('dblclick', function(event){
    
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

});

/*pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    });
});*/