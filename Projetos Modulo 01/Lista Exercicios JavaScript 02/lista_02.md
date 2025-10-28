# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?

<span style="color:green; font-weight:bold;">A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.</span>  

B) O código avalia a expressão booleana, imprime `false`, calcula o produto dos números na lista e imprime o resultado no console.

C) O código avalia a expressão booleana, imprime `true` e, em seguida, verifica se o número 6 está na lista.

D) O código avalia a expressão booleana, imprime `false` e ordena os valores em ordem crescente.

>**Resposta: A alternativa certa é a Letra A.** <br>
No começo aribuimos a variável resultado uma lógica booleana (truly ou falsy). Depois imprimimos resultado e após isso criamos outras duas variáveis: valores e produto. Dentro de valores temos uma lista de números e atribuimos o valor de 1 a produto. <br>
No final, criamos um looping que para cada evento de j, dentro do tamanho da lista de valores acrescentar o produto de cada um dos elementos dentro dos valores a variavél produto. Explicitamente acontece isso:
1 * 3 = 3 -> 3 * 6 = 18 -> 18 * 9 ... e assim por diante
______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i]; 
        i++; 
    } while (limite >= totalCompras && i < compras.length); 

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

<span style="color:green; font-weight:bold;">A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'</span>  

B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

C) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.', enquanto analisarCredito2() exibirá: 'Seu crédito foi aprovado. Saldo disponível: 100.'

D) Ambas as funções exibirão: 'Seu crédito foi aprovado Saldo disponível: 500.'

>**Resposta: Letra A.** Explicação analisarCredito1:
1. Adicionar 1200 a 2500. Logo totalCompras = 3700
2. Soma 1 a i, logo i = 2
3. 5000 >= 3700? Sim && 2 < 4? Sim. Logo continuar looping
4. Adicionar 800 a 3700. Logo totalCompras = 4500
5. Soma 1 a i, logo i = 3
6. 5000 >= 4500? Sim && 3 < 4? Sim. Logo continuar looping
7. Adicionar 100 a 4500. Logo totalCompras = 4600
8. Soma 1 a i, logo i = 4
9. 5000 >= 4600? Sim && 4 < 4? Não. Então, parar looping
10. 400 < 0? Não, então status permanece positivo.
11. Imprimir crédito positivo e saldodisponivel de 400

>Explicação analisarCredito2:
1. 5000 >= 2500? Sim && 1 < 4? Sim. Logo iniciar looping
2. Adicionar 1200 a 2500. Logo totalCompras = 3700
3. Soma 1 a i, logo i = 2
4. 5000 >= 3700? Sim && 2 < 4? Sim. Logo continuar looping
4. Adicionar 800 a 3700. Logo totalCompras = 4500
5. Soma 1 a i, logo i = 3
6. 5000 >= 4500? Sim && 3 < 4? Sim. Logo continuar looping
7. Adicionar 100 a 4500. Logo totalCompras = 4600
8. Soma 1 a i, logo i = 4
9. 5000 >= 4600? Sim && 4 < 4? Não. Então, parar looping
10. 400 < 0? Não, então status permanece positivo.
11. Imprimir crédito positivo e saldodisponivel de 400
______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

A) O código verifica se a idade indica um adulto ou um idoso e exibe a mensagem correspondente.

<span style="color:green; font-weight:bold;">B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".</span>  

C) O código verifica se a idade está entre 18 e 60 anos e, se for, imprime "Você é um adulto!". Se não estiver nesse intervalo, imprime "Você está na melhor idade!".

D) O código verifica se a idade é menor de 18, entre 18 e 60 ou acima de 60, imprimindo uma mensagem específica para cada caso.

