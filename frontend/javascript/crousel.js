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
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852900_1_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-03-04-15-21_d801final_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/S321-10301-FAB-Wide_Pinstripe_3pc_Comforter_set_NAVY_002_ecom_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-07-22-30_444800852917_1_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-02-08-10-01_1_ugg_corey_snow_cmf_pckpri_v2_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/846756066477mb_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-10-18-12-03_1_ugg_melangeclassicsherpa_ashfog_pri_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/mktplace-s-a06ce76d-8d61-4ca2-9844-05bba25ad8fe?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/lf_370145469519509p_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/761318252221_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-12-04-10-27_444800405281_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-05-06-21-50_d7k_8152_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-06-24-02-20_196927033587_imageset?%24380%24=&wid=2000&hei=2000",
  "https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-04-22-04-05_wish_001_tan_primaryjpg_imageset?%24380%24=&wid=2000&hei=2000"
];
let bigDiv = document.querySelector(".crousel_div1");
function crousel() {
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    img.setAttribute("width", "100%");

    let h5 = document.createElement("h5");
    h5.innerText = `$${Number(Math.random() * 20).toFixed(1)}`;
    h5.style.color = "red";

    let h6 = document.createElement("h6");
    h6.innerText = `Tim Hortons® Original`;

    let rating = document.createElement("p");
    rating.innerHTML = `<i class="fa-solid fa-star" >${Number(
      Math.random(1000) * 1000
    ).toFixed(0)}</i>`;
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img, h5, h6, rating);
    bigDiv.append(div);
  }
}
crousel();

document.getElementById("left_crousel1").addEventListener("click", () => {
  console.log("left");
  bigDiv.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let c=Math.floor(Math.random()*23)+1
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
    img.setAttribute("width", "100%");

    let h5 = document.createElement("h5");
    h5.innerText = `$${Number(Math.random() * 20).toFixed(1)}`;
    h5.style.color = "red";

    let h6 = document.createElement("h6");
    h6.innerText = `Tim Hortons® Original`;

    let rating = document.createElement("p");
    rating.innerHTML = `<i class="fa-solid fa-star" >${Number(
      Math.random(1000) * 1000
    ).toFixed(0)}</i>`;
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img, h5, h6, rating);
    bigDiv.append(div);
  }
});

document.getElementById("right_crousel1").addEventListener("click", () => {
  console.log("right");
  bigDiv.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let c=Math.floor(Math.random()*23)+1
    let div = document.createElement("div");
    count++;
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
    img.setAttribute("width", "100%");

    let h5 = document.createElement("h5");
    h5.innerText = `$${Number(Math.random() * 20).toFixed(1)}`;
    h5.style.color = "red";

    let h6 = document.createElement("h6");
    h6.innerText = `Tim Hortons® Original`;

    let rating = document.createElement("p");
    rating.innerHTML = `<i class="fa-solid fa-star" >${Number(
      Math.random(1000) * 1000
    ).toFixed(0)}</i>`;
    // rating.innerText=Number(Math.random(1000)*1000).toFixed(0)

    div.append(img, h5, h6, rating);
    bigDiv.append(div);
  }
});

// //--------------------------------------------------2---------------------------------------------//
let bigDiv2 = document.querySelector(".crousel_div2");
function crousel2() {
  for (let i = 5; i < 10; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
  for (let i = 5; i < 10; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
// // --------------------------------------- 3------------------------------------------------//



let bigDiv3 = document.querySelector(".crousel_div3");
function crousel3() {
  for (let i = 10; i < 15; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let c=Math.floor(Math.random()*23)+1
    let img = document.createElement("img");
    img.setAttribute("src", arr[c]);
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
