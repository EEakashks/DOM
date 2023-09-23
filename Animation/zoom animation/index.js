let width = 100;
let addition = 2;
let id = null;
function increase(){
    clearInterval(id)
    id = setInterval(zoomIn,5)
}
function decrease(){
    clearInterval(id)
    id = setInterval(zoomOut,5)
}
function zoomIn(){
    if(width<200){
        width = width+addition;
        document.getElementById("img").style.width = width;
        console.log(width);
    }else{
        clearInterval(id)
    }
}
function zoomOut(){
    if(width>100){
        width = width-addition;
        document.getElementById("img").style.width = width;
        console.log(width);
    }else{
        clearInterval(id)
    }
}