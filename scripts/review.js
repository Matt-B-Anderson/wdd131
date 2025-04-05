let count = parseInt(localStorage.getItem("count")) || 0;
count++
localStorage.setItem("count", count);

const countDisplay = document.getElementById("count");
countDisplay.textContent = `Total Reviews: ${window.localStorage.getItem("count")}`;