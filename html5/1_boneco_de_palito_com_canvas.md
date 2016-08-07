# Desenhando formas simples com HTML5 canvas - parte 1

Nesse conteúdo vamos falar das APIs mais básicas do Canvas e usa-las para desenhar um boneco 2d simples o stickman com linhas, circulos e quadrados.

<a href="https://www.youtube.com/watch?v=TG7-yv3VjDA" target="_blank"><img src="http://img.youtube.com/vi/TG7-yv3VjDA/0.jpg" 
alt="Desenhando formas simples com HTML5 canvas" width="300" border="10" /></a>

**API: HTML5 Canvas**

method returns a drawing context on the canvas, or null if the context identifier is not supported.

## Métodos usados:

- canvas.getContext()
  - O método `canvas.getContext()` retorna um contexto de desenho no canvas ou ``null`` se o identificador do contexto não for suportado.
- context.beginPath()
  - O método `context.beginPath()` inicia uma *linha (linha, curva ... etc) ou reinicia (limpa) a linha atual.
- context.lineWidth
  - Variável com a largura das linhas.
- context.strokeStyle 
  - Define a cor que será usada nas linhas.
- context.fillStyle
  - Variável com a cor que será usada para preenchimento.
- context.arc()
  - O context.arc é usado para desenhar círculos.
  - Uso: `context.arc(xCoord, yCoord, radius, anguloDeInicio, anguloFinal, sentidoAntiHorario)`
- context.fill()
  - Preenche e finaliza o objeto atual por exemplo: preenche um círculo ou quadrado.
- context.moveTo(xCoord, yCoord)
  - Move o *cursor* para um ponto selecionado.
- context.lineTo(xCoord, yCoord)
  - Desenha uma linha do ponto atual para o pouco indicado no xCoord e yCoord.
- context.stroke()
  - Finaliza a linha ou caminho sendo desenhado.
  

