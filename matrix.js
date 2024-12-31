// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");
var precomputed = Array.from({ length: 100 }, () => matrix[Math.floor(Math.random() * matrix.length)]);


var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
var drops = Array(columns).fill(1); // Initialize drops array

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#ff6347";//green text
    ctx.font = font_size + "px arial";

    drops.forEach((y, i) => {
        // Precomputed random character
        var text = precomputed[Math.floor(Math.random() * precomputed.length)];
        ctx.fillText(text, i * font_size, y * font_size);

        if (y * font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop
        }
        drops[i]++;
    });
}

setInterval(draw, 35);
