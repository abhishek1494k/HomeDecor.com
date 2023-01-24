
  let bag = [];
  let btn = document.getElementById("btn");

  
  btn.addEventListener("click", async function () {
    let email = document.getElementById("admin_email").value;
    let password = document.getElementById("admin_password").value;
    let registerData = {
      email,
      password,
    };
    bag = { ...registerData };
    let res = await fetch("https://good-rose-goshawk-yoke.cyclic.app/admin/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bag),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token",res.token)
        alert(res.msg);
        if(res.msg==="Admin Signin Successful"){
          localStorage.setItem("admin",res.name)
          window.location.href="./Admin/CRUD.html"
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

