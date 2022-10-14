const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))


/* CARDS */ 

const cardsContainer = document.querySelector(".cardsec"); 

async function getCards() {
    const url = `https://www.cdragvik.one/wp-json/wp/v2/posts`; 
    try {
        const response = await fetch(url);
        const getCards = await response.json();
        console.log(getCards);

        for (let i = 0; i < getCards.length; i++) {
            function createHTML(getCards){
                cardsContainer.innerHTML += `<a href="post.html?id=${getCards[i].id}" class="cardbox">
                <div class="box">
                <img src="${getCards[i].better_featured_image.source_url}" alt="" class="cardimg">
                <h2>${getCards[i].title.rendered}</h2>
                <p>${getCards[i].excerpt.rendered}</p>
                </div></a>`
            }
            createHTML(getCards); 
        }
    } catch(error) {
        console.log(error);
        cardsContainer.innerHTML += `<div class="error">Ups! An error has occured. Please try again later.</div>`;
    }
}

getCards();
