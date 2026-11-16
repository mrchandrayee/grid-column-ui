const presetButtons = [...document.querySelectorAll(".preset")];
const preview = document.querySelector(".grid-preview");
const codeOutput = document.getElementById("codeOutput");

function setColumns(columns, selectedButton) {
  preview.style.gridTemplateColumns = columns;
  codeOutput.textContent = `grid-template-columns: ${columns};`;

  presetButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setColumns(button.dataset.columns, button);
  });
});

presetButtons.forEach((button, index) => {
  button.setAttribute("aria-pressed", String(index === 0));
});
