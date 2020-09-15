const form = document.querySelector("form");
const submit = document.querySelectorAll("button");
const emailError = document.querySelector(".email.error");
const passwordError = document.querySelector(".password.error");

submit.forEach((button, i) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    const email = form.email.value;
    const password = form.password.value;

    if (i === 0) {

      try {
        const res = await fetch("/signup", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        console.log(data);
        if (data.errors) {
          emailError.textContent = data.errors.email;
          passwordError.textContent = data.errors.password;
        }
        if (data.user) {
          location.assign(`/dashboard/${data.user}`);
        }
      }
      catch (err) {
        console.log(err);
      }

    } else {

      try {
        const res = await fetch("/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        console.log(data);
        if (data.errors) {
          emailError.textContent = data.errors.email;
          passwordError.textContent = data.errors.password;
        }
        if (data.user) {
          location.assign(`/dashboard/${data.user}`);
        }
      }
      catch (err) {
        console.log(err);
      }

    }

  })
});