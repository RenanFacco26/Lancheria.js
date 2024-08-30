console.log("");
console.log("--------> TOP LANCHES GRAVATAÍ <--------\n");
console.log("        MENU       ");
console.log(".....................");
console.log("1- Fazer Pedido");
console.log("2- Solicitar WhatsApp");
console.log("3- Horário de Atendimento");
console.log("4- Sair");
console.log("");

const prompt = require("prompt-read");

var continuar = true;

while (continuar) {
  const escolha = parseInt(prompt("Escolha uma das Opções do Menu: "));
  console.log("");
  
  switch (escolha) {
    
    case 1:
      console.clear();
      break;
    case 2:
      console.clear();
      console.log("WhatsApp  (51)9 9163-0088");
      console.log("");
      return;
    
     case 3:
      console.clear()
      console.log("Nosso horário de Atendimento: ");
      console.log("Terça à Sexta-18h às 23h");
      console.log("")
      return;
    case 4:
      console.clear();
      console.log("Você escolheu SAIR DO APLICATIVO!");
      console.log("");
      continuar = false; 
      return;
    default:
      console.clear();
      console.log("Opção Inválida !!!");
      console.log("");
      return;
  }
  
  console.log("\n-------> SEJA BEM VINDO À TOP LANCHES GRAVATAÍ <--------\n");
  console.log("              LANCHES                  ");
  console.log("-------------------------------------- ");
  console.log("1- Xis TOP: R$30,00");
  console.log("2- Batata Frita Grande: R$25,00");
  console.log("3- Hamburguer: R$18,00");
  console.log("4- Cachorro Quente: R$12,00");
  console.log("")
  console.log("              BEBIDAS                   ");
  console.log("----------------------------------------");
  console.log("5- Refrigerante: R$8,00");
  console.log("6- Água: R$5,00");
  console.log("7- Cerveja: R$7,00");
  console.log("");
  
  const opcaolanche = parseInt(prompt("Escolha seu Lanche! Digite a Opção AQUI-> "));
  const opcaobebidas = parseInt(prompt("Escolha sua Bebida! Digite a Opção AQUI-> "));
 
  console.log("");

  if (
    (opcaolanche >= 1 && opcaolanche <= 4) && (opcaobebidas >= 5 && opcaobebidas <= 7)
  ) {
    console.log(" TELE GRÁTIS para Gravataí e Cachoeirinha!!!");
  } else if (opcaolanche === 0 || opcaobebidas === 0) {
    console.log("Você Precisa escolher um lanche e uma bebida para TELE GRÁTIS!!!");
  } else {
    console.log("Digite uma opção válida!");
  }

  console.log("");

var valorlanche = 0;
var valorbebida = 0;

  switch (opcaolanche) {
    case 1:
      valorlanche = 30.00;
      break;
    case 2:
      valorlanche = 25.00;
      break;
    case 3:
      valorlanche = 18.00;
      break;
    case 4:
      valorlanche = 12.00;
      break;
    default:
      break;
  }

  switch (opcaobebidas) {
    case 5:
      valorbebida = 8.00;
      break;
    case 6:
      valorbebida = 5.00;
      break;
    case 7:
      valorbebida = 7.00;
      break;

    default:
      break;
  }

  var total = valorlanche + valorbebida;

  console.log("O valor Total do seu Pedido: R$", total);

  if (continuar) {
  const continuarPedido = prompt("Deseja fazer outro pedido? (S/N): ");
  if (continuarPedido !== "s") {
  continuar = false; 
  }
  }
  }
