const inputs = document.querySelectorAll(".form-input");
const button = document.querySelector(".form-btn");

button.addEventListener("click", e => {
	e.preventDefault();
})

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.classList.add("focus");
  })

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.classList.remove("focus");
    }
  })
})