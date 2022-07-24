const button = document.getElementById("button");
const displayItems = document.getElementById("display-items");

button.onclick = function () {
  displayItems.textContent = displayItems.textContent + "🍨";
};
