// creating own map function

const arr = [1, 2, 3, 4, 5];

function ownMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

let demo = ownMap(arr, num => num * num);
console.log(demo);

function ownFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) newArr.push(arr[i]);
    }
    return newArr;
}

let demo2 = ownFilter(arr, num => num % 2 == 0);
console.log(demo2);

function ownReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator,arr[i],i,arr);
    }
    return accumulator;
}

let demo3 = ownReduce(arr,(acc,num)=>acc+num,0);
console.log(demo3);