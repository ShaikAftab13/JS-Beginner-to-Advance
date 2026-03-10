function CreatePencil(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.info = function () {
        let nameEl = document.createElement('h2');
        let priceEl = document.createElement('h3');
        let colorEl = document.createElement('h4');
        let comEl = document.createElement("p");
        let div = document.createElement("div");

        div.classList.add("display");

        nameEl.textContent = this.name;
        priceEl.textContent = this.price;
        colorEl.textContent = this.color;
        comEl.textContent = this.company;
        nameEl.style.color = this.color;
        div.append(nameEl, priceEl, colorEl, comEl);
        document.body.appendChild(div);
    }
}

CreatePencil.prototype.company = "TAB";

let p1 = new CreatePencil("Natraj",10,"pink");
let p2 = new CreatePencil("apsara-extra long",20,"red");

