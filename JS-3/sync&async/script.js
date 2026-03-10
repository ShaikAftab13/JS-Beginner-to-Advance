// // // // function kuchDerBaadChalunga(fn) {
// // // //     setTimeout(()=>{
// // // //         fn()
// // // //     },Math.floor(Math.random()  * 10) * 1000);
// // // // }

// // // // kuchDerBaadChalunga(function() {
// // // //     console.log("hi");
// // // // });

// // // function profileLekarAvo(username,cb) {
// // //     setTimeout(()=>{
// // //         console.log("Fetching profile data...")
// // //         // console.log(`Profile fetched of ${username}`);
// // //         cb({_id:178,username,email:"dummy@dummy.com"});
// // //     },2000)
// // // }

// // // function sarePostLekarAao(id,cb) {
// // //     console.log("Fetching all posts...");
// // //     setTimeout(()=>{
// // //         cb({_id:id,posts:["hi","how","who"]});
// // //     },3000)
// // // }

// // // function savedPost(id,cb) {
// // //     console.log("Fetching saved posts...");
// // //     setTimeout(()=>{
// // //         cb({_id:id,saved:["hi","how"]});
// // //     },4000)
// // // }

// // // profileLekarAvo("Aftab",function(data){
// // //     console.log(data);
// // //     sarePostLekarAao(data._id,function(posts){
// // //         console.log(posts);
// // //         savedPost(data._id,function(saved){
// // //             console.log(saved);
// // //         })
// // //     })
// // // })

// // let pr = new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         let rn = Math.floor(Math.random() * 10);
// //         if (rn > 5) resolve("resolved with " + rn);
// //         else reject("rejected with " + rn);
// //     }, 3000);
// // });

// // // pr
// // // .then(function(val){
// // //     console.log(val);
// // // })
// // // .catch(function(val){
// // //     console.log(val);
// // // })

// // // function profileLekarAvo(username) {
// // //     return new Promise(function(resolve, reject) {
// // //         setTimeout(function() {
// // //             resolve({_id:178, username, email:"dummy@dummy.com"});
// // //         }, 2000);
// // //     });
// // // }

// // // profileLekarAvo("Aftab")
// // //     .then(function(data) {
// // //         console.log(data);
// // //     });

// // async function demo() {
// //     try {
// //         let val = await pr;
// //         console.log(val)
// //     }
// //     catch (err) {
// //         console.log(err);
// //     }
// // }

// // demo();


// // function profile(name,cb) {
// //     console.log("Fetching data....");
// //     setTimeout(()=>{
// //         cb({rollNO: 178,name,section:"beta",email:"dumb@dumb.com"});
// //     },1000);
// // }

// // function posts(id,cb) {
// //     console.log("Fetching posts....");
// //     setTimeout(()=>{
// //         cb({rollNO:id,post:["ML","DW_DM","OO_SE"]});
// //     },2000)
// // }

// // function savedPosts(id,cb) {
// //     console.log("Fetching saved posts....");
// //     setTimeout(()=>{
// //         cb({rollNO:id,saved:["ML"]});
// //     },3000)
// // }

// // profile("Aftab",function(data){
// //     console.log(data);
// //     posts(data.rollNO,function(post){
// //         console.log(post);
// //         savedPosts(data.rollNO,function(saved){
// //             console.log(saved);
// //         })
// //     })
// // })

// function profile(name) {
//     return new Promise(function (res, rej) {
//         console.log("Fetching data....");
//         setTimeout(() => {
//             res({ rollNO: 178, name, section: "beta", email: "dumb@dumb.com" });
//         }, 1000);
//     })
// }

// function posts(id) {
//     return new Promise(function (res, rej) {
//         console.log("Fetching posts....");
//         setTimeout(() => {
//             res({ rollNO: id, posts: ["ML", "DW_DM", "OO_SE"] });
//         }, 2000);
//     })
// }

// function savedPosts(id) {
//     console.log("Fetching saved posts....");
//     return new Promise(function (res, rej) {
//         setTimeout(() => {
//             res({ rollNo: id, saved: ["ML"] });
//         }, 3000);
//     })
// }

// // profile("Aftab")
// // .then(function(data){
// //     console.log(data);
// //     return posts(data.rollNO);
// // })
// // .then(function(post){
// //     console.log(post);
// //     return savedPosts(post.rollNO);
// // })
// // .then(function(saved){
// //     console.log(saved);
// // })
// // .catch(function(err){
// //     console.log(err);
// // })

// async function execute() {
//     try {
//         let data = await profile("Aftab");
//         console.log(data);
//         let post = await posts(data.rollNO);
//         console.log(post);
//         let saved = await savedPosts(post.rollNO);
//         console.log(saved);
//     }catch(err) {
//         console.log(err);
//     }
// }

// execute();

// function idCard(name,cb) {
//     console.log("Fetching student details....");
//     cb({id: 178,name,section:"beta",gender:"Male"});
// }

// function subjects(id,cb) {
//     console.log("Fetching subjects of student:");
//     cb({id: id,sub: ["ML","AT_CD","DW_DM","OO_SE","FAM","CS","CN","Linux","QC"]});
// }

// function selectedSub(id,cb) {
//     console.log("Fetching student selected subjects:");
//     cb({id: id,selected: ["ML","AT_CD","DW_DM","OO_SE","FAM","CS","CN"]});
// }

// idCard("Aftab",function(details) {
//     console.log(details);
//     subjects(details.id,function(sub){
//         console.log(sub);
//         selectedSub(sub.id,function(selected){
//             console.log(selected);
//         });
//     });
// });

function idCard(name) {
    console.log("Fetching student details....");
    return new Promise(function (res, rej) {
        res({ id: 178, name, section: "beta", gender: "Male" });
    })
};

function subjects(id) {
    console.log("Fetching student subjects....");
    return new Promise(function (res, rej) {
        res({ id: id, sub: ["ML", "AT_CD", "DW_DM", "OO_SE", "FAM", "CS", "CN", "Linux", "QC"] });
    })
};

function selectedSub(id) {
    console.log("Fetching selected subjects");
    return new Promise(function (res, rej) {
        res({ id: id, selected: ["ML", "AT_CD", "DW_DM", "OO_SE", "FAM", "CS", "CN"] });
    })
};

// idCard("Aftab")
// .then(function(details){
//     console.log(details);
//     return subjects(details.id);
// })
// .then(function(sub){
//     console.log(sub);
//     return selectedSub(sub.id);
// })
// .then(function(selected){
//     console.log(selected);
// })
// .catch(function(err){
//     console.log(err);
// })

async function run() {
    try {
        let details = await idCard("Aftab");
        console.log(details);
        let sub = await subjects(details.id);
        console.log(sub);
        let selected = await selectedSub(sub.id);
        console.log(selected);
    }catch(err) {
        console.log(err);
    }
}

run();