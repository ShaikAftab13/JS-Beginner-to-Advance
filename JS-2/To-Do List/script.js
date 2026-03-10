let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector("#task-list");
let addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
        alert("Please enter 'Task'");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div class="actions">
            <button class="complete">✔</button>
            <button class="edit">✏</button>
            <button class="delete">✖</button>
        </div>
    `;

    taskList.append(li);
    taskInput.value = "";
    saveData();
})

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete")) {
        e.target.closest("li").classList.toggle("completed");
        saveData();
    }

    if(e.target.classList.contains("edit")) {
        let li = e.target.closest("li");
        let span = li.querySelector("span");
        let renameLi = prompt("Edit your task:",span.textContent);
        if(renameLi.trim()!=="" && renameLi!==null) {
            span.textContent = renameLi;
            saveData();
        }
    }

    if (e.target.classList.contains("delete")) {
        e.target.closest("li").remove();
        saveData();
    }
});

let saveData = () => {
    localStorage.setItem("data", taskList.innerHTML);
};

let getData = () => {
    taskList.innerHTML = localStorage.getItem("data");
}

getData();