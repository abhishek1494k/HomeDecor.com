let motherDiv=document.getElementById("right_div_2")


// Show Products------------------------------------------------------->
  let showAll = document.getElementById("showAllBtn")

async function onload(){
    let res = await fetch(`https://cautious-fox-life-jacket.cyclic.app/pdt/category/${localStorage.getItem("category")}`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        bag = [...res];
        render(bag);//  DISPLAY********************************------>
      })
      .catch((err) => {
        console.log(err);
      });
}

onload();

 async function render(bag) {//  DISPLAY***********************------>
    motherDiv.innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute('id','showAll')
    motherDiv.append(div1)

    document.getElementById("showAll").innerHTML = "";
    document.getElementById("showAll").innerHTML = `
    ${bag
        .map((item) => {
          let id = item._id;
          let name = item.name;
          let image = item.image;
          let rating = item.rating;
          let lowprice = item.lowprice;
          let highprice = item.highprice;
          return renderCard(name, image, rating, lowprice, highprice, id);//CARD------>
        })
        .join("")}
    `;

    let cart_btns = document.querySelectorAll(".cart");
    for (cart of cart_btns) {
      cart.addEventListener("click", function () {
        let id = event.target.dataset.id;
        console.log("cart")
        cartPdt(id);
      });
    }

    let wishlist_btns = document.querySelectorAll(".wishlist");
    for (wishlist_btn of wishlist_btns) {
      wishlist_btn.addEventListener("click", function () {
        let id = event.target.dataset.id;        
        // wishlistPdt(id);
      });
    }
  }
//Render Card------------------------------------------------->
  function renderCard(name, image, rating, lowprice, highprice, id) {
    return `<div>
      <div><img src="${image}"></div>
      <div><h5>${name}</h5></div>
      <div><h5>$${lowprice} </h5>
        <h5> - $${highprice}</h5></div>
      <div><h6>Rating: ${rating}</h6></div>
      <div><button  class="cart" data-id=${id} ><i class="fa-solid fa-cart-plus"></i>  Cart</button>
      <button class="wishlist" data-id="${id}"><i class="fa-solid fa-heart-circle-plus"></i>  Wishlist</button></div>
      </div>`;
  }

  async function cartPdt(id){
    let cartItem;
    let res = await fetch(`https://cautious-fox-life-jacket.cyclic.app/pdt/${id}`, {
      headers: { Authorization: localStorage.getItem("usertoken") },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        cartItem=res;
        // render(bag);//  DISPLAY********************************------>
      })
      .catch((err) => {
        console.log(err);
      });


    let res1 = await fetch("https://cautious-fox-life-jacket.cyclic.app/cart", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("usertoken"),
    },
    body: JSON.stringify(cartItem),
    })
    .then((res) => res.json())
    .then((res) => {
      alert(res)
      // render(bag);//  DISPLAY********************************------>
    })
    .catch((err) => {
      console.log(err);
    });

    // let res2 = await fetch("http://localhost:8080/cart", {
    //   method: "POST",
    //   headers: {
    //   "Content-Type": "application/json",
    //   Authorization: localStorage.getItem("usertoken"),
    //   },
    //   body: JSON.stringify(cartItem),
    //   })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     alert(res)
    //     // render(bag);//  DISPLAY********************************------>
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }