import HomePage from "./HomePage.js";

const requestURL = "https://my-json-server.typicode.com/VladSach/Retromagaz/db";

export async function getData(){

    let response = await fetch(requestURL)

    if (response.ok) {
        let json = await response.json(); 
        return json;
    }

    throw new Error(response.status);
}

let homePage = new HomePage();
(function() {
    homePage.loadPage();
})();