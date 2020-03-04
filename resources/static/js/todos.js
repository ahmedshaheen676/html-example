function Todo(todoName, todoColor, date) {
    this.todoName = todoName;
    this.todoColor = todoColor;
    this.date = date;
}

function add() { // Scoping function to avoid creating globals
    // Loading
    var todos = JSON.parse(localStorage.getItem("todos") || "[]");

    var todoName = document.getElementById("todo").value;
    var todoColor = document.getElementById("todoColor").value;
    var date = Date.now();

    var todoJson = new Todo(todoName, todoColor, date);
    todos.push(todoJson);

    localStorage.setItem("todos", JSON.stringify(todos));
    getAll();
}

function getAll() {
    var store = localStorage.getItem("todos");
    let storeArr = JSON.parse(store);
    var ul = document.getElementById("todos");
    if (ul) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }

    if (storeArr.length > 0) {
        storeArr.forEach((todo) => {
            console.log(todo);
            var id = todos.length + 1;
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(todo.todoName + " " + todo.date));
            li.setAttribute("id", id);
            li.setAttribute("draggable", true); // added line
            li.setAttribute("ondragstart", "drag(event)"); // added line
            li.setAttribute("style", "padding: 20px; margin: 5px; border-radius: 15px; background:" + todo.todoColor + ";"); // added line
            // li.setAttribute("id", "element4"); // added line
            ul.appendChild(li);
        });
    }

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ele = document.getElementById(data);
    ev.target.appendChild(ele);

    var img = document.getElementById("div1");
    img.setAttribute("src", "../../static/images/garbage_full.png")
    deleteTodo(ele.getAttribute("id"))

}

function deleteTodo(id) {
    var store = localStorage.getItem("todos");
    let storeArr = JSON.parse(store);
    console.log(id);
    storeArr.splice(id - 1, 1);
    localStorage.setItem("todos", JSON.stringify(storeArr));
    getAll();
}

