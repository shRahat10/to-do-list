const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("you must write something before add")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = `<li class="text-base py-3 pr-2 pl-11 cursor-pointer relative before:content-'' before:absolute before:h-7 before:w-7 before:rounded-full before:bg-cover before:bg-center before:top-3  before:left-2 before:checked">${inputBox.value} <span class="flex justify-center items-center absolute right-0 top-1 w-10 h-10 text-xl text-black-500 text-center rounded-full hover:bg-red-500 hover:text-white">\u00d7</span></li>`;
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();