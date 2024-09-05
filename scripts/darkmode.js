// Check if dark mode is already enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle').textContent = 'Click here to deactivate dark mode';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleText = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleText.textContent = 'Click here to deactivate dark mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleText.textContent = 'Click here to activate dark mode';
    }
}

