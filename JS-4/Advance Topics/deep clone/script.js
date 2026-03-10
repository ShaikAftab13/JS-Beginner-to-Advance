// REFERENCE ASSIGNMENT

// let obj = {
//     name: "Aftab",
//     age: 19
// };

// console.log(obj);
// let obj2 = obj;
// obj2.name = "Shaik";
// console.log(obj);
// console.log(obj2);

// Shallow copy
// =================
// let obj = {
//     name: "Aftab",
//     age: 12,
//     location: {
//         state: "AP",
//         district: {
//             town: "Nellore",
//             street: "Mulapet"
//         }
//     }
// };

// let obj2 = {...obj};
// obj2.name = "Shaik";
// obj2.location.district.street = "Raja gari street";
// console.log("Obj : ",obj);
// console.log("Obj2 : ",obj2);


// DEEP COPY
// ================
// let obj = {
//     name: "Aftab",
//     age: 12,
//     location: {
//         state: "AP",
//         district: {
//             town: "Nellore",
//             street: "Mulapet"
//         }
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.location.district.street = "Raja gari street";
// console.log("Obj : ",obj);
// console.log("Obj2 : ",obj2);

// USING RECURSION
// ======================

// function deepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     let copiedVal = Array.isArray(obj) ? [] : {};
//     let keys = Object.keys(obj);

//     for (let i = 0; i < keys.length; i++) {
//         copiedVal[keys[i]] = deepCopy(obj[keys[i]]);
//     }

//     return copiedVal;

// }

// console.log(deepCopy({ name: "Aftab",location: {state:"AP",district:"nellore"} }));

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    let copiedVal = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = deepCopy(obj[keys[i]]);
    }

    return copiedVal;
}

let obj = {
    name: "Aftab",
    age: 12,
    location: {
        state: "AP",
        district: {
            town: "Nellore",
            street: "Mulapet"
        }
    }
};

let obj2 = deepCopy(obj);
obj2.location.district.street = "Raja Gari Street";
console.log(obj);
console.log(obj2);