document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".agenda-tab");
    const tabContents = document.querySelectorAll(".day-content");
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
  
        // Remove active class from all buttons and contents
        tabButtons.forEach((button) => button.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
  
        // Add active class to the clicked button and corresponding content
        btn.classList.add("active");
        document.getElementById(target).classList.add("active");
      });
    });
  });
  