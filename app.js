let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3= document.querySelector("h3");
    let rc=getrandomcolor();
    h3.innerText=rc;
    console.log("COLOR UPDATED");

    let div=document.querySelector("div");
    div.style.backgroundColor=rc;
})

function getrandomcolor(){
//to generate any color RGB value are required in 0-256 range.
//there is no need to do plus one as we need values from 0 itself.
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);

let color=`RGB(${red},${blue},${green})`;
return color;
}