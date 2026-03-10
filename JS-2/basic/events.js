// "click"

// "mouseover"

// "mouseout"

// "keydown"

// "keyup"

// "submit"

// "change"

// function dbClick(){
//     h1.style.color = "red";
// }

// let h1 = document.querySelector("h1");
// h1.addEventListener("dblclick",dbClick);
// h1.removeEventListener("dblclick",dbClick);

// let btn = document.querySelector("button");
// btn.classList.add("button");

// let body = document.querySelector("body");

// btn.addEventListener("click",()=>{
//     body.classList.toggle("change");
// })

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(det){
//     if(det.data !== null)
//         console.log(det.data);
// })

// let select = document.querySelector("select");
// let h1 = document.createElement("h1");
// document.body.append(h1);
// h1.style.textTransform = "capitalize";
// select.addEventListener("change",(dets)=>{
//     h1.textContent = dets.target.value;
// });

// let h1 = document.querySelector('h1');

// document.addEventListener("keydown",function(e) {
//     if(e.key === " ")
//         h1.textContent = "SPACE";
//     else h1.textContent = e.key;
// });

// let btn = document.querySelector("#btn");
// let input = document.querySelector("#fileImp");

// btn.addEventListener("click",()=>{
//     input.click();
// });

// input.addEventListener("change",()=>{
//     const file = input.files[0];
//     if(file)
//         btn.textContent = file.name;
// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Form not submitted");

//     let card = document.createElement('div');
//     card.classList.add("card");

//     let profile = document.createElement('div');
//     profile.classList.add('profile');

//     let img = document.createElement('img');
//     img.setAttribute("src",inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;
//     profile.appendChild(img);
//     card.append(profile,h3,h5,p);
//     main.append(card);

//     inputs.forEach((input)=>{
//         if(input.type !== "submit")
//             input.value = "";
//     })
// });

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",()=>{
//     abcd.style.backgroundColor = "yellow";
// })

// abcd.addEventListener("mouseout",()=>{
//     abcd.style.backgroundColor = "red  ";
// })

// let abcd = document.querySelector("#abcdBox");

// window.addEventListener("mousemove",(dets)=>{
//     const rect = abcd.getBoundingClientRect();
//     // console.log(dets.clientX,dets.clientY);
//     abcd.style.top = dets.clientY - rect.height/2+ "px";
//     abcd.style.left = dets.clientX - rect.width/2+"px";
// })

// let ul = document.querySelector("ul");

// ul.addEventListener("click",(e)=>{
//     e.target.classList.toggle("li-dec");
// })

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     console.log("Button clicked");
// })

// c.addEventListener("click",()=>{
//     console.log("c clicked");
// },true)

// b.addEventListener("click",()=>{
//     console.log("b clicked");
// })

// a.addEventListener("click",()=>{
//     console.log("a clicked");
// },true)

// let inp = document.querySelector("input");
// let s = document.querySelector("span");

// inp.addEventListener("input", (e) => {
//     let leftCount = 20 - e.target.value.length;
//     s.textContent = leftCount;

//     s.style.color = leftCount < 0 ? "red" : "black";
// });

let form = document.querySelector("form");
let error = document.querySelectorAll(".hide");

let nm = document.querySelector("#name");
let email = document.querySelector("#email");

const nameRegex = /^[A-Za-z ]{2,}$/;
nm.addEventListener("input",()=>{
    error[0].style.display = nameRegex.test(nm.value.trim())?"none":"initial";
})

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
email.addEventListener("input",()=>{
    error[1].style.display = emailRegex.test(email.value.trim())?"none":"initial";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!(!nameRegex.test(nm.value.trim()) ||
        !emailRegex.test(email.value.trim()))){
            error.style.display = "initial";
            return;
        }
    console.log("Form submitted")
})