const container = document.getElementById("container");
const text = container.innerText;
container.innerHTML = "";
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.innerText = text[i];
  container.appendChild(span);
}

setInterval(function() {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  for (const span of container.children) {
    span.style.left = Math.random() * containerWidth + "px";
    span.style.top = Math.random() * containerHeight + "px";
  }
}, 50);
