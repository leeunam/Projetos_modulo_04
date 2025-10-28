void setup() {
  pinMode(10, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(10,HIGH);
  digitalWrite(LED_BUILTIN,HIGH);
  delay(800);
  digitalWrite(10,LOW);
  digitalWrite(LED_BUILTIN,LOW);
  delay(800);
}
