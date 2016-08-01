var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

if (!context) {
  throw new Error('Esse navegador não suporta HTML5 canvas');
}

var cor = '#000';
// setando o tamanho do canvas
canvas.width  = 400;
canvas.height = 300;

// cor das linhas
context.fillStyle = color;
// tamanho da linha
context.lineWidth = 6;
// cabeça
context.beginPath();
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fill();
// corpo
context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = color;
context.stroke();
// braços
context.beginPath();
// esquerda
context.moveTo(200, 80);
context.lineTo(150, 130);
// direita
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();

// legs
context.beginPath();
context.strokeStyle = color;
// parte de cima
context.moveTo(200, 180);
context.lineTo(170, 240);

context.moveTo(200, 180);
context.lineTo(220, 240);
// parte de baixo
context.moveTo(170, 240);
context.lineTo(160, 280);

context.moveTo(220, 240);
context.lineTo(220, 285);

context.stroke();

// boca
context.beginPath();
context.strokeStyle = "#fff"; // color
context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
context.stroke();

// eyes
context.beginPath();
context.fillStyle = "#fff"; // color
context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
context.fill();
context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
context.fill();

// desenhando um retangulo qualquer:
ctx.rect(20,20,150,100);
ctx.stroke();