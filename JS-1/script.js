// words and keywords
// js mein jin words sey kuch kar sakte hai usko ham keywords bolte hai

// keywords are reserve words

// variables :

// -> var(avoid karo kyuki ye purana hai) , let , const

// var a; -> declaration
// a = 10; -> initialization
// var a = 10; -> declaration and initialization

// var (ecma-script 5) and let,const (ES6)

// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);

// var ->
// apne apko window mai add karega
// Function scoped
// aap isey declare karke phirse redeclare kar sakte hoo ,koi error nhi ayega
// you all will think it is working fine then why var is not recommended
// suno aap cigar pita hoo yesi hi chalta raha chalta raha aur aap nashedi banjoge kya ye acha hai
// same goes to var agar koi error hi nhi ayega tho aap wrong way mai code likdoge

// let,const ->
// block scope
// sirf => {} -> yese blocks mai hai iska access hai

// let dulha = "acha banda";
// let dulhan = "apsara";

// const dulha = "acha banda";
// const dulhan = "apsara";

// Data Types:

// number , string , boolean , null , undefined , BigInt , Symbol

// let num = 10;
// let naam = "aftab"
// let isMale = true;
// let x;
// let y = null;
// let badanumber = 12n;
// let z = Symbol(10);

// console.log(typeof(num),typeof naam,typeof isMale,typeof x,typeof y,typeof badanumber,typeof z)

// global , block , function Scope

// let a = 10;   // global
// console.log(a);
// function show() {
//     a=20;
//     console.log(a); //  can access global variable
// }

// show();
// console.log(a); //  also works here

// redeclaration and reassign

// var a = 10;
// a = 20; // reassign
// console.log(a);
// var a =30; // redeclare
// console.log(a);


// Temporal Dead Zone -> utna area jisme JS ko pata hai ki variable exist karta hai
//  par vo aapko access karne nhi deta

// console.log(a);

// var a = 10; // undefined

// console.log(b);

// let b = 20;

// TDZ(english def) -> the period b/w entering a scope and actual declaration of variable

// Hoisting -> is a JS behavior of moving variables and function declarations to top of its
// containing scope during compilation

// link to study about TDZ -> https://www.geeksforgeeks.org/javascript/temporal-dead-zone-in-javascript/

// let x = 10;
// {
//     let x = 20;
//     console.log("Inside block : "+x);
// }

// console.log("Outside block : "+x);

// Data Types

//Primitive data types : iney copy karne par apko uski asli real copy mi jayegi
// number,string,boolean,null,undefined,symbol,bigint

// reference -> iney copy karne par apko uski reference mil jayega parent ka
// arrays,objects,functions
// [],(),{}


// let a = 12;
// let b = a;
// a = a+2;

// console.log(a);
// console.log(b);


// let a = [1,2,3];
// let b = a;
// b.pop()
// console.log(a);
// console.log(b);

// let a = 9007199254740991n;

// let a = [1,2,3];
// let b = a;

// b[0] = 10;

// let x = 3;
// let y = x++;
// console.log(x,y)

// let p = 4;
// let q = ++p;
// console.log(p,q);

// let m = 10;
// console.log(m--);
// console.log(m);

// let n = 5;
// let res = n++ + ++n;
// console.log(res);

// let day = new Date().getDay();
// // getDay() returns: 0=Sunday, 1=Monday, ..., 6=Saturday

// switch(day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }




// function getGrade(marks) {
//     if (marks >= 90) {
//         console.log("A");
//     } else if (marks >= 80) {
//         console.log("B");
//     } else if (marks >= 70) {
//         console.log("C");
//     } else if (marks >= 60) {
//         console.log("D");
//     } else if (marks >= 50) {
//         console.log("E");
//     } else if (marks >= 0 && marks < 50) {
//         console.log("Fail");
//     } else {
//         console.log("Invalid marks");
//     }
// }

// getGrade(42);

// Rock-paper-scissor logic

// function rps(user,computer){
//     if(user===computer) return "DRAW";
//     if(user==="rock" && computer==="scissors") return "Winner is user";
//     if(user==="scissors" && computer==="paper") return "Winner is user";
//     if(user==="paper" && computer==="rock") return "Winner is user";
//     return "Winner is computer";
// }

// console.log(rps("rock","paper"));

// even numbers ko print karna hai

