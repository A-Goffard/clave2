//fondo matrix
let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "KCATS OBLIB KCATS OBLIB KCATS OBLIB KCATS OBLIB ";
let matrix = str.split("");
let font = 5;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#4B0082";
    ctx.font = `$(font)px system-iu`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;      
        }

        arr[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener("resize", () => location.reload());


//boton vibratorio
function testVibrate() {
    document.getElementById("demo").innerHTML = "Does it vibrate? ";
    window.navigator.vibrate([100, 100, 600, 100, 100,300, 300, 100, 
100, 100, 600, 100, 600,]);
}

