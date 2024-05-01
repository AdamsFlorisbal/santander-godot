let dadosJogadores; // Variável global para armazenar os dados do JSON

// Função para calcular o nível do jogador com base no saldo de vitórias e derrotas
function calcularNivelJogador(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
        return "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        return "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        return "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        return "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função para exibir o resultado na página HTML
function mostrarResultado(resultado) {
    const divResultado = document.getElementById('resultado');
    divResultado.innerText = resultado;
}

// Função para carregar as opções do jogador
async function carregarOpcoesJogador() {
    try {
        const response = await fetch('dados.json');
        dadosJogadores = await response.json(); // Armazena os dados do JSON na variável global

        const selectJogador = document.getElementById('jogador');
        dadosJogadores.forEach(jogador => {
            const option = document.createElement('option');
            option.value = jogador.nome;
            option.textContent = jogador.nome;
            selectJogador.appendChild(option);
        });
    } catch (error) {
        console.error("Erro ao carregar os dados do arquivo JSON:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarOpcoesJogador);

document.getElementById('calcular').addEventListener('click', function () {
    const jogadorSelecionado = document.getElementById('jogador').value;
    const index = document.getElementById('jogador').selectedIndex;
    const jogador = dadosJogadores[index]; // Acessa os dados do jogador selecionado
    const saldo = jogador.vitoria - jogador.derrota; // Calcula o saldo
    const nivelJogador = calcularNivelJogador(saldo);
    const resultado = `O Jogador ${jogadorSelecionado} tem um saldo de ${saldo}, e está no nível de ${nivelJogador}`;
    mostrarResultado(resultado);
});