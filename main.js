

let resoform = document.forms["resoform"]

const board = document.getElementById("drawboard")
board.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`
board.style.gridTemplateRows = `repeat(${resolution}, 1fr)`

createPixels(resolution)


function createPixels (resolution){
    resolution = resolution * resolution
    for(let i = 1; i < resolution; i++) {
        const pixel = document.createElement("div");
        
        board.appendChild(pixel)
    }
}



