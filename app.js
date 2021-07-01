const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

for (const item of items) {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
}

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  const { children } = event.target.previousElementSibling;
  event.target.classList.remove("hovered");
  event.target.append(children[0]);
}
