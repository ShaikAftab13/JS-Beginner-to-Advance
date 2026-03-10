// console.log(this); // global-scope this

// function demo() {
//     console.log(this); //function-scope this
// }

// demo();

// let obj = {
//     naam: "Aftab",
//     age: 19,
//     sayName: function () {
//         console.log(this.age);
//         console.log(this.naam);
//         console.log(this.sayName); //method this
//     }
// };

// obj.sayName();

// // event-handler this

// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this.style.color = "red");
// });

// class Dummy{
//     constructor(){
//         console.log('hi');
//         this.naam = "koko"; // this value is blank object
//     }
// }

// let val = new Dummy();

// let obj = {
//     sayName: function () {
//         const noob = function() {
//             console.log(this);
//         }
//         noob();
//     }
// }

// obj.sayName();

// let obj = {
//     naam:"Aftab",
//     age: 19
// };

// let arr = ["noobde nibba"];

// function demo () {
//     // console.log(this.naam);
//     // console.log(this.age);
//     console.log(this);
// }

// // demo.call(arr);
// demo.call(obj);
// demo.call(obj.naam);
// demo.call(obj.age);

// let obj = {
//     naam:"Aftab",
//     age: 19
// };

// function demo (a,b,c) {
//     console.log(this,a,b,c)
// };

// demo.call(obj,1,"hi",true);

// let obj = {
//     naam:"Aftab",
//     age: 19
// };

// function demo (a,b,c) {
//     console.log(this,a,b,c)
// };

// demo.apply(obj,[1,"hi",true]);

// let obj = {
//     naam:"Aftab",
//     age: 19
// };

// function demo (a,b,c) {
//     console.log(this,a,b,c)
// };

// const dumb = demo.bind(obj,1,"hi",true);
// dumb();

