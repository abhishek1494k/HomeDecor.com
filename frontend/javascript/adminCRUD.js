let motherDiv=document.getElementById("right_div_2")
  // ADD Products------------------------------------------------------->

  let addBtn = document.getElementById("add")
  addBtn.addEventListener("click", async () => {
    motherDiv.innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute('id','showAdd')
    motherDiv.append(div1)
    let div2 = document.getElementById("showAdd");
    div2.innerHTML = ""
    div2.innerHTML = `
    <div id="register">
      <input type="text" id="image" placeholder="Enter Pdt Image" />
      <input type="text" id="name" placeholder="Enter Name" />
      <input type="number" id="rating" placeholder="Enter Rating" />
      <input type="number" id="lowprice" placeholder="Enter Low Price" />
      <input type="number" id="highprice" placeholder="Enter High Price" />
      <input type="number" id="quantity" placeholder="Enter Quantity" />
      <input type="text" id="category" placeholder="Enter Category" />
      <input onclick="add()" type="submit" id="btn" />
    </div>
    `
  })

  // let btn = document.getElementById("btn");
  let bag = [];

  async function add() {
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;
    let rating = document.getElementById("rating").value;
    let lowprice = document.getElementById("lowprice").value;
    let highprice = document.getElementById("highprice").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;
    let data = {
      name,
      image,
      rating,
      lowprice,
      highprice,
      quantity,
      category,
    };
    bag = { ...data };
    let res = await fetch("https://good-rose-goshawk-yoke.cyclic.app/pdt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(bag),
    })
    const msg = await res.json()
    alert(msg);

    document.getElementById("name").value = ""
    document.getElementById("image").value = ""
    document.getElementById("rating").value = ""
    document.getElementById("lowprice").value = ""
    document.getElementById("highprice").value = ""
    document.getElementById("quantity").value = ""
  }

// Show Products------------------------------------------------------->
  let showAll = document.getElementById("showAllBtn")

  showAll.addEventListener("click", async () => {
    let res = await fetch("https://good-rose-goshawk-yoke.cyclic.app/pdt", {
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
  })

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
          let quantity = item.quantity;
          let category = item.category;
          return renderCard(name, image, rating, lowprice, highprice, quantity, category, id);//CARD------>
        })
        .join("")}
    `;

    let delete_btns = document.querySelectorAll(".delete-btn");
    for (delete_btn of delete_btns) {
      delete_btn.addEventListener("click", function () {
        let id = event.target.dataset.id;
        deletePdt(id);
      });
    }

    let update_btns = document.querySelectorAll(".update-btn");
    for (update_btn of update_btns) {
      update_btn.addEventListener("click", function () {
        let id = event.target.dataset.id;
        updatePdt(id);
      });
    }
  }
//Render Card------------------------------------------------->
  function renderCard(name, image, rating, lowprice, highprice, quantity, category, id) {
    return `<div>
      <div><img src="${image}"></div>
      <div><h5>${name}</h5></div>
      <div><h5>$${lowprice} </h5>
        <h5> - $${highprice}</h5></div>
      <div><h6> <span>Qty: </span> ${quantity}</h6><h6>Rating: ${rating}</h6></div>
      <div><h6>Category-${category}</h6></div>
      <div><button  class="delete-btn" data-id=${id} >Delete</button>
      <button class="update-btn" data-id="${id}">Update</button></div>
      </div>`;
  }

  //DELETE PDT------------------------------------------------>
  async function deletePdt(id) {
    let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/pdt/${id}`, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res)
      })
      .catch((err) => {
        console.log(err);
      });

      let res2 = await fetch("https://good-rose-goshawk-yoke.cyclic.app/pdt", {
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

  //UPDATE PDT------------------------------------------------>
  async function updatePdt(id) {
    localStorage.setItem("id",id)
    motherDiv.innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute('id','updatePdt')
    motherDiv.append(div1)

    document.getElementById("updatePdt").innerHTML = "";
    document.getElementById("updatePdt").innerHTML = `
    <div id="register1">
      <label for="">Name</label>
      <input type="text" id="name" placeholder="Enter Name" />
      <label for="">Image</label>
      <input type="text" id="image" placeholder="Enter Pdt Image" />
      <label for="">Rating</label>
      <input type="number" id="rating" placeholder="Enter Rating" />
      <label for="">Low Price</label>
      <input type="number" id="lowprice" placeholder="Enter Low Price" />
      <label for="">High Price</label>
      <input type="number" id="highprice" placeholder="Enter High Price" />
      <label for="">Quantity</label>
      <input type="number" id="quantity" placeholder="Enter Quantity" />
      <label for="">Category</label>
      <input type="text" id="category" placeholder="Enter Category" />
      <input onclick="update()" type="submit" id="updatebtn" />
    </div>
    `;

    let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/pdt/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
      document.getElementById("name").value = res.name;
      document.getElementById("image").value = res.image
      document.getElementById("rating").value = res.rating
      document.getElementById("lowprice").value = res.lowprice
      document.getElementById("highprice").value = res.highprice
      document.getElementById("quantity").value =res.quantity
      document.getElementById("category").value =res.category
      })
      .catch((err) => {
        console.log(err);
      });
  }

 async function update(){
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;
    let rating = document.getElementById("rating").value;
    let lowprice = document.getElementById("lowprice").value;
    let highprice = document.getElementById("highprice").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;
    let data = {
      name,
      image,
      rating,
      lowprice,
      highprice,
      quantity,
      category,
    };
    let id=localStorage.getItem("id")
    console.log(id)
    bag = { ...data };

    let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/pdt/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(bag),
    })
    const msg = await res.json()
    alert(msg)

    let res2 = await fetch("https://good-rose-goshawk-yoke.cyclic.app/pdt", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        bag = [...res];
        render(bag);//Display------------------------------------------------>
      })
      .catch((err) => {
        console.log(err);
      });
  }

