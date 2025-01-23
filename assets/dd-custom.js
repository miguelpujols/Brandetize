function updateButtonText() {
    const buttons = document.querySelectorAll('a[data-mobile-text][data-desktop-text]');    
    const isMobile = window.innerWidth < 750;

    console.log(buttons);
    
    buttons.forEach(button => {
    if (isMobile) {
        button.textContent = button.getAttribute('data-mobile-text');
    } else {
        button.textContent = button.getAttribute('data-desktop-text');
    }
    });
}

updateButtonText();

window.addEventListener('resize', updateButtonText);


document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion details");
  
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
        // Close all other accordions
        accordions.forEach((otherAccordion) => {
          if (otherAccordion !== this) {
            otherAccordion.removeAttribute("open");
          }
        });
      });
    });
  });
  