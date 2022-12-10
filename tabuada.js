let multiplicando= 0;
let limite= 0;
let produto= 0;
let contador= 1;

console.log("Inicio do programa");

multiplicando = parseInt(prompt("A tabuada de qual número você deseja montar?"))
limite = parseInt(prompt("Até que numero a tabuada irá?"))

while (contador <= limite){
    produto= multiplicando * contador;
    console.log (` ${multiplicando} * ${contador} = ${produto} `);
    contador++;

}

console.log("Fim do programa");