//---------------------------USERS-----------------------------//

let showuser = document.getElementById("showUserBtn")
let user = [];
showuser.addEventListener("click", async () => {

  let res = await fetch("https://good-rose-goshawk-yoke.cyclic.app/showuser")
    .then((res) => res.json())
    .then((res) => {
      user = [...res];
      console.log(user)
      renderUser(user);//  DISPLAY********************************------>
    })
    .catch((err) => {
      console.log(err);
    });
})

 function renderUser(user) {//  DISPLAY***********************------>
  console.log("ABC")
  motherDiv.innerHTML=""
  let div=document.createElement("div")
  div.setAttribute('id','showUser')
  motherDiv.append(div)

  document.getElementById("showUser").innerHTML = "";
  document.getElementById("showUser").innerHTML = `
  ${user
      .map((item) => {
        let id = item._id;
        let name = item.name;
        let email = item.email;
        let mob = item.mob;
        return `<div>
      <div><h5>Name: ${name}</h5></div>
      <div><h5>Email: ${email} </h5></div>
      <div><h5>Mobile: ${mob}</h5></div>
      <div><button  class="user_delete-btn" data-id=${id} >Delete</button></div>
      </div>`;
      })
      .join("")}
  `;

  let user_delete_btns = document.querySelectorAll(".user_delete-btn");
  for (delete_btn of user_delete_btns) {
    delete_btn.addEventListener("click", function () {
      let id = event.target.dataset.id;
      deleteUser(id);
    });
  }
 }

 async function deleteUser(id) {
  let res = await fetch(`https://good-rose-goshawk-yoke.cyclic.app/deleteuser/${id}`, {
    method: "DELETE"
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res)
    })
    .catch((err) => {
      console.log(err);
    });

    let res2 = await fetch("https://good-rose-goshawk-yoke.cyclic.app/showuser")
    .then((res) => res.json())
    .then((res) => {
      user = [...res];
      renderUser(user);//  DISPLAY********************************------>
    })
    .catch((err) => {
      console.log(err);
    });
}
