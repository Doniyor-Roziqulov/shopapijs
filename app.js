const API_URL = "https://dummyjson.com";

const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const header = document.querySelector("header");
const jsLink = document.querySelector(".js-link");
const jsLink1 = document.querySelector(".js-link1");
const jsLink2 = document.querySelector(".js-link2");
const jsLink3 = document.querySelector(".js-link3");
const title = document.querySelector(".title");
const loading = document.querySelector(".loading");

async function fetchPosts(api) {
    let reponse = await fetch(`${api}/products`);

    reponse
        .json()
        .then((res) => createCard(res))
        .catch((err) => console.log(err))
        .finally(() => {
            loading.style.display = "none";
        });
}

fetchPosts(API_URL);

function createCard(data) {
    let obj = data.products;
    obj.forEach((post) => {
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = "#";
        card.style.width = "320px";
        card.style.borderRadius = "15px";
        card.style.boxShadow = "0 0 10px #0004";
        card.style.padding = "20px";
        card.innerHTML = `
        <img src="${post.thumbnail}" alt="">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        `;
        wrapper.appendChild(card);
    });
}

const card = document.querySelector(".card");

const jsBtn = document.querySelector(".js-btn");

jsBtn.addEventListener("click", darkMode);

function darkMode() {
    if (jsBtn.classList == "js-btn") {
        jsBtn.classList.add("show");
        body.style.backgroundColor = "#000";
        header.style.backgroundColor = "#292626";
        jsLink.style.color = "#fff";
        jsLink1.style.color = "#fff";
        jsLink2.style.color = "#fff";
        jsLink3.style.color = "#fff";
        title.style.color = "#fff";
    } else {
        jsBtn.classList.remove("show");
        body.style.backgroundColor = "#fff";
        jsLink.style.color = "#000";
        jsLink1.style.color = "#000";
        jsLink2.style.color = "#000";
        jsLink3.style.color = "#000";
        title.style.color = "#000";
        header.style.backgroundColor = "#cbd5e1";
    }
}
