let text=document.querySelectorAll("#top_red_text > div")
let left=document.querySelector("#top_red>div:first-child>i")
let right=document.querySelector("#top_red>div:last-child>i")
var count=1;
//---------------------Top Red Bar-----------------------//

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

// Pop Up------------------------------------------->
window.onload = function() {
    document.getElementById("popup").style.visibility = "visible";
  }




  let popBtn=document.getElementById("popup_button")

  popBtn.addEventListener("click",()=>{
    let popInput=document.getElementById("popup_input").value;
    alert(`${popInput} is now Subscribed ✅`)
    closePopup()
  })

  function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
  }
  

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function bedding(){
    console.log("Bedding")
    localStorage.setItem("category","Bedding")
    window.location.href="./HTML/product.html"
  }

  function pillow(){
    console.log("Pillow")
    localStorage.setItem("category","Pillow")
    window.location.href="./HTML/product.html"
  }

  function lightining(){
    console.log("Pillow")
    localStorage.setItem("category","Lightining")
    window.location.href="./HTML/product.html"
  }