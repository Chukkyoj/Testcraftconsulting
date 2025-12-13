document.querySelectorAll(".dropdown").forEach(dropdown => {
  dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const content = this.querySelector(".dropdown-content");
    if (content) content.classList.toggle("show");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-content").forEach(c => c.classList.remove("show"));
});