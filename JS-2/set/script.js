// let stm = setTimeout(()=>{
//     console.log("Hello world");
// },1000);

// clearTimeout(stm);

// let si = setInterval(()=>{
//     console.log("Hi");
// },5000);

// clearInterval(si);

// let count = 10;

// let interVal = setInterval(()=>{
//     if(count>0){
//         console.log(count);
//         count--;
//     }else clearInterval(interVal);
// },1000);

// let bar = document.querySelector(".progress-bar");
// let per = document.querySelector("#percent");
// let count = 0;
// let btn = document.querySelector("#start");
// let h2 = document.querySelector("h2");
// let toast = document.querySelector(".toast");

// btn.addEventListener("click",() => {
//     let interval = setInterval(() => {
//         if (count <= 100) {
//             bar.style.width = `${count}%`;
//             per.textContent = `${count}%`;
//             count++;
//         } else {
//             h2.textContent = "Downloaded Successfully";
//             h2.style.color = "lime";
//             clearInterval(interval);
//             toast.classList.add("show");
//             setTimeout(()=>{toast.classList.remove("show")},3000);
//         }
//     }, 10);
// })

// // setTimeout(() => {
// //     btn.style.display = "none";
// // },3000);
