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

        var list_of_tasks = [];
        list_of_tasks = document.getElementsByClassName("item");

        if(list_of_tasks.indexOf(task.value) < 0){
            return;
        }


        var li = document.createElement("li");
        li.setAttribute('class','item');
        li.appendChild(document.createTextNode(task.value));
        ol.appendChild(li);
    }
    function SearchTask(){

    }