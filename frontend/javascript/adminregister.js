let bag = [];
let btn = document.getElementById("btn");

btn.addEventListener("click", async function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let specialkey = document.getElementById("specialkey").value;
  let registerData = {
    name,
    email,
    password,
    specialkey
  };
  bag = { ...registerData };
  const res = await fetch("https://cautious-fox-life-jacket.cyclic.app/admin/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bag),
  })
  .then((res) => res.json())
  .then((res) => {
    alert(res.msg);
    if(res.msg==="Admin Signup Successfull"){
      localStorage.setItem("admin",res.name)
      window.location.href="../index.html"
    }
  })
  .catch((err) => {
    console.log(err);
  });
});