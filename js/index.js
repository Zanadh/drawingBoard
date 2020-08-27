

var preloader = document.getElementById('loader')
 

document.addEventListener("DOMContentLoaded", function() { 
    preloader.style.display = 'none'
})

var board = document.getElementById("board");
console.log(board)


board.addEventListener("mouseover", function(){ 
    hover = true   
}); 
board.addEventListener("mouseout", function(){ 
    hover = false  
}); 

let hover = false
let painting = false


document.addEventListener('click', function (e) { 
});


document.addEventListener('keydown', function (e) {
    // console.log(e.key)
    if(e.ctrlKey){
        if(hover){  
            painting = true
            console.log(e.key , " is pressed")
        }
    }
});


document.addEventListener('keyup', function (e) { 
    if(painting){
        console.log("unpressed")
        painting = false
    } 
});
 
board.onmouseover = function (e) {
    if(painting){
        e = e || window.event;
        evt = e;
        console.log(e.target)
    }
} 

function paint(painting){

    console.log(painting)
}
// function paintStart() {
    // hover = true 
    // console.log('paint :',paint)   
    
    // document.addEventListener('keydown', function (e) {
    //     if(e.ctrlKey){
    //         // paint = true
    //         console.log('paint :',paint)  
    //     }
    // });
    // document.addEventListener('keyup', function (e) {
    //     // console.log(e.key) 
    // });
// } 

// document.onclick = function (e) {
//     e = e || window.event; 
//     console.log(e.target)
// }
