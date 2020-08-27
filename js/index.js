
// LOADER
var preloader = document.getElementById('loader')  
document.addEventListener("DOMContentLoaded", function() { 
    preloader.style.display = 'none'
})
//  
var board = document.getElementById("board");
console.log(board) 
let hover = false
let painting = false 
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
    console.log("hover - true") 
} 
board.onmouseleave = function (e) {
    hover = false
    console.log("hover - false")
}
document.onmousemove = function (e) {
    e = e || window.event;
    evt = e;
    if(hover && painting){  
        console.log(e.target.id)
        paint(e.target.id)
    } 
}
let color = "white";

function paint(boxId){
    let box = document.getElementById(boxId)
    box.setAttribute("style", `background-color:${color};`)
}  
