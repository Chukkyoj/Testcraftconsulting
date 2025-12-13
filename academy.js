document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector("a");
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  // Handle click on the dropdown trigger (the main link)
  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Close all other dropdowns first
    document.querySelectorAll(".dropdown-content").forEach((c) => {
      if (c !== dropdownContent) {
        c.classList.remove("show");
      }
    });

    // Toggle the current dropdown
    if (dropdownContent) dropdownContent.classList.toggle("show");
  });

  // Allow clicks inside dropdown-content to work normally (for navigation)
  if (dropdownContent) {
    dropdownContent.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent closing when clicking inside
      // Allow default link behavior to work
    });
  }
});

document.addEventListener("click", function (event) {
  // Check if the click is outside any dropdown
  if (!event.target.closest(".dropdown")) {
    document
      .querySelectorAll(".dropdown-content")
      .forEach((c) => c.classList.remove("show"));
  }
});