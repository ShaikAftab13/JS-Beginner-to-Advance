    // class CreatePencil {
    //     constructor (name,company,price,color) {
    //         this.name = name;
    //         this.company = company;
    //         this.price = price;
    //         this.color = color;
    //     }

    //     info(text) {
    //         let h1 = document.createElement("h1");
    //         h1.textContent = text;
    //         h1.style.color = this.color;
    //         document.body.appendChild(h1);
    //     }

    //     erase() {
    //         document.querySelectorAll("h1").forEach(element => {
    //             if(element.style.color === this.color) element.remove();
    //         })
    //     }
    // }

    // let p1 = new CreatePencil("Apsara","TAB",10,"pink");
    // let p2 = new CreatePencil("Doms","BOT",20,"orange");


    // class User {
    //     constructor (name,address,username,email) {
    //         this.name = name;
    //         this.address = address;
    //         this.username = username;
    //         this.email = email;
    //         this.role = "student";
    //     }

    //     checkRole() {
    //         console.log(`You are ${this.role}`)
    //     }
    //     info (text) {
    //         let h1 = document.createElement("h1");
    //         h1.textContent = `${this.name} : ${text}`;
    //         h1.dataset.user = this.username;
    //         document.body.appendChild(h1);
    //     }
    // }

    // class Admin extends User {
    //     constructor (name,address,username,email) {
    //         super(name,address,username,email);
    //         this.role = "admin";
    //     }

    //     remove(user) {
    //         document.querySelectorAll("h1").forEach(element=>{
    //             if(element.dataset.user === user.username)
    //                     element.remove();
    //         })
    //     }
    // }

    // let u1 = new User("Aftab","Nellore","Shaik","tab@gmail.com");
    // let u2 = new User("Bot","Hyd","Tab","hi@gmail.com");

    // let admin = new Admin("admin1","india","adtab","admin@gmail.com");


// let coffe = {
//     color: "dark",
//     drink: function() {
//         console.log("gut gut gut");
//     }
// }

// let dasRupayChai = Object.create(coffe);

