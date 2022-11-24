const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const diceColor = "white";
const dotColor = "red";

function drawDice(ctx, x, y, size, value, diceColor, dotColor) {
  rollDice.addEventListener("click", () => {
    function randomValueDice(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let valueDice = randomValueDice(1, 6);
    dots = [];
    ctx.save();
    ctx.fillStyle = diceColor;
    ctx.translate(x, y);
    roundRect(ctx, 0, 0, size, size, size * 0.1, true, true);

    var padding = 0.25;
    var x, y;
    x = padding * size;
    y = padding * size;
    dots.push({ x: x, y: y });
    y = size * 0.5;
    dots.push({ x: x, y: y });
    y = size * (1 - padding);
    dots.push({ x: x, y: y });
    x = size * 0.5;
    y = size * 0.5;
    dots.push({ x: x, y: y });
    x = size * (1 - padding);
    y = padding * size;
    dots.push({ x: x, y: y });
    y = size * 0.5;
    dots.push({ x: x, y: y });
    y = size * (1 - padding);
    dots.push({ x: x, y: y });

    var dotsToDraw;
    var dotsToDraw;
    if (valueDice == 1) dotsToDraw = [3];
    else if (valueDice == 2) dotsToDraw = [0, 6];
    else if (valueDice == 3) dotsToDraw = [0, 3, 6];
    else if (valueDice == 4) dotsToDraw = [0, 2, 4, 6];
    else if (valueDice == 5) dotsToDraw = [0, 2, 3, 4, 6];
    else if (valueDice == 6) dotsToDraw = [0, 1, 2, 4, 5, 6];
    else console.log("Dice value shall be between 1 and 6");
    console.log(valueDice);
    ctx.fillStyle = dotColor;
    for (var i = 0; i < dotsToDraw.length; i++) {
      ctx.beginPath();
      var j = dotsToDraw[i];
      ctx.arc(dots[j].x, dots[j].y, size * 0.07, 0, 2 * Math.PI);
      ctx.fill();
    }
  });
}

function roundRect(ctx, x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y);
  ctx.lineTo(x + width, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
  ctx.lineTo(x, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height);
  ctx.lineTo(x, y);
  ctx.quadraticCurveTo(x, y, x, y);
  ctx.closePath();
  ctx.fill();
}

drawDice(ctx, 50, 50, 100, 5, diceColor, dotColor);
