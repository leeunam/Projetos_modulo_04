# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**Resposta:** Letra A. Porque o var cria a variável no escopo global, ou seja, na hora do computador interpretar o código, ele cria a variável global 'x', imprimo o valor de 'x' no console e depois atribui o valor de 5 a 'x'. Então a saída será undefined ou indefinido pela váriavel 'x' não ter valor.

Já no caso do 'y', a variável é a nível de escopo, então y só passa a existir e ter valor de 10 abaixo da linha 4 do código. Como o código printa o valor de 'y' e só depois cria o valor 'y', logo o comando está tentando printar uma variável que ainda não existe, por isso a mensagem de erro

______
**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**Resposta:** Letra A. Porque dentro da função soma, a condicional if diz que se 'a' OU 'b' com valor e atribuição igual a 0 forem verdadeira retonrar número inválido. Como não foi estabelecido nenhum parâmetro de comparação na condicional, qualquer valor de 'a' irá retornar número inválido, tornando assim falho a função soma. A fim de concertar esse erro e manter a lógica já pré existente do código, a única alternativa que condiz é a letra A.
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

**Resposta:** Letra B. O console.log imprimi o retorno do caso 'eletrônico" que está dentro da condicional switch 'calcular preço'. Porém como não há break no caso 'eletrônico', a leitura se estende até o caso 'vestuário' que possui o break mais próximo. Então o que acontece no código é que preco recebe o valor de 100, logo depois recebe o valor de 20 e o caso quebra, ou seja, retorna uma saída. Que nesse caso, a variável 'preço' recebe uma retribuição de valor fazendo com que mantenha apenas o último valor atribuido, que nesse caso foi 20.

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24

**Resposta:** Letra D. Primeiro o programa cria uma variável lista chamada ‘numeros’ com os valores de 1 a 5 dentro dela.Depois, o programa cria uma variável resultado em que o valor dela é igual a lista de números. Mas com as seguintes modificações: mapear todos itens do número da array e multiplicar por 2, filtrar os números que são maiores que 5 e somar os números entre si para reduzir a um único valor. Por fim, o código imprimi o valor da variável ‘resultado’, que nesse caso será 24 devido a lógica explicada anteriormente. De forma resumida esse é o processo:
1. Multiplicar todos valores por 2 (1 * 2 = 2 ; 2 * 2 = 4; 3 * 2 = 6; 4 * 2 = 8 ; 5 * 2 = 10)
2. Filtrar os valores maiores que 5 (6, 8 e 10)
3. Somar todos os valores entre si para retornar um único número dessa lista (6 + 8 + 10 = 24)

______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**Resposta:** Letra C. O comando 'splice', remove ou adiciona elementos em uma array, o método funciona da seguinte forma: array.splice (a partir de qual indíce fazer a ação, quantos indíces pegar a partir do indicado para se remover, valores de entrada). 

Sendo assim, o valor '1' defini que a partir do indíce 1 é para se fazer uma ação (remover ou adicionar elementos a partir de maçã nesse caso). 

O valor '2' diz para o código que iremos pegar 2 valores a partir do indice 1, ou seja os valores do indice 1 e indice 2 (nesse caso 'maçã' e 'uva' respectivamente) e remover da lista.

Já as palavras que vem a seguir separada por virgulas, indicam que deve se acrescentar nesse intervalo (indice 1 e 2 do código) os novos valores ('abacaxi' e 'manga').

Sendo assim o novo código será igual o da letra C.
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**Resposta:** Letra A. No JavaScript, há o conceito de classe que é uma coisa que possui um conjunto de características e comportamentos. Esse classe possui:
  - Atributos: característica da coisa.
  - Métodos: funções/comportamentos.

Dentro das classes há a possibilidade de se criar objetos, que são instâncias concretas da classe. E E uma das formas de se criar esses objetos é através da herança. Onde o objeto herda os atributos e métodos da 'classe mãe, pai ou super'. Para se fazer isso utilizasse o comando extends. Por exemplo:

```javascript
class ExampleScene extends Phaser.Scene
// Estou criando uma classe chamada 'ExampleScene' que herda os atributos e métodos de uma Classe Mãe chama 'Phaser.Scene'. Dessa forma é possível chamar funções que existem em Phaser sem a necessidade de ficar reescrevendo o código.

```
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**Resposta:** Letra A. Como os atributos da classe Pessoa não estão encapsulados (privados), é possível acessar diretamente eles pela classe Funcionario que herda essas características através de 'extends', logo essa afirmação é VERDADEIRA. 

Já em relação ao método apresentar, há sim uma sobreposição conhecida como Polimorfismo onde uma 'classe filha' sobrescreve um método da 'classe pai ou mãe'. Porém a função 'super' chama o método da classe pai diretamente, o que mantém a função original, adicionando apenas uma nova informação. Portanto essa afirmação é VERDADEIRA.

Por último, o JavaScript aceita herança de classes através da função 'extends', logo essa afirmação é FALSA.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**Resposta:** Letra B. O conceito de polimorfismo é justamente pegar atributos de uma classe mãe e modificar a maneira como essa função retorna valores, priorizando primeiro o método da classe filho, e depois o método da classe mãe. Logo a sentença Asserção está CORRETA.

Já o método de sobrecarga de métodos consiste em chamar o mesmo método dentro de uma classe, porém criando variações desse método dentro dessa mesma classe, com nomes iguais mas parâmetros diferentes. Para se enquadrar em polimorfismo, poderiamos chamar metódos de uma classe mãe e criar 2 variações dele dentro da classe filho, por exemplo:

```javascript
class ClasseFilho extends ClasseMãe // nesse caso não criei uma classe mãe com atributos previamente. Porém imagine de que há metodos já pré-criados anteriormente e de que estou herdando.

calcularPreco (int a, int b){
  return a + b
}

calcularPreco (string a, string b){
  return a + b
}

// Obs: Por ser JavaScript só seria considerado o último método, havendo uma sobrescrição dos dados do método 'calcularPreco'.
```

O nome dos metódos são iguais, porém no primeiro ele só executa se o valor de entrada for 'int' enquanto no outro só aceita valores de entrada 'string'. Porém esse exemplo que dei só funciona em outras linguagens de programação, no JavaScript, ele sobrescreve o mais recente sobre o anterior. Portanto no exemplo a cima, o que seria considerado seria o último métodod. Então, a sentença Razão está INCORRETA.

______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
//soma não foi criado, logo o programa não reconhece que váriavel é essa. Por let ser uma váriavel de escopo, será necessária criar ela fora de função, para que ela exista fora da função.
let soma = 0; 

function somaArray(numeros) {

//.size não existe dentro das funções de array do JavaScript. O certo para calcular o tamanho da lista seria .length
    for (i = 0; i < numeros.length; i++) { 

// se utilizar o sinal de = ele irá atribuir um valor, não 'reatribuir' ou 'agregar'. Então usei o sinal de += para ir somando um valor a variável e ir reatribuindo novos valores e não sobrescrevendo.
        soma += 2*numeros[i]; 
    }

// ao final do looping a função deve retornar o valor de soma
    return soma; 
}
console.log(somaArray([1, 2, 3, 4]));
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

```javascript
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto() {
        return `O produto escolhido foi ${this.nome}. Com o desconto de 10%, o valor total será de R$ ${this.preco * 0.9}`;
    }
}

// A herança nesse contexto não terá adição de novos atributos, apenas a alteração de algumas palavras no método.
// herdei os dois atributos de produto para livro, que são nome e preço.
class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco);
    }

    // alterei o método calcularDesconto para que o desconto seja de 20% ao invés de 10%. A multiplicação por 0.8 do valor total funciona, pois é o equivalente matematicamente de 20% de desconto.
    calcularDesconto() {
        return `O livro escolhido foi ${this.nome}. Com o desconto de 20%, o valor total será de R$${this.preco * 0.8},00`;
    }
}

let livro = new Livro('Antifragil', 100);
console.log(livro.calcularDesconto());
```