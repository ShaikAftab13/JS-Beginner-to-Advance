let btn = document.querySelector("#btn");

btn.addEventListener("click",async function(){
    let fnc = await import('./heavy.js');
    fnc.heavy();
})