>Resposta Letra B. O if verifica se a idade for maior ou igual a 18 e menor que 60 e imprime: Você é um adulto!. Caso não for e idade for menor que 18 imrpime: Você é menor de idade!. Se nenhuma das condições for comprida apenas imprime: Você está na melhor idade!
______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}
```

Escolha a opção que responde corretamente:

A)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 ligado com bateria extra. Energia restante: 0

Dispositivo 5 ligado. Energia restante: -200

B)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

C)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 400

Dispositivo 4 não pode ser ligado. Energia insuficiente.


<span style="color:green; font-weight:bold;">D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.
</span>  

>**Resposta** Letra D. A lógica do código é a seguinte:
1. Dispositivo 1 (300W) <= 1200? Sim. Logo a energia é suficiente então o dispositivo é ligado e energia restante: 1200 - 300 = 900.
2. Dispositivo 2 (600W) <= 900? Sim. Também a energia é suficiente, então liga o dispositivo e a energia restante: 900 - 600 = 300.
3. Dispositivo 3 (500W) <= 300? Não, mas 500 <= 700 (300 + 400 da bateria extra). Então o dispositivo é ligado com bateria extra. A energia principal é zerada, e a bateria restante passa a ser: 400 [bateria extra] - (500 [dispositivo 3] - 300 [energia principal]) = 200.
4. Dispositivo 4 (200W) <= 200 → Energia suficiente na bateria extra, embora o dispositivo possa ser ligado o console imprime que não pode ser ligado porque a variavel energiaDispositivo foi zerada, então o total será 0 + 200 = 200. A bateria restante passa a ser: 200 - 200 = 0. Mas o console imprime que não ligará porque 
5. Dispositivo 5 (400W) <= (0 + 0). Logo a Energia é insuficiente.Não pode ser ligado.
______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.

<span style="color:green; font-weight:bold;">B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.</span>  

C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente.

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo.

>**Resposta: Letra B.** O método que carrega os assets antes da cena é o preload(), e o método que renderiza os sprites, garante fisíca e configura as variáveis iniciais do jogo é o create().
______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

<span style="color:green; font-weight:bold;">A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.</span>  

B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

>**Resposta Letra A.** A letra B se refere a pointer e inputs. A letra C se refere a um renderizador de gráfico, algo mais complexo da biblioteca do Phaser. Já a letra D é o anims.create do phaser.

______

# Questões dissertativas

**7) Resposta:**

```javascript

const readline = require('readline-sync'); // Importa a biblioteca readline-sync para o programa captar inputs

// o \n funciona para quebra de linha na string e o readline.question aceita entrada de dados.
var precos = readline.question('Digite os valores e lembre-se: \n1. Separe os valores que for colocar com o uso de virgulas (Exemplo: 5, 5) \n2. Separe as casas decimais por ponto (Exemplo: 2.5, 3.5) \n \n')
  .split(',') //recebe entrada de dados do usuário separados por vírgula, criando um array com um indice
  .map(parseFloat); // converte o valor para float, já que ele entra em string se não fizer a conversão haverá a concatenação

// reduzir a array para um único número pelo metódo 'reduce'. O parâmetro 'function' indica que haverá uma função, o acumulador serve para guardar o último valor que passou pela função enquanto o valorAtual armazena o valor do indice atual.
var precos = precos.reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual; // retornar último valor + valor atual, até acabar a array
}, 0); // o 0 indica que o primeiro parâmetro independente da array, será 0.

console.log("-----------------------------------------------------------------");
console.log(`O valor total é ${precos}`);

if (precos < 50) {
  console.log('Frete não disponível!')
} else if (precos >= 50 && precos <= 199.99) {
  console.log('Frete com custo adicional!')
} else {
  console.log('Frete grátis!')
}
```
______

**8) Resposta:**

```javascript
// Classe 'veiculo' representando um veículo genérico com os atributos 'modelo' e 'ano' e um método generico para calculo de combustivel.
class veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }

  calcularConsumo() {
  }
}

// Classe 'carro' herda de 'veiculo' e representa um carro com cálculo específico de consumo de combustível.
class carro extends veiculo {
  constructor(modelo, ano) { 
    super(modelo, ano) // Chama o construtor da classe pai (veiculo), passando os parâmetros 'modelo' e 'ano'.

  }

  calcularConsumo() {
    // Verifica se o carro é um Corolla e define quilometragem e eficiência conforme o ano.
    if (this.modelo == 'Corolla') {
      if (this.ano == 2020) {
        this.quilometragem = 1000;
        this.eficiencia = 50;
        return  this.quilometragem / this.eficiencia;
      } else if (this.ano == 2025) {
        this.quilometragem = 500;
        this.eficiencia = 100;
        return  this.quilometragem / this.eficiencia;
      }
    }

    // Verifica se o carro é um Honda e define quilometragem e eficiência conforme o ano.
    if (this.modelo == 'Honda') {
        if (ano == 2020) {
          this.quilometragem = 1500;
          this.eficiencia = 150;
          return  this.quilometragem / this.eficiencia;
        } else if (ano == 2025) {
          this.quilometragem = 400;
          this.eficiencia = 200;
          return  this.quilometragem / this.eficiencia;
        }
    }
  }
}

// Classe 'moto' herda de 'veiculo' e adiciona os atributos 'quilometragem' e 'eficiencia'.
class moto extends veiculo {
  constructor(modelo, ano, quilometragem, eficiencia) {
    super(modelo, ano)
    this.quilometragem = quilometragem;
    this.eficiencia = eficiencia;

  }

