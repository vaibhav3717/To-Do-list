var addTaskBtn = document.getElementById("addTaskBtn");
var taskInput = document.getElementById("taskInputContainer");
var closeTaskInput = document.getElementById("closeTaskInput");

var addItemBtn = document.getElementById("addItemBtn");
var itemInput = document.getElementById("itemInputContainer");
var closeItemInput = document.getElementById("closeItemInput");

var div3con = document.getElementById("div3con");

var noTasks = document.getElementById("noTasks");

var current_card = "";

document.getElementById("addTask").addEventListener("click", openAddTask);
addTaskBtn.addEventListener("click", function () {
  addTask(getTask());
  closeAddTask();
  task.value = "";
});
closeTaskInput.addEventListener("click", closeAddTask);

addItemBtn.addEventListener("click", () => addItem());
closeItemInput.addEventListener("click", closeAddItem);

function openAddTask() {
  taskInput.style.visibility = "visible";
}
function closeAddTask() {
  taskInput.style.visibility = "hidden";
}
function getTask() {
  var task = document.getElementById("task");
  var res = task.value;
  task.value = "";
  return res;
}
function addTask(title) {
  var card = document.createElement("div");
  card.className = "card";
  var cardContent = `
            <div class="cardHeading blue">
                <p>${title}</p>
            </div>
            <div class="itemContainer">
            </div>
        `;
  card.innerHTML = cardContent;
  div3con.appendChild(card);

  var card = document.querySelectorAll(".cardHeading");
  card = card[card.length - 1];
  card.addEventListener("click", () => openAddItem(card));
  noTasks.style.display = "none";
}
function openAddItem(card) {
  itemInput.style.visibility = "visible";
  current_card = card;
}
function closeAddItem() {
  itemInput.style.visibility = "hidden";
}
function getItem() {
  var item = document.getElementById("item");
  var res = item.value;
  item.value = "";
  return res;
}
function addItem() {
  var card = current_card;
  var currentTask = card.parentElement;
  var itemContainer = currentTask.getElementsByClassName("itemContainer")[0];

  var item = document.createElement("div");
  item.className = "item";
  var itemContent = `
                    <input type="checkbox" id="">
                    <span>${getItem()} &nbsp;</span>
                `;
  item.innerHTML = itemContent;
  itemContainer.appendChild(item);

  item.querySelector("input").addEventListener("click", () => removeItem(item));

  closeAddItem();
}
function removeItem(item) {
  item.querySelector("input").disabled = true;
  item.querySelector("span").classList.add("strike");
}
