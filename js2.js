let opcao="";
let num=0;

do{
    numero=parseInt(prompt("Digite um número"));
    numero *= 2;
    console.log (`O dobro deste numero é: ${numero} `);

    opcao=prompt ("Deseja sair?\nDigite 'S' para sim e 'N' para Não");


}while (opçao.toLowerCase() != "s");

console.log("FIM")
  
