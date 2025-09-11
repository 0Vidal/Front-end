   //Isso faz com que os calculos apareçam no console 
   function CalculoSoma(){
        var soma = 5 + 5;
        var subitracao = 10 - 2;
        var multiplicacao = 2 * 6;
        var divisao = 40 / 2;

        console.log("Soma:", soma);
        console.log("Subitração:", subitracao );
        console.log("Multiplicação:", multiplicacao);
        console.log("Divisão:", divisao);
    }

    CalculoSoma();

    //Isso faz um calculo a partir da nota de um aluno
    function Notas(){
        var nome = "Lucas";
        var nota1 = 9;
        var nota2 = 8;
        var nota3 = 6;
        
        var calculo = 2 / (nota1 + nota2 + nota3);

        console.log("Nome:", nome);
        console.log("Nota 1:", nota1);
        console.log("Nota 2:", nota2);
        console.log("Nota 3:", nota3);
        console.log("Nota final:", calculo.toFixed(2));
    }

    Notas();