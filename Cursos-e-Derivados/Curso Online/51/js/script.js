//função de adicionar tarefa
function addTask() {

    const taskTitle = document.querySelector("#task-title").value
    if(taskTitle){

        //clonar template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adicionar titulo

        newTask.querySelector(".task-title").textContent = taskTitle;


        //renover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });


        //adicionar Tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });
        //limpar o texto
        document.querySelector("#task-title").value = "";
    }

};

//função de remover tarefa

function removeTask(task){
    task.parentNode.remove(true)
}

function completeTask(task){

    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
    
};


// evento de adicionar tarefa
var addbtn = document.querySelector("#add-btn");
addbtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();
})