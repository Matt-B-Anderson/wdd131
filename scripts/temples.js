document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    const navBar = document.querySelector(".navbar")

    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("show");
    })
})
