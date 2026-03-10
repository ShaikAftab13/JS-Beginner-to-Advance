let display = document.querySelector(".display");

let add = (data) => {
    display.value += data;
};

let calculate = () => {
    let input = display.value;
    let output = eval(input);
    display.value = output;
};

let clearDisplay = () => {
    display.value = "";
};

let deleteLast = () => {
    display.value = display.value.slice(0, -1);
};
