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