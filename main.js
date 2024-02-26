//variables
const board = document.getElementById("drawboard");
const black = document.getElementById("black");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");
const grid = document.getElementById("grid");
const reset = document.getElementById("reset");
const rsp =document.getElementById("rslt");
let reso = document.getElementById("resosli").value;
let color = "black";
let resolution = 16;

//main process
black.onclick = () => (color = "black")
eraser.onclick = () => (color= "white")
rainbow.onclick = () => (color= "random")
reset.onclick = () => {
    board.innerHTML= ''
    drawBoard()
}
drawBoard()

//functions def
function drawBoard () {
    board.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`
    board.style.gridTemplateRows = `repeat(${resolution}, 1fr)`
    let trueresolution = resolution * resolution;
    for(let i = 1; i < trueresolution; i++){
        const singlePixel = document.createElement("div")
        singlePixel.addEventListener("mouseover", function(){
           if(click){
            if(color !== "random"){
            singlePixel.style.backgroundColor = `${color}`
            }else if(color == "random"){
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                singlePixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            }
        }
        })
        board.appendChild(singlePixel)
    }
}

function updateResolution() {
    resolution = document.getElementById("resosli").value;
    board.innerHTML= ''
    rsp.innerHTML=resolution
    drawBoard()
}


  
//mouse listener
let click = false;
document.body.onmousedown = () => (click=true)
document.body.onmouseup = () => (click=false)