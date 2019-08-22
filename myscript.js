var list_of_tasks = [];
list_of_tasks = document.getElementsByClassName("item");

for(var i=0;i<list_of_tasks.length;i++)
{    
    var edit = document.createElement("button");
    edit.appendChild(document.createTextNode("edit"));
    list_of_tasks[i].appendChild(edit);

    var remove = document.createElement("button");
    remove.appendChild(document.createTextNode("remove"));
    list_of_tasks[i].appendChild(remove);
}

function GetContent(content) {
    var i = 0;
    var x = document.getElementsByClassName("content_type");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(content).style.display = "block";  
}

function SubmitData(){
    var user = document.getElementById("username");
    var password = document.getElementById("password");

    if(user.value == "admin" && password.value == "admin"){
        window.alert("Login Successful");
    }
}
function AddTask(){
    var ol = document.getElementById("todo_list");
    var task = document.getElementById("task");

    if(task.value == null || task.value == ""){
        return;
    }
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task.value));
    var edit = document.createElement("input");
    edit.type = "button"
    edit.value = "edit";
    edit.onclick = "EditItem()";
    edit.className = "edit";
    li.appendChild(edit);
    var remove = document.createElement("input");
    remove.type = "button";
    remove.value = "remove";
    remove.addEventListener("click",RemoveItem);
    remove.className = "remove";
    li.appendChild(remove);
    li.className = "item";
    ol.appendChild(li);
    task.value="";
}
function SearchTask(){
    var ol = document.getElementById("todo_list");
    var list = document.getElementsByClassName("item");
    var input = document.getElementById("task");

    for(var i=0;i<list.length;i++){
        if(list[i].innerText == input.value)
        {
            window.alert("Value present");
        }
    }
}

function RemoveItem(event){
    var ol = document.getElementById("todo_list");
    //var li = document.getElementsByClassName("item").onclick = function() {
        var li = target
        ol.removeChild();
    //};    
}

function EditItem(){
    var li = document.getElementsByClassName("item").onclick = function() {
        li.value = window.prompt("Enter value");
    };
}