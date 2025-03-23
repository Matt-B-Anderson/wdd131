const windChill = document.querySelector('#windChill');
const tempurature = parseInt(document.querySelector('#temperature').textContent, 10);
const wind = parseInt(document.querySelector('#wind').textContent, 10);

const calculateWindChill = (temperature, wind) => {
    return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * 30 * Math.pow(wind, 0.16))).toFixed(1);
}

if (tempurature <= 50 && wind > 3) {
    windChill.textContent = `${calculateWindChill(tempurature, wind)}°F`;
} else {
    windChill.textContent = "N/A";
}