// console.log("Even numbers from 1-100");
// for(let i=1;i<=100;i++) {
//     if(i%2==0)
//         console.log(i);
// }

// console.log("Prime numbers from 1-100");

// let n = 11;
// let isPrime = true;
// for (let i = 2; i*i <= n; i++) {
//     if (n % i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

// for (let n = 2; n <= 100; n++) {
//     let isPrime = true;

//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(n);
//     }
// }

// for (let i=1;i<=10;i++) {
//     console.log(i);
// }

// let i = 10;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

// for (let i =1;i<=20;i++) {
//     if (i%2==0)
//         console.log(i);
// }

// for (let i =1;i<=20;i++) {
//     if (i%2!==0)
//         console.log(i);
// }

// let i = 1;
// while(i<16) {
//     if(i%2!==0)
//         console.log(i);
//     i++;
// }

// for (i = 1; i <= 10; i++) {
//     // console.log(5, " * ", i, " = ", (5 * i));
//     console.log(`5 * ${i} = ${5*i}`)
// }

// let sum = 0;
// for (let i =1;i<=100;i++) {
//     sum+=i;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;

// while (i <= 100) {
//     sum += i;
//     i++;
// }

// console.log(sum);

// for (let i = 1; i < 51; i++) {
//     if (i % 3 === 0)
//         console.log(i);
// }

// let val = prompt("Give a number");

// for (let i = 1; i <= val; i++) {
//     if(i%2===0)
//         document.writeln(`${i} is even<br>`);
//     else
//         document.writeln(`${i} is odd<br>`);
// }

// let count = 0;

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i%5===0){
//         console.log(i);
//         count++;
//     }
// }
// console.log(count);

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0)
//         continue;
//     console.log(i);
// }

// for(let i=1;i<=100;i++) {
//     if(i%7==0)
//         break
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 == 0)
//         continue
//     console.log(i);
// }

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         count++;
//         console.log(i);
//     }
//     if (count == 5)
//         break;
// }

// let count = 0;
// let num = 1234567890192873938298;

// while (num > 0) {
//     count++;
//     num=Math.floor(num/10);
// }

// console.log(count);


// function

// function sum(x, y) {
//     let add = x + y;
//     console.log(add);
// }

// sum(2,3);


// function lolo() {
//     console.log("BHAI APAN LOLO SE HAI");
// }

// lolo();

// let fnc = function(){
//     console.log("BHAI SAHAB HAM fnc SE HAI");
// }

// fnc();

// const greet = name => {
//     console.log("Hello",name);
// }

// greet("Aftab");

// function add(a = 1, b = 0) {
//     return a + b;
// }

// console.log(add());


// function nibba(...val) {
//     console.log(val);
// }

// nibba(1,2,3,4,"hi",6,7,"hello",9,10);

// function sayHello() {
//     console.log('hello');
// }

// function execute(fn) {
//     fn();
// }

// execute(sayHello);

// function multiplier(factor) {
//     return function(number) {
//         return number*factor;
//     };
// }

// console.log(multiplier(2)(5));
// const double = multiplier(2);
// console.log(double(5));

// let arr = [
//     function() {
//         console.log("Hello");
//     },
//     function(a,b) {
//         return a+b;
//     }
// ]
// arr[0]();
// console.log(arr[1](2,3));

// function abcd(){
//     return function(){
//         console.log("Hello baby");
//     }
// }

// abcd()();

// function abcd(fn) {
//     fn();
// }

// abcd(function(){
//     console.log("Hello");
// })


// (function(){
//     msg = "hi";
//     console.log(msg);
// })();

// function getScore(...score) {
//     let total = 0;
//     // for(let sum of score)
//     //     total+=sum;
//     // score.forEach(function(val){
//     //     total+=val;
//     // })
//     return total;
// }

// console.log(getScore(10,20,30,40,50,60,70,80,90,100));

// BMI Calculator


// function bmi(weight,height) {
//     return (weight/height**2).toFixed(2);
// }

// console.log(bmi(70,1.75));

// function discountCalculator(discount) {
//     return function(price) {
//         return price - (discount * price / 100);
//     }
// }

// console.log(discountCalculator(10)(200));

// let a = ['hi',true,10,69.9];
// console.log(a);


