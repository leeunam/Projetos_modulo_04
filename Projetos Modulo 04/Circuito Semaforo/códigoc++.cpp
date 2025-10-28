void setup() {
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
}

void loop() {

  digitalWrite(6, HIGH);
  digitalWrite(2, LOW);
    delay(4000);

  digitalWrite(6, LOW);
  digitalWrite(4, HIGH);
    delay(2000);

  digitalWrite(4, LOW);
  digitalWrite(2, HIGH);
    delay(6000);
}
