let newTask = document.querySelector("#newtask input");
let tasks = document.querySelector("#tasks");
let push = document.querySelector("#push");
push.onclick = function () {
  if (newTask.value.length == 0) {
    alert("Iltmos topshiriq kiriting !");
  } else {
    tasks.innerHTML += `
    <div class="task">
              <span id="taskname">
                  ${newTask.value}
                  </span>
                  <button class="delete">
                  <i class="far fa-trash-alt"></i>
                  </button>
                  </div>
                  `;
    newTask.value = "";
    let deleteTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteTasks.length; i++) {
      deleteTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
