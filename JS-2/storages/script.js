// localStorage -> storing data on browser which is reliable even when browser is turned off
// sessionStorage -> storing data temporarily,which means if we close tab then data will lose
// cookies -> this is also used to store data and saved in browser in the cookies property
// (generally for less data)

//localStorage - store,fetch,remove,update

// localStorage.setItem("name","Aftab");
// let a = localStorage.getItem("name");
// console.log(a);
// localStorage.setItem("name","Shaik");
// a = localStorage.getItem("name");
// console.log(a);

// localStorage.removeItem("name");

// sessionStorage.setItem("name","Aftab");
// let a = sessionStorage.getItem("name");
// console.log(a);

// localStorage.setItem("friend",["Nibba","Noobda","Nobnibba"]);

// localStorage.setItem("friends",JSON.stringify(["Aftab","Shaik","Kese hoo"]));
// let a = JSON.parse(localStorage.getItem("friends"));
// console.log(a);