class Led {
  private:
    int pin;
    bool state;

  public:
    Led(int p) {
      pin = p;
      state = false;
      pinMode(pin, OUTPUT);
      digitalWrite(pin, LOW);
    }

    void on() {
      state = true;
      digitalWrite(pin, HIGH);
    }

    void off() {
      state = false;
      digitalWrite(pin, LOW);
    }

    bool isOn() {
      return state;
    }
};

class Button {
  private:
    int pin;
    bool lastStableState;
    bool lastState;
    unsigned long lastDebounceTime;
    unsigned long debounceDelay;

  public:
    Button(int p, unsigned long delayTime = 50) {
      pin = p;
      pinMode(pin, INPUT_PULLUP);
      lastStableState = HIGH;
      lastState = HIGH;
      debounceDelay = delayTime;
      lastDebounceTime = 0;
    }

    bool pressed() {
      bool reading = digitalRead(pin);

      if (reading != lastState) {
        lastDebounceTime = millis();
        lastState = reading;
      }

      if ((millis() - lastDebounceTime) > debounceDelay) {
        if (lastStableState != lastState) {
          lastStableState = lastState;
          if (lastStableState == LOW) {
            return true;
          }
        }
      }
      return false;
    }
};

Led led1(10); 
Led led2(8); 
Button botao(2);

void setup() {
  Serial.begin(9600);
  led1.on();
  led2.off();
}

void loop() {
  if (botao.pressed()) {
    if (led1.isOn()) {
      led1.off();
      led2.on();
    } else {
      led1.on();
      led2.off();
    }
    while (digitalRead(2) == LOW); 
  }
  delay(50);
}
