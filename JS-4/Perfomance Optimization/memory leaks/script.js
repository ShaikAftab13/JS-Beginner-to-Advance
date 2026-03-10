let count = 0;

const interval = setInterval(()=>{
    if(count < 10) {
        count++;
        console.log(count);
    }else {
        console.log("stopped");
        clearInterval(interval);
    }
},200);