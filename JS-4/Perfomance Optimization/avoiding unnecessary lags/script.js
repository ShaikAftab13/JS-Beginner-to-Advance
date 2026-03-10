//the below code is laggy , it will take more time

// let ul = document.querySelector("ul");

// for (let i = 0; i < 100; i++) {
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }

let ul = document.querySelector("ul");
let space = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}

ul.appendChild(space);