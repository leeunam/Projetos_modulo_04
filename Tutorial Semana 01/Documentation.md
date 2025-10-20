# Blink (Resumo rápido)

- Código: [Tutorial Semana 01](código.c++)
- O que faz: pisca um LED externo conectado ao pino 10 e o LED interno da placa.
- Como funciona:

  - `setup` : Configura os pinos com `pinMode`
  - `loop`: Alterna o estado dos LEDs com [`digitalWrite`] e pausa entre mudanças com [`delay`]
  - `LED_BUILTIN`: Refere-se ao LED integrado da placa.

- Vídeo demonstrativo: [VideoBlink](assets/VideoBlink.mp4) — primeiro trabalho da faculdade mostrando a luz externa piscando no Arduino.
