const prompt = require('prompt-sync')({ sigint: true });
class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(item) {
        this.itens.push(item);
        console.log(`✔️ Elemento '${item}' empilhado.`);
    }

    desempilhar() {
        if (this.estaVazia()) {
            console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
            return null;
        }
        const removido = this.itens.pop();
        console.log(`❌ Elemento '${removido}' desempilhado.`);
        return removido;
    }

    topo() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }

    limpar() {
        this.itens = [];
        console.log('🧹 Pilha esvaziada.');
    }

    imprimir() {
        console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
    }
}
const pilha = new Pilha();
var documentos = prompt('Quantos documentos urgentes você quer adicionar na pilha? ');
for (let i = 0; i < documentos; i++) {
    var documento = prompt('Digite o nome do documento por ordem de urgência: ');
    pilha.empilhar(documento);
}
pilha.desempilhar();
console.log('O documento no topo é:', pilha.topo());
pilha.imprimir();