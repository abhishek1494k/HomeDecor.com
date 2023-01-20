
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
    let res = await fetch("http://localhost:8080/admin/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bag),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token",res.token)
        console.log(res);
        alert(res.msg);
        window.location.href="index.html"
      })
      .catch((err) => {
        console.log(err);
      });
  });

