const postContainer = document.querySelector(".postsec");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://www.cdragvik.one/wp-json/wp/v2/posts/" + id; 
const proxy = "https://noroffcors.herokuapp.com/";
const postUrl = proxy + url;

console.log(url);

async function cardDetails() {

    try {
        const response = await fetch(postUrl); 
        const details = await response.json(); 

        console.log(details);
        
        newPageTitle = details.title.rendered;
        document.title = newPageTitle;

        console.log(details.id);

        postContainer.innerHTML = "";

        postContainer.innerHTML += `<div class="details">
                                    <h1>${details.title.rendered}</h1>
                                    <img src="${details.better_featured_image.source_url}" alt="" class="cardimg">
                                    <p>${details.content.rendered}</p>
                                    </div>`;


    } catch(error) {
        postContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }
}

cardDetails();