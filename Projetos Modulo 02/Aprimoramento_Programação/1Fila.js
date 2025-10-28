const prompt = require('prompt-sync')({ sigint: true });
class Fila {
    constructor() {
        this.itens = [];
    }

    // Adiciona um item ao final da fila
    enfileirar(item) {
        this.itens.push(item);
        console.log(`📥 '${item}' entrou na fila.`);
    }

    // Remove o item do início da fila
    desenfileirar() {
        if (this.estaVazia()) {
            console.log('⚠️ A fila está vazia. Nenhum item para remover.');
            return null;
        }
        const removido = this.itens.shift();
        console.log(`🚪 '${removido}' saiu da fila.`);
        return removido;
    }

    // Mostra o primeiro da fila
    frente() {
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Tamanho da fila
    tamanho() {
        return this.itens.length;
    }

    // Limpa a fila
    limpar() {
        this.itens = [];
        console.log('🧹 Fila esvaziada.');
    }

    // Imprime a fila atual
    imprimir() {
        console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
}

const fila = new Fila();
var alunos = prompt('Quantos alunos você quer adicionar na fila? ');
for (let i = 0; i < alunos; i++) {
    var aluno = prompt('Digite o nome do aluno: ');
    fila.enfileirar(aluno);
}
fila.desenfileirar();
console.log(`O próximo aluno será: ${fila.frente()}`);
fila.imprimir();