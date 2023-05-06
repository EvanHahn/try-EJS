function render() {
  try {
    output.innerHTML = ejs.render(template.value, JSON.parse(data.value) || {});
    output.classList.remove("error");
  } catch (err) {
    output.innerHTML = err.message;
    output.classList.add("error");
  }
}

let lastRequestedRender;
const requestRender = () => {
  if (lastRequestedRender) cancelAnimationFrame(lastRequestedRender);
  lastRequestedRender = requestAnimationFrame(render);
};
template.addEventListener("input", requestRender);
data.addEventListener("input", requestRender);

output.addEventListener("click", () => {
  output.classList.toggle("fixed");
});

render();
