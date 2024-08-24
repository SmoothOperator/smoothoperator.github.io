function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const current = parseFloat(document.getElementById('current').value);
    const power = parseFloat(document.getElementById('power').value);

    if (!isNaN(voltage) && !isNaN(resistance)) {
        document.getElementById('current').value = (voltage / resistance).toFixed(2);
        document.getElementById('power').value = ((voltage * voltage) / resistance).toFixed(2);
    } else if (!isNaN(voltage) && !isNaN(current)) {
        document.getElementById('resistance').value = (voltage / current).toFixed(2);
        document.getElementById('power').value = (voltage * current).toFixed(2);
    } else if (!isNaN(resistance) && !isNaN(current)) {
        document.getElementById('voltage').value = (resistance * current).toFixed(2);
        document.getElementById('power').value = ((current * current) * resistance).toFixed(2);
    } else if (!isNaN(voltage) && !isNaN(power)) {
        document.getElementById('current').value = (power / voltage).toFixed(2);
        document.getElementById('resistance').value = ((voltage * voltage) / power).toFixed(2);
    } else if (!isNaN(resistance) && !isNaN(power)) {
        document.getElementById('voltage').value = Math.sqrt(power * resistance).toFixed(2);
        document.getElementById('current').value = Math.sqrt(power / resistance).toFixed(2);
    } else if (!isNaN(current) && !isNaN(power)) {
        document.getElementById('voltage').value = (power / current).toFixed(2);
        document.getElementById('resistance').value = (power / (current * current)).toFixed(2);
    }
}

function resetOhmsLaw() {
    document.getElementById('voltage').value = '';
    document.getElementById('resistance').value = '';
    document.getElementById('current').value = '';
    document.getElementById('power').value = '';
}
