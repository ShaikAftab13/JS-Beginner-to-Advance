// (function(name){
//     console.log(name);
// })("Aftab");

// let fnc = (function(){
//     return 13;
// })();

//module pattern

// let bank = (function(){
//     let balance = 100000000;
//     function checkBalance() {
//         console.log(balance);
//     }

//     function setBalance(val) {
//         balance = val;
//     }

//     function withdraw(val) {
//         if(val<=balance) {
//             balance -= val;
//             console.log("Withdrawn:",val);
//             console.log("Available balance:",balance);
//         }
//     }

//     return {
//         checkBalance,
//         setBalance,
//         withdraw
//     }
// })();

// bank.checkBalance();
// bank.setBalance(1000);
// bank.checkBalance();
// bank.withdraw(100);


//revealing module pattern
// let bank = (function(){
//     let balance = 100000000;
//     function checkBalance() {
//         console.log(balance);
//     }

//     function setBalance(val) {
//         balance = val;
//     }

//     function withdraw(val) {
//         if(val<=balance) {
//             balance -= val;
//             console.log("Withdrawn:",val);
//             console.log("Available balance:",balance);
//         }
//     }

//     return {
//         check: checkBalance,
//         set: setBalance,
//         drawn: withdraw
//     }
// })();

// bank.check();
// bank.set(1000);
// bank.check();
// bank.drawn(100);

// factory function pattern

// function createProduct (name,price) {
//     let stock = 10;
//     return {
//         name,
//         price,
//         checkStock () {
//             console.log("Stock : ",stock);
//         },
//         buy (qty) {
//             if (qty <= stock) {
//                 stock -= qty;
//                 console.log(`${qty} booked - ${stock} left`)
//             }else console.error(`Only ${stock} left.`)
//         },

//         refill (qty) {
//             stock += qty;
//             console.log("Available stock : ",stock);
//         }
//     }
// }

// let sharbat = createProduct("Nanari Sharbat",30);
// sharbat.checkStock();
// sharbat.buy(12);
// sharbat.refill(20);
// sharbat.checkStock();
// sharbat.buy(21);

// class YoutubeChannel {
//     constructor() {
//         this.subscribers = [];
//     }

//     subscribe(user) {
//         this.subscribers.push(user);
//         user.update(`You have subscribed the channel`);
//     }

//     unsubscribe(user) {
//         this.subscribers = this.subscribers.filter(
//             sub => sub !== user
//         );
//         user.update(`You have unsubscribed the channel`);
//     }

//     notify(msg) {
//         this.subscribers.forEach(sub =>
//             sub.update(msg)
//         );
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     update(data) {
//         console.log(`${this.name}, ${data}`);
//     }
// }

// let tabIndustries = new YoutubeChannel();

// let user1 = new User("Aftab");
// let user2 = new User("Shaik");

// tabIndustries.subscribe(user1);
// tabIndustries.subscribe(user2);

// tabIndustries.notify("New video is live ....");

// tabIndustries.unsubscribe(user2);

// let grade = (function(){
//     let marks = [];
//     function addMark (mark) {
//         marks.push(mark);
//     }

//     function showMarks () {
//         console.log(marks);
//     }
//     function getAverage () {
//         let sum = marks.reduce((acc,val)=>{return acc+val},0);
//         let avg = sum/marks.length;
//         console.log(avg);
//     }

//     function getHighest () {
//         let highest = marks[0];
//         marks.forEach(function(mark) {
//             if(mark > highest) highest = mark;
//         })
//         console.log("Top scorer:" ,highest);
//     }

//     function resetMarks () {
//         marks.length = 0;
//         console.log(marks);
//     }

//     return {
//         addMark,
//         showMarks,
//         getAverage,
//         getHighest,
//         resetMarks
//     }
// })();

// grade.addMark(90);
// grade.addMark(57);
// grade.addMark(89);
// grade.addMark(34);
// grade.addMark(22);
// grade.showMarks();
// grade.getAverage();
// grade.getHighest();
// grade.resetMarks();


// class Circle {
//     draw () {
//         console.log("Drawing a circle");
//     }
// }

// class Square {
//     draw () {
//         console.log("Drawing a Square");
//     }
// }

// class Triangle {
//     draw () {
//         console.log("Drawing a Triangle");
//     }
// }

// class ShapeFactory {
//     static shape (type) {
//         if(type === "circle") return new Circle();
//         if(type === "square") return new Square();
//         if(type === "triangle") return new Triangle();
//     }
// }

// let s = ShapeFactory.shape("circle");
// s.draw();

// function createChai (name,price) {
//     let available = 10;
//     return {
//         name,
//         price,
//         buy(qty) {
//             console.log("Buying Chai");
//             available -= qty;
//             console.log(`Chai left - ${available}`);
//         },
//         refill(qty) {
//             console.log("Chai garam Chai available...");
//             available += qty;
//             console.log(`Chai available: ${available}`)
//         }
//     }
// }

// let badam = chai("Badam Tea",30);
// badam.buy(6);
// badam.refill(10);

class WeatherStation {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`,you have subscribed the channel`);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(sub => sub!== user);
        user.update(`,you have unsubscribed the channel`);
    }

    notify(msg) {
        this.subscribers.forEach(sub => sub.update(msg));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}:- ${data}`);
    }
}

let channel = new WeatherStation;

let u1 = new User("Aftab");
let u2 = new User("Shaik");


channel.subscribe(u1);
channel.subscribe(u2);

channel.notify("Temperature is rising .....");

channel.unsubscribe(u1);