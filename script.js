document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addButton").addEventListener("click", function () {
    const newTask = document.getElementById("taskInput").value.trim();
    if (newTask !== "") {
      document.getElementById("message").textContent = "";
      const newTaskLi = document.createElement("li");
      newTaskLi.textContent = newTask;
      document.getElementById("taskList").appendChild(newTaskLi);
      document.getElementById("taskInput").value = "";
    } else {
      document.getElementById("message").textContent =
        "Please fill out the field";
    }
  });

  document.getElementById("taskList").addEventListener("click", function (e) {
    const taskItem = e.target;
    this.removeChild(taskItem);
  });

  document.getElementById("printButton").addEventListener("click", function () {
    const printContent = document.getElementById("printArea").innerHTML;
    const printContentWithHeader = "<h2>MY TASK LIST</h2>" + printContent;
    document.body.innerHTML = printContentWithHeader;
    window.print();
    window.location.reload();
  });
});
