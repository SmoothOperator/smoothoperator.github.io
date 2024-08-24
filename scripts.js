// Dark mode toggle function
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

// Check if dark mode is already enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle').textContent = 'Click here to deactivate dark mode';
}

// Function to calculate Ohm's Law
function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const current = parseFloat(document.getElementById('current').value);
    let result;

    if (!isNaN(voltage) && !isNaN(resistance)) {
        result = `Current (I) = ${(voltage / resistance).toFixed(2)} A`;
    } else if (!isNaN(voltage) && !isNaN(current)) {
        result = `Resistance (R) = ${(voltage / current).toFixed(2)} Ω`;
    } else if (!isNaN(resistance) && !isNaN(current)) {
        result = `Voltage (V) = ${(resistance * current).toFixed(2)} V`;
    } else {
        result = 'Please enter two values to calculate the third.';
    }

    document.getElementById('ohms-law-result').textContent = result;
}