  calcularConsumo() {
    // Verifica se a moto é uma CG e define quilometragem e eficiência conforme o ano.
    if (this.modelo == 'CG') {
      if (this.ano == 2020) {
        this.quilometragem = 5000;
        this.eficiencia = 50;
        return  this.quilometragem / this.eficiencia;
      } else if (this.ano == 2025) {
        this.quilometragem = 500;
        this.eficiencia = 100;
        return  this.quilometragem / this.eficiencia;
      }
    }

    // Verifica se a moto é uma Suzuki e define quilometragem e eficiência conforme o ano.
    if (this.modelo == 'Suzuki') {
        if (this.ano == 2020) {
          this.quilometragem = 4000;
          this.eficiencia = 100;
          return  this.quilometragem / this.eficiencia;
        } else if (this.ano == 2025) {
          this.quilometragem = 10;
          this.eficiencia = 100;
          return  this.quilometragem / this.eficiencia;
        }
    }
  }
}

// Criando um objeto da classe 'carro' com modelo 'Corolla' e ano 2020.
const meuCarro = new carro ('Corolla', 2020)
console.log (`Consumo do carro é ${meuCarro.calcularConsumo()}`)

// Criando um objeto da classe 'moto' com modelo 'Suzuki' e ano 2025.
const minhaMoto = new moto ('Suzuki', 2025)
console.log (`Consumo da moto é ${minhaMoto.calcularConsumo()}`)
```
______

**9) Resposta:**
```
velocidadeInicial = Escreva 'Qual a velocidade inicial de entrada na atmosfera marciana? '
Leia velocidadeInicial

Desaceleracao = 10 // metros por segundo
LimiteDeDesaceleracao = 2/3 * velocidadeInicial
Tempo = 0
TempoMaximo = 300 // 300 segundos ou 5 minutos
velocidade = velocidadeInicial - (Desaceleracao * Tempo)

Se velocidade < LimiteDeDesaceleracao
  Escreva "A velocidade já está no limite, mantenha!"

Senão
  Enquanto velocidade >= LimiteDeDesaceleracao && tempo < TempoMaximo
    velocidade  = velocidadeInicial - desaceleracao
    Tempo = Tempo + 10 // Aumentar 10 segundos a cada interação

Escreva "O tempo necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos é " + tempo
```
______

**10) Resposta:**

``` Java Script
function somarMatriz(matrizA, matrizB) {
  // Verifica se as matrizes têm dimensões iguais && se o número de linhas e colunas das duas matrizes não é o mesmo.
  if (matrizA.length != matrizB.length && matrizA[i].length != matrizB[i].length) {
    return "As matrizes não podem ser somadas. Elas têm dimensões diferentes."
  } else {
    // Armazena o número de linhas e colunas das matrizes
    let linhas = matrizA.length;
    let colunas = matrizA[0].length;
    let matrizResultado = [] 
    // Percorre as linhas da matriz
    for (let i = 0; i < linhas; i++) {
      matrizResultado[i] = []; // Inicia a linha da matriz resultado
      // Percorre as colunas da matriz
      for (j = 0; j < colunas; j++) {
        matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j]
      }
    }
    return matrizResultado
  }
}

function multiplicarMatriz(matrizA, matrizB) {
    // Verifica se o número de colunas da matrizA são iguais as linhas de matrizB
  if (matrizA[0].length != matrizB.length) {
    return "As matrizes não podem ser multiplicadas."
  } else {
    // Armazena o número de linhas da matrizA e o número de colunas de matrizB
    let linhas = matrizA.length;
    let colunas = matrizB[0].length;
    let matrizResultado = []
    // Percorre as linhas da matrizA
    for (let i = 0; i < linhas; i++) {
      matrizResultado[i] = [];
      // Percorre as colunas de matrizB
      for (j = 0; j < colunas; j++) {
        let soma = 0;
        // Realiza a multiplicação e soma dos elementos da linha de matrizA com a coluna de matrizB.
        for (k = 0; k < matrizA[0].length; k++) {
          soma += matrizA[i][j] * matrizB[j][i]
        }
        matrizResultado[i][j] = soma;
      }
    }
    return matrizResultado
  }
}

let investimento1 = [[1, 5], [2, 3]];
let investimento2 = [[2, 2], [4, 5]];

let matrizA = [[1, 2], [3, 4]];
let matrizB = [[5, 6], [7, 8]];

let efeitoInvestimento = multiplicarMatriz(matrizA, matrizB);
console.log(efeitoInvestimento);

let totalInvestimentos = somarMatriz(investimento1, investimento2)

console.log("Total de investimentos acumulados:")
console.log (totalInvestimentos);
```