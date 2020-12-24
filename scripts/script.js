import HomePage from "./HomePage.js";
import ProductPage from "./ProductPage.js";

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
let productPage = new ProductPage();
(function() {
    //homePage.loadHomePage();
    //productPage.loadProductPage();
})();