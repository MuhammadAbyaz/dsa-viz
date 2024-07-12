const stack = document.querySelector("#stack");
const pushButton = document.querySelector("#pushButton");
const popButton = document.querySelector("#popButton");
const clearButton = document.querySelector("#clearButton");
const inputField = document.querySelector("input");
const errorMessage = document.querySelector("#errorMessage");
pushButton.addEventListener("click", () => {
  if (inputField.value.length <= 10) {
    push(inputField.value);
    inputField.value = "";
  }
  else {
    inputField.value = "";
  }
})
popButton.addEventListener("click", () => {
  pop();
})

clearButton.addEventListener("click", () => {
  clear();
})

function push(valueToPush) {
  const valueDiv = document.createElement("div");
  const value = document.createElement("h1");
  value.innerText = valueToPush;
  value.classList.add("text-4xl");
  const valueClasses = ["flex", "bg-pink-400", "px-20", "rounded-3xl", "py-4", "max-w-[220px]", "justify-center"];
  valueDiv.classList.add(...valueClasses);
  valueDiv.append(value);
  if (stack.childNodes.length > 1) {
    stack.insertBefore(valueDiv, stack.children[0]);
  }
  else {
    stack.append(valueDiv);
  }
}
function pop() {
  if (stack.children.length >= 1) {
    stack.removeChild(stack.children[0]);
  };
}
function clear() {
  while (stack.children.length > 0) {
    stack.children[0].remove();
  }
}
