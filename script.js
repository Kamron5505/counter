let count = 19;
const countElement = document.getElementById("countDisplay");
const colorPicker = document.getElementById("colorInput");

function updateCount() {
  countElement.textContent = count;
}

function increase() {
  count++;
  updateCount();
}

function decrease() {
  count--;
  updateCount();
}

function setCounter() {
  const input = document.getElementById("numberInput").value;
  const number = parseInt(input);
  if (!isNaN(number)) {
    count = number;
    updateCount();
  }
}

colorPicker.addEventListener("input", function () {
  countElement.style.color = this.value;
});
