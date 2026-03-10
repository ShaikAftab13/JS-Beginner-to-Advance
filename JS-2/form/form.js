let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");

pass.addEventListener("input", () => {
    let value = pass.value;
    let msg = [];

    if (value.length < 8) msg.push("Minimum 8 characters required");
    if (!/[A-Z]/.test(value)) msg.push("1 uppercase letter");
    if (!/[a-z]/.test(value)) msg.push("1 lowercase letter");
    if (!/\d/.test(value)) msg.push("1 number");
    if (!/[@$!%*?&]/.test(value)) msg.push("1 special character");

    if (msg.length) {
        document.querySelector("#passMsg").textContent = "Password must contain: " + msg.join(", ");
        document.querySelector("#passMsg").style.display = "initial";
    } else {
        document.querySelector("#passMsg").textContent = "";
    }
});

email.addEventListener("input", () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    let emailRes = emailRegex.test(email.value);

    if (!emailRes) {
        document.querySelector("#emailMsg").textContent = "Email is incorrect";
        document.querySelector("#emailMsg").style.display = "initial";
    } else {
        emailMsg.textContent = "";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    email.value = "";
    pass.value = "";
});

