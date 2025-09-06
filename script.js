// Gera um número aleatório entre 1 e 20
// Math.random() gera um número entre 0 e 1
// Multiplicamos por 20 para pegar até 19.999...
// Depois usamos Math.floor para arredondar para baixo
// Por fim somamos +1 para que vá de 1 até 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Pega os elementos do HTML
let inputNumero = document.querySelector("input[type='number']");
let botao = document.querySelector("input[type='button']");

// Adiciona um evento de clique no botão
botao.addEventListener("click", function () {
    
    // Converte o valor do input para número inteiro
    let tentativa = parseInt(inputNumero.value);

    // Verifica se o jogador acertou
    if (tentativa === numeroSecreto) {
        alert("🎉 Parabéns! Você acertou!");
    } 
    // Se o chute for menor que o número
    else if (tentativa < numeroSecreto) {
        alert("O número secreto é maior!");
    } 
    // Se o chute for maior que o número
    else {
        alert("O número secreto é menor!");
    }
});
