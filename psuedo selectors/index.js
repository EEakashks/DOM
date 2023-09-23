// document.getElementById("btn").style.color = "yellow";
// document.getElementById("btn").style.backgroundColor = "red";

function changeText(){
    document.getElementById("biggestH").innerHTML= "Tok";
}
function Textchange(){
    document.getElementById("biggestH").innerHTML= "Tik";
}

document.getElementById("clickEvent").addEventListener("click",function(){
    this.style.background = "red";
});