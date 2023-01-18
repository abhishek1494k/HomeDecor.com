let text=document.querySelectorAll("#top_red_text > div")
let left=document.querySelector("#top_red>div:first-child>i")
let right=document.querySelector("#top_red>div:last-child>i")
var count=1;


left.addEventListener("click",()=>{
    console.log('left');
    for(let i=0; i<4; i++){
        if(count>3) count=0;
        if(count<0) count=3;
        if(i==count){
            text[i].style.display="block" 
        }else {
            text[i].style.display="none"
        }
    }
    count--;
})

right.addEventListener("click",()=>{
    console.log('left');
    for(let i=0; i<4; i++){
        if(count>3) count=0
        if(count<0) count=3
        if(i==count){
            text[i].style.display="block" 
        }else {
            text[i].style.display="none"
        }
    }
    count++;
})
//---------------------Top Red Bar-----------------------//

window.onload = function() {
    document.getElementById("popup").style.visibility = "visible";
  }
  function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
  }
  