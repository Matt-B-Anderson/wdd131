const copywrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
copywrightYearElement.textContent = currentYear;

const lastModified = `Last Modification: ${document.lastModified}`;
lastModifiedElement.textContent = lastModified;

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');
        localStorage.setItem('lastVisited', href);
    });
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const dataObject = {};

        formData.forEach((value, key) => {
            if (dataObject[key]) {
                if (Array.isArray(dataObject[key])) {
                    dataObject[key].push(value);
                } else {
                    dataObject[key] = [dataObject[key], value];
                }
            } else {
                dataObject[key] = value;
            }
        });

        const timestamp = new Date().toISOString();
        const keyName = `formSubmission_${timestamp}`;
        localStorage.setItem(keyName, JSON.stringify(dataObject));

        const verify = localStorage.getItem(keyName);
        if (verify) {
            form.reset();
            console.log("Form data saved and form cleared.");
        } else {
            console.warn("Form data could not be saved.");
        }
    });
});