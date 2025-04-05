const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const createSelectOptions = () => {
    const productSelect = document.getElementById("product");

    products.map((product, index) => {
        const option = document.createElement("option");
        option.name = product.name;
        option.value = product.id;
        option.key = index;
        option.textContent = product.name
        productSelect.appendChild(option);
    });
}

const createEventListener = () => {
    const button = document.getElementById("review-form-button");
    button.addEventListener("click", e => {
        e.preventDefault();
        let count = parseInt(localStorage.getItem("count")) || 0;
        count++
        localStorage.setItem("count", count)
        // window.location.href = `review.html`;
    });
}

createSelectOptions();
createEventListener();





