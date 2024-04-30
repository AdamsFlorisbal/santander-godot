const criarJogador = (nome, experiencia) => {
    const jogador = {
        nome: nome,
        experiencia: experiencia
    };
    return jogador;
};

const escolha = () => {
    // Gerar um número aleatório de XP para a escolha do jogador
    const xpGanho = Math.floor(Math.random() * 12000) + 1;
    return xpGanho;
};

const atualizarExperiencia = (jogador, xpGanho) => {
    jogador.experiencia += xpGanho;
};

const determinarNivel = (xp) => {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
};

// Exemplo de uso:
const novoJogador = criarJogador("Fulano", 20);
console.log("Jogador inicial:", novoJogador);

// Simular uma escolha que concede experiência
const xpGanho = escolha();
console.log(`XP ganho: ${xpGanho}`);

// Atualizar a experiência do jogador
atualizarExperiencia(novoJogador, xpGanho);
console.log("Jogador após a escolha:", novoJogador);

// Determinar e mostrar o nível do herói
console.log(`Nível do herói: ${determinarNivel(novoJogador.experiencia)}`);
