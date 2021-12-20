var addBtn = document.querySelector(".btn-add");
var listNode = document.querySelector(".list");
var todoList = [];
var resetTodo = () => {
    var getAllTodo = document.querySelectorAll(".list li");
    getAllTodo.forEach((val) => {
        val.remove();
    })
}
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var inputValue = document.querySelector(".input-todo").value;
    if (!inputValue) {
        alert('please type something');
        return;
    }
    var isExist = todoList.findIndex(
        (val) => val.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist !== -1) {
        alert("Existed");
        return;
    }

    todoList.push(inputValue);
    document.querySelector(".input-todo").value = "";
    resetTodo();


    todoList.forEach((val, idx) => {
        var todo = document.createElement("li")
        todo.textContent = `${idx + 1}.${val}`;
        listNode.appendChild(todo);
    })
})