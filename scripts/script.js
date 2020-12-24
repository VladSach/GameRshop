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
};

export function showPacMan(){
    return `
    <div class="pacman-loader" role="status">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g>
                        <circle cx="63.2327" cy="50" r="4" fill="#fff">
                            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate>
                            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate>
                        </circle>
                        <circle cx="83.6327" cy="50" r="4" fill="#fff">
                            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate>
                            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate>
                        </circle>
                        <circle cx="43.4327" cy="50" r="4" fill="#fff">
                            <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate>
                            <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
                        </circle>
                    </g><g transform="translate(-15 0)">
                    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fff" transform="rotate(90 50 50)"></path>
                    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#fff" transform="rotate(12.6491 50 50)">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                    </path>
                    <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#fff" transform="rotate(-12.6491 50 50)">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                    </path>
                </g>
            </svg> 
        </div>
    `;
};

let homePage = new HomePage();
let productPage = new ProductPage();
(function() {
    //homePage.loadHomePage();
    productPage.loadProductPage();
})();