document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    const navBar = document.querySelector(".navbar")

    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("show");
    })
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho",
        dedicated: "1945, September, 25",
        area: 85624,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-46665.jpg"
    },
    {
        templeName: "Halifax Nova Scotia",
        location: "Halifax, Nova Scotia",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-13339.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles California",
        dedicated: "1956, March, 14",
        area: 190614,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-48094.jpg"
    }
];


function createTempleCards(temples) {
    const container = document.getElementById('temple-container');
    container.innerHTML = "";

    const cards = temples.map((temple, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h2");
        title.textContent = temple.templeName;
        content.appendChild(title);

        const location = document.createElement("p");
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        content.appendChild(location);

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span>Dedication:</span> ${temple.dedication}`;
        content.appendChild(dedication);

        const area = document.createElement("p");
        area.innerHTML = `<span>Area:</span> ${temple.area} sq ft`;
        content.appendChild(area);

        card.appendChild(content);

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.name} Temple`
        img.loading = "lazy";
        card.appendChild(img);

        return card;
    }); 

    container.append(...cards);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const filterType = e.target.getAttribute("data-filter");
        const filterValue = e.target.getAttribute("data-value");

        let filteredTemples;

        switch (filterType) {
            case "home":
                filteredTemples = temples;
                break;
            case "old":
                filteredTemples = temples.filter(temple => Number(temple.dedicated.substring(0, 4)) <= filterValue);
                break;
            case "new":
                filteredTemples = temples.filter(temple => Number(temple.dedicated.substring(0, 4)) >= filterValue);
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area >= filterValue);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area <= filterValue);
                break;
            default:
                filteredTemples = temples;
                break;
        }
        createTempleCards(filteredTemples);
    })
})

createTempleCards(temples);