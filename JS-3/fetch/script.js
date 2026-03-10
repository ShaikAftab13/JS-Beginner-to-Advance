function getUsers() {
    fetch("https://randomuser.me/api/?results=3")
    .then(rawData => rawData.json())
    .then(data => {
        document.querySelector(".users").innerHTML = "";
        data.results.forEach(function (user) {
            // Main card container
            const card = document.createElement("div");
            card.className = "bg-white rounded-lg shadow-lg p-6 max-w-sm w-full";

            // Top section
            const topSection = document.createElement("div");
            topSection.className = "flex items-center space-x-4";

            // Image
            const img = document.createElement("img");
            img.src = user.picture.large;
            img.alt = "User Avatar";
            img.className = "w-16 h-16 rounded-full object-cover";

            // Text container
            const textDiv = document.createElement("div");

            // Name
            const name = document.createElement("h2");
            name.className = "text-lg font-semibold text-gray-800";
            name.textContent = user.name.first+" "+user.name.last;

            // Role
            const role = document.createElement("p");
            role.className = "text-gray-500";
            role.textContent = "Software Engineer";

            // Location
            const location = document.createElement("p");
            location.className = "text-sm text-gray-400";
            location.textContent = user.location.city;

            // Append text elements
            textDiv.appendChild(name);
            textDiv.appendChild(role);
            textDiv.appendChild(location);

            // Append image and text to top section
            topSection.appendChild(img);
            topSection.appendChild(textDiv);

            // Button section
            const buttonSection = document.createElement("div");
            buttonSection.className = "mt-4 flex space-x-3";

            // Follow button
            const followBtn = document.createElement("button");
            followBtn.className = "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600";
            followBtn.textContent = "Follow";

            // Message button
            const messageBtn = document.createElement("button");
            messageBtn.className = "px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300";
            messageBtn.textContent = "Message";

            // Append buttons
            buttonSection.appendChild(followBtn);
            buttonSection.appendChild(messageBtn);

            // Append all to card
            card.appendChild(topSection);
            card.appendChild(buttonSection);

            // Finally append card to body
            document.querySelector(".users").appendChild(card);
        });
    })
}

getUsers();

document.querySelector("#refreshBtn").addEventListener("click",function(){
    getUsers();
})