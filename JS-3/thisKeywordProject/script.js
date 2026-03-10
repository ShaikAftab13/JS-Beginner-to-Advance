// let form = document.querySelector("form");
// let name = document.querySelector("#name");
// let role = document.querySelector("#role");
// let bio = document.querySelector("#bio");
// let photo = document.querySelector("#photo");

// const userManager = {
//     users: [],
//     init: function () {
//         form.addEventListener("submit", this.submitForm.bind(this));
//         document.querySelector(".users")
//             .addEventListener("click", this.removeUser.bind(this));
//     },
//     submitForm: function (e) {
//         e.preventDefault();
//         // console.log(this);
//         this.addUser();
//     },
//     addUser: function () {
//         this.users.push({
//             name: name.value,
//             role: role.value,
//             bio: bio.value,
//             photo: photo.value
//         });
//         form.reset();
//         this.renderUI();
//     },
//     renderUI: function () {
//         const container = document.querySelector(".users");
//         container.innerHTML = "";

//         this.users.forEach((user, index) => {

//             const card = document.createElement("div");
//             card.className =
//                 "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

//             const img = document.createElement("img");
//             img.className =
//                 "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
//             img.src = user.photo;
//             card.appendChild(img);

//             const nameEl = document.createElement("h2");
//             nameEl.className = "text-2xl font-bold mb-1 text-blue-700";
//             nameEl.textContent = user.name;
//             card.appendChild(nameEl);

//             const roleEl = document.createElement("p");
//             roleEl.className = "text-purple-500 mb-2 font-medium";
//             roleEl.textContent = user.role;
//             card.appendChild(roleEl);

//             const desc = document.createElement("p");
//             desc.className = "text-gray-700 text-center";
//             desc.textContent = user.bio;
//             card.appendChild(desc);

//             const btn = document.createElement("button");
//             btn.textContent = "Delete";
//             btn.className = "mt-4 bg-red-500 text-white px-4 py-2 rounded";
//             btn.dataset.index = index;
//             card.appendChild(btn);

//             container.appendChild(card);
//         });
//     },
//     removeUser: function (e) {
//         if (e.target.tagName === "BUTTON") {
//             const index = e.target.dataset.index;
//             this.users.splice(index, 1);
//             this.renderUI();
//         }
//     }
// };

// userManager.init();