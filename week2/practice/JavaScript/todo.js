const input = document.querySelector(".todo_input");
const subBtn = document.querySelector(".submit_btn");
const ul = document.querySelector(".todo_list");

// const li = document.createElement("li");
// ul.appendChild(li);

function subMitTodo() {
  const todoTxt = input.value;
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  li.textContent = todoTxt;
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  deleteBtn.addEventListener("click", (e) => {
    ul.removeChild(li);
  });
  //어떻게 특정?
  input.value = "";
}

input.addEventListener("keydown", (e) => {
  console.log(e.target.value);
  if (e.key === "Enter") {
    subMitTodo();
  }
});

subBtn.addEventListener("click", subMitTodo);
