let arr = [
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-25-14-50_881334012804_02?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/887719146447_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-15-08-15_49881616426288_pic_hd_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-05-11-52_611247373149_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-01-02-57_thera400tcperfwhtqss_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/150305412370911p_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-02-23-12-17_avery_sealgrey_primaryimage_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-13-13-22_611247385043_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-13-13-22_611247385050_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-10-04-10-54_61067_muslin_120_01_imageset?%24380%24=&wid=2000&hei=2000",
];

let bigDiv = document.querySelector(".crousel_div1");
function crousel() {
  for (let i = 0; i < arr.length-5; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv.append(div);
  }
}
crousel();

document.getElementById("left_crousel1").addEventListener("click", () => {
  console.log("left");
  bigDiv.innerHTML = "";
  for (let i = 5; i < arr.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv.append(div);
  }
});

document.getElementById("right_crousel1").addEventListener("click", () => {
  console.log("right");
  bigDiv.innerHTML = "";
  for (let i = 0; i < arr.length-5; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv.append(div);
  }
});

//--------------------------------------------------2---------------------------------------------//
let bigDiv2 = document.querySelector(".crousel_div2");
function crousel2() {
  for (let i = 5; i < arr.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv2.append(div);
  }
}
crousel2();

document.getElementById("left_crousel2").addEventListener("click", () => {
  console.log("left");
  bigDiv2.innerHTML = "";
  for (let i = 0; i < arr.length-5; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv2.append(div);
  }
});

document.getElementById("right_crousel2").addEventListener("click", () => {
  console.log("right");
  bigDiv2.innerHTML = "";
  for (let i = 5; i < arr.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv2.append(div);
  }
});
// --------------------------------------- 3------------------------------------------------//
let bigDiv3 = document.querySelector(".crousel_div3");
function crousel3() {
  for (let i = 5; i < arr.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv3.append(div);
  }
}
crousel3();

document.getElementById("left_crousel3").addEventListener("click", () => {
  console.log("left");
  bigDiv3.innerHTML = "";
  for (let i = 0; i < arr.length-5; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv3.append(div);
  }
});

document.getElementById("right_crousel3").addEventListener("click", () => {
  console.log("right");
  bigDiv3.innerHTML = "";
  for (let i = 5; i < arr.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5=document.createElement("h5")
    h5.innerText=`$${Number(Math.random()*20).toFixed(1)}`
    h5.style.color="red";

    let h6=document.createElement("h6")
    h6.innerText=`Tim Hortons® Original`

    let rating=document.createElement('p')
    rating.innerHTML=`<i class="fa-solid fa-star" >${ Number(Math.random(1000)*1000).toFixed(0)}</i>`
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img,h5,h6,rating);
    bigDiv3.append(div);
  }
});