// let arr = [1,2,3,4,5];
// console.log(arr.length);
// arr.push(6);
// arr.pop();
// arr.unshift(10);
// arr.shift();
// arr.splice(0,3);
// let newArr = arr.slice(0,3);
// console.log("ARR:",arr);
// console.log("NEW ARR:",newArr);
// let sor = arr.sort(function(a,b){return a-b;});
// console.log(sor);
// let sor2 = arr.sort((a,b)=>b-a);
// console.log(sor2);

// let newArr = arr.map(n => n*n)
// console.log(newArr);

// let newArr = arr.map((value, index, array) => {
//     console.log("value:", value);
//     console.log("index:", index);
//     console.log("array:", array);
//     console.log("-----------");

//     return value + index;
// });

// console.log(newArr);


// let arr = [1,2,3,4,5];

// let newArr = arr.map(val=>{
//     if(val>3) return val;
// });

// let newArr = arr.filter(n=>n%2===0)

// let newArr = arr.reduce((a,b)=>{
//     return a+b;
// },0);

// console.log(newArr);

// let arr = [10, 20, 30, 40];

// let res = arr.find((value, index, array) => {
//     console.log(value, index, array);
//     return value > 25;
// });

// console.log(res); // 30

// let arr = [1,2,1,3,4,5];

// let newArr = arr.find((val)=>{
//     return val>1;
// });

// console.log(newArr);


// let newArr = arr.some(x => x%2===0);
// let newArr = arr.every(x => x%2===0);
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];

// let [a,b,,d] = arr;

// let arr2 = [...arr];
// arr2[0] = 10;
// arr2[1] = 20;

// let fruits = ["Apple","Banana","Mango"]

// let fruits = ["Apple","Banana"];
// fruits.push("Mango");
// fruits.unshift("Pineapple");

// let arr = ["Apple","Banana"];
// arr[1] = "Kiwi";

// let numbers = [1,2,3,4,5];
// numbers.pop();

// let colors = ["Green","Yellow"];
// colors.splice(1,0,"Red","Blue");

// let arr = [1,2,3,4,5,6];
// let newArr = arr.slice(1,4);

// let names = ["Zara","Arjun","Mira","Bhavya"];
// names.sort().reverse();

// let items = [10,23,4,644,97];
// items.sort((a,b)=>b-a);

// let arr = [1,2,3,4]
// let newArr = arr.map(x => x*x);

// let arr = [5,12,8,20,3];
// let newArr = arr.filter(val => {if(val>10) return val;})

// let arr = [10,20,30];
// let newArr = arr.reduce((acc,val)=>{return acc+val;},0);

// let arr = [12,15,3,8,20];
// let newArr = arr.find(x=>{if(x<10) return x;})

// let arr = [45,60,28,90];
// let newArr = arr.some(x => {return x<35;})

// let arr = [2,4,6,8,10];
// let newArr = arr.every(x => {return x%2==0;})

// let arr = ["Shaik","Aftab"];
// let [firstName,lastName] = arr;

// let a = [1,2];
// let b = [3,4];

// let c = [...a,...b];

// let countries = ["USA","UK"];
// countries = ["India",...countries];

// let a = [1,2,3];
// let b = [...a];

// let obj = {
//     name: "Aftab",
//     age: 19,
//     rollNo: 178
// };

// console.log(obj);

// let obj = new Object();
// obj.name="Sk.Aftab";
// obj.age=19;
// obj.rollNo=178;
// console.log(obj);

// let a = "name";
// console.log(obj[a]);

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj['rollNo']);

// obj["name"] = "Shaik Aftab";
// obj.rollNo = "2411cs020178";

// console.log(obj);

// let obj = {
//     name: "Aftab",
//     age: 19,
//     rollNo: 178
// };

// console.log(obj);
// obj.city = "Hyd";
// delete obj.age;
// console.log(obj);

// let user = {
//     name : "Shaik Aftab",
//     age : 19,
//     location : {
//         city : "Hyderabad",
//         address : {
//             street : "Tolichowki",
//         }
//     }
// };

// console.log(user.location.address.street);
// let {street} = user.location.address;
// console.log("Strret is ",street);

// let obj = {
//     name : "Sk.Aftab",
//     age : 19,
//     rollNo : 178
// };

// for(let key in obj)
//     console.log(`${key} : ${obj[key]}`);

// let obj = {
//     name : "Sk.Aftab",
//     age : 19,
//     rollNo : 178
// };

// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// let obj2 = {...obj};
// console.log(obj2);

// console.log(Object.assign({price : "Null"},obj))

// let obj = {
//     name : "Sk.Aftab",
//     age : 19,
//     rollNo : 178,
//     address : {
//         city : "Hyd",
//     }
// };

// let obj2 = {...obj};
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.address.city = "Nellore";
// console.log(obj);
// console.log(obj2);

// let role = "admin";

// let obj = {
//     name : "Sk.Aftab",
//     age : 19,
//     rollNo : 178,
//     addresses : {
//         city : "Hyd",
//     },
//     [role] : "Ai-ml"
// };

// console.log(obj);
// console.log(obj?.address?.city);


// let obj = {
//     name : "Aftab",
//     age : 19,
//     isEnrolled : true
// };

// console.log(obj);

// let obj = {
//     true : "yes",
//     42 : "answer"
// };

// console.log(obj)

// const user = {
//     "first-name" : "Aftab"
// };

// console.log(user["first-name"]);

// let key = "age"

// const user = {
//     age : 19
// };

// console.log(user[key]);

// const locations = {
//     city : "Nellore",
//     coordinate : {
//         street : "Rajagari",
//         landmark : "Ravi chetu",
//     },
// };

// let {city} = locations;
// let {street} = locations.coordinate;
// console.log(city,street);

// const user = {
//     "first-name" : "Aftab"
// };

// let {"first-name":Name} = user;
// console.log(Name);

// const obj = {
//     title: "JS",
//     duration: 4
// }

// Object.entries(obj).forEach(function(val){
//     console.log(val[0],":",val);
// });

// for (let key in obj) {
//     console.log(key);
// }


// const person = {
//   name: "Alice",
//   age: 25,
//   location: "New York"
// };

// // Destructuring the properties into variables
// const { name, location } = person;
// console.log(name);
// console.log(location);


// const user = {
//     name : "Aftab",
//     address : {
//         city : "nellore",
//         pin : 524003,
//         location : {
//             lat : 77.4,
//             lng : 45.6,
//         }
//     }
// };

// console.log(user.address.location.lng);
// console.log(user["address"]["location"]["lng"]);

// let {lat,lng} = user.address.location;
// console.log(lat,lng);


// let obj = {
//     name : "aftab",
//     age : 19,
//     email : "a@gmail.com"
// };


// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`)
// }


// let obj = {
//     name : "Aftab",
//     age : 19,
//     rollNo : 178
// }

// console.log(Object.entries(obj));

// let obj = {
//     name : "Aftab",
//     age : 19,
//     rollNo : 178
// };

// let obj2 = {
//     name : "aftab",
// };

// console.log(Object.assign({},obj));
// console.log(obj);
// console.log(obj2);

// let obj = {
//     name : "aftab",
//     age : 19
// }

// let obj2 = Object.create(obj);
// console.log(obj);
// obj2.name = "shaik";
// console.log(obj);
// console.log(obj2.name);
// console.log(obj2.age);

// let obj = {
//     name : "Aftab",
//     age : 19,
//     city : {
//         address : "Nellore",
//         street : "Mulapet",
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "shaik"
// obj2.city.address = "Hyd";
// console.log(obj);
// console.log(obj2);

// const user = {
//     'first-name' : "aftab",
// };

// console.log(user["first-name"]);

// let key = "age"

// const user = {
//     age : 26,
// };

// console.log(user[key]);

// let obj = {
//     name : "Aftab",
//     location : {
//         city : "nellore"
//     }
// };

// let {name , location : {city}} = obj;
// // let {name} = obj;
// // let {city} = obj.location;
// console.log(name);
// console.log(city);

// const user = {
//     "first-name" : "Aftab",
// };

// let {"first-name" : firstName} = user;
// console.log(firstName);

// const course = {
//     title : "JS",
//     duration : "4weeks",
// };

// Object.entries(course).forEach(function(val){
//     console.log(val[0] , ":" , val[1] );
// });

// const original = {a:1,b:2};
// const copy = {...original};

// let key = "shaik";

// const obj = {
//     name : "aftab",
//     [key] : "habibi"
// };

// console.log(obj);

// (function(name){
//     console.log(`Mera naam chapri ${name}`);
// }("Suihail"));
