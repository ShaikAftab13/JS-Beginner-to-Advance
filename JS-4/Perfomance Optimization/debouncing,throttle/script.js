// function debounce(fnc,delay) {
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fnc(...args);
//         },delay)
//     }
// }

// document.querySelector("input").addEventListener("input",debounce(function(e){
//     console.log(e.target.value);
// },2000));

// function throttle(fnc,delay) {
//     let timer = 0;
//     return function(...args) {
//         let now = Date.now();
//         if(now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     }
// }

// document.querySelector("input").addEventListener("input",throttle(function(e){
//     console.log(e.target.value);
// },2000));

const input = document.querySelector("input");
const defaultText = document.querySelector("#default");
const debounceText = document.querySelector("#debounce");
const throttleText = document.querySelector("#throttle");

function debounce(fnc, delay) {
    let timer = 0;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args)
        }, delay);
    }
}

function throttle(fnc, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        console.log("now:", now);
        console.log("lastTime:", lastTime);
        console.log("difference:", now - lastTime);
        if (now - lastTime >= delay) {
            lastTime = now;
            fnc(...args);
        }
    }
}

input.addEventListener("input", function (e) {
    defaultText.textContent = e.target.value;
});

input.addEventListener("input",
    debounce(function (e) {
        debounceText.textContent = e.target.value;
    }, 3000)
);

input.addEventListener("input",
    throttle(function (e) {
        throttleText.textContent = e.target.value;
    }, 3000)
);