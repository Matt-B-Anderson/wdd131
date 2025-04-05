const countDisplay = document.getElementById("count");
countDisplay.textContent = `Total Reviews: ${window.localStorage.getItem("count")}`;