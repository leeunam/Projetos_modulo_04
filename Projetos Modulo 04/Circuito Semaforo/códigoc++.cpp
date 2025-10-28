// Classe para criar função, utilizando POO
class Led {
  private:
    int pin;         // variável que armazena o número da porta do Arduino conectada ao LED (tipo inteiro)
    bool state;      // controla se o LED está ligado ou desligado (verdadeiro ou falso)

  public:
    Led(int p) {
      pin = p;           // define qual pino do Arduino será usado para esse LED
      state = false;     // inicia como falso, ou seja, LED desligado
      pinMode(pin, OUTPUT); // configura o pino como saída digital
      digitalWrite(pin, LOW); // garante que o LED começa desligado (LOW é nível baixo)
    }

    void on() {
      state = true;           // atualiza o estado para ligado
      digitalWrite(pin, HIGH); // HIGH significa LED aceso
    }

    void off() {
      state = false;          // atualiza o estado para desligado
      digitalWrite(pin, LOW); // LOW significa LED apagado
    }

    bool isOn() {
      return state;           // retorna verdadeiro se o LED estiver ligado, falso se não estiver
    }
};

// Ponteiro para Led com cada um controlando um LED em um pino diferente
Led* led1 = new Led(6); // cria led1 como ponteiro no pino 6
Led* led2 = new Led(4); // cria led2 como ponteiro no pino 4
Led* led3 = new Led(2); // cria led3 como ponteiro no pino 2

void setup() {
  led1->on();  // led1 ligado (verde)
  led2->off(); // led2 desligado (amarelo)
  led3->off(); // led3 desligado (vermelho)
}

void loop() {
  led1->on();     // led verde ligado
  led3->off();    // led3 (vermelho) apagado nesse momento
  delay(4000);    // led verde aceso por 4 segundos
  
  led2->on();     // led amarelo ligado
  led1->off();    // verde apaga
  delay(2000);    // led amarelo aceso por 2 segundos
  
  led3->on();     // led vermelho ligado
  led2->off();    // amarelo apaga
  delay(6000);    // led vermelho aceso por 6 segundos
  
  // Usando ponteiros, cada led é acessado através de "->" ao invés de "."
}