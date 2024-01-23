//fondo matrix
let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = ["B", " ", "I", " ", "L"," ", "B"," ", "O"," ", "S"," ", "T"," ", "A"," ", "C", "", "K"];
let matrix = str.sort();
let font = 5;
let col = width / font;
let arr = [];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#0019FF";
    ctx.font = "${font}px system-iu";

    for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if (arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }

        arr[i]++;
    }
};

const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    col = width / font;
    arr = [];
    for (let i = 0; i < col; i++) {
        arr[i] = 1;
    }
    draw(); // Vuelve a dibujar el fondo matrix después de cambiar el tamaño del canvas
};

setInterval(draw, 20);

window.addEventListener("resize", handleResize);

//boton vibratorio
function testVibrate() {
    document.getElementById("demo").innerHTML = "";
    window.navigator.vibrate([200, 100, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 
        1200, 200, 100, 200, 100, 700, 100, 200, 100, 200, 1200, 200, 100, 200, 100, 700, 100, 200, 100, 200, 
        100, 200, 100, 700, 100, 700, 100, 200, 100, 200, 100, 700, 100, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 1200,
        700, 100, 200, 100, 1200, 200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 700, 1200, 200, 100, 
        700, 100, 700, 100, 200, 100, 200, 100, 700, 100, 200, 100, 700, 100, 700, 100, 700, 100, 700, 100, 700, 
        100, 200, 100, 200, 100, 700, 100, 200, 100, 200, 100, 700, 100, 700, 100, 700, 100, 200, 100, 700, 100, 700, 100, 
        200, 100, 700, 100, 200, 100, 200, 100, 200, 100, 700, 100, 700, 100, 700, 100, 700, 100, 200, 100]);
}


function copiar(){
    var origen = document.getElementById('target1');
    var destino = document.getElementById('target2');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
  }