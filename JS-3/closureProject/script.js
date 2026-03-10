// function createToaster (config) {
//     return function(notification){
//         let toast = document.createElement("div");
//         toast.className =
//                 `fixed px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right"?"right-10":"left-10"} ${config.positionY === "top"?"top-10":"bottom-10"} ${config.theme === "dark"? "bg-gray-800 text-white" : "bg-gray-100 text-red-400"}`;
//         toast.textContent = notification;
//         document.body.append(toast);

//         setTimeout(()=>{
//             // document.body.removeChild(toast);
//             toast.remove();
//         },config.duration * 1000);
//     };
// }

// let toaster = createToaster({
//     positionX: "right",
//     positionY: "top",
//     theme: "dark",
//     duration: 3
// });

// toaster("This is a dummy notification");

// let toaster2 = createToaster({
//     positionX: "left",
//     positionY: "bottom",
//     theme: "white",
//     duration: 5
// });

// toaster2("testing again");

// function createToaster(config) {
//     return function (notification) {
//         let parent = document.querySelector(".parent");
//         let toast = document.createElement("div");
//         toast.textContent = notification;
//         toast.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded-2xl shadow-lg pointer-events-none`;
//         parent.append(toast);

//         if (config.positionX !== "left" || config.positionY !== "top") {
//             parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"}
//                 ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
//         }

//         setTimeout(() => {
//             parent.removeChild(toast);
//         }, config.duration * 1000);
//     }
// }

// let toaster = createToaster({
//     positionX: "left",
//     positionY: "bottom",
//     theme: "dark",
//     duration: 3
// });

// toaster("HLO Tokaape");

// setTimeout(() => {
//     toaster("Admin accepted your request");
// }, 2500)


let crateToaster = function (config) {
    return function (notification) {
        let parent = document.querySelector(".parent");
        let toast = document.createElement("div");
        toast.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded-2xl shadow-lg pointer-events-none`;
        toast.textContent = notification;
        parent.append(toast);

        if (config.positionX !== "left" || config.positionY !== "top") {
            parent.className += `
                    ${config.positionX === "right" ? "right-5" : "left-5"}
                    ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }

        setTimeout(() => {
            toast.remove();
        }, config.duration * 1000);
    }
}

let toaster = crateToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3
});

toaster("HI BRO JUST CHECKING HERE");

setTimeout(() => {
    toaster("Admin accepted");
}, 2500);