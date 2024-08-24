// Dark mode functionality
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const toggleText = document.querySelector('.dark-mode-toggle');
    if (toggleText) {
        toggleText.textContent = 'Click here to deactivate dark mode';
    }
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

// Voltage, Resistance, Current Calculator
function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const current = parseFloat(document.getElementById('current').value);

    if (!isNaN(voltage) && !isNaN(resistance)) {
        document.getElementById('current').value = (voltage / resistance).toFixed(2);
    } else if (!isNaN(voltage) && !isNaN(current)) {
        document.getElementById('resistance').value = (voltage / current).toFixed(2);
    } else if (!isNaN(resistance) && !isNaN(current)) {
        document.getElementById('voltage').value = (resistance * current).toFixed(2);
    }
}
