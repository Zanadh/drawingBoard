
// LOADER
var preloader = document.getElementById('loader')  
var promptSize = document.getElementById('promptSize')  
document.addEventListener("DOMContentLoaded", function() { 
    preloader.style.display = 'none'
    promptSize.style.display = 'initial' 
    createBoard() 
}) 

function resizeBoard(){ 
    promptSize.style.display = 'initial'   
}
  

function setBoardSize(){
    var size = document.getElementById("fsize")
    
    console.log(size.value) 
    createBoard(size.value )
    promptSize.style.display = 'none'
} 

var board = document.getElementById("board");
console.log(board) 
let hover = false
let painting = false 

function createBoard(size){
    if(!size){size = 2} 
    console.log("creating board with size: ",size)
    let newBoard = ""
    let newSize = size * size 
    let widthHeight = 100/size
    for (let i = 1; i<= newSize; i++) {
        let boxHtml = `<div class="box" style="width:${widthHeight}%;height:${widthHeight}%" id="box-${i}"> </div>`
        newBoard+=boxHtml
    }
    console.log(board.innerHTML)
    board.innerHTML = newBoard
}
document.addEventListener('keydown', function (e) {
    // console.log(e.key)
    if(e.ctrlKey){ 
            painting = true 
            console.log(e.key , " is pressed") 
    }
}); 

document.addEventListener('keyup', function (e) { 
    if(painting){
        console.log("unpressed")
        painting = false
    } 
});
 
board.onmouseover = function (e) {
    hover = true   
    // console.log("hover - true") 
} 
board.onmouseleave = function (e) {
    hover = false
    // console.log("hover - false")
}
document.onmousemove = function (e) {
    e = e || window.event;
    evt = e;
    if(hover && painting){  
        // console.log(e.target.id)
        paint(e.target.id)
    } 
}
// PICKING COLOR

let color = "#fe2e2e";
function selectColor(colorCode){
    var currentColor = document.getElementById("currentColor")
    currentColor.style.backgroundColor= colorCode
    console.log(colorCode) 
    color = colorCode

}
// var colorPanel = document.getElementsByClassName("panel")
// console.log(colorPanel)

 
function paint(boxId){
    // console.log(boxId)
    let box = document.getElementById(boxId)
    // console.log(box.style)
    // box.setAttribute("style", `background-color:${color};`) 
    box.style.backgroundColor =color
}  


