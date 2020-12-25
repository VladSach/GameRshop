import {getData} from "./script.js";
import {showPacMan} from "./script.js";

export default class CatalogPage {
    constructor(){
        this.route = "catalog";
        this.content = document.getElementById("page-content");

    }

    loadPage(hash) {
        this.loadCatalogPage(hash);
        return true;
    }

    async loadCatalogPage(hash = null) {

        this.content.innerHTML = showPacMan();

        let data = await getData();
        let allProducts = data.products; 

        let catalog = this.sortProducts(allProducts, hash);

        this.content.innerHTML = `
            <div class="container">
                <div class="products-list">
                    <div class="products-list-sidebar">
                        ${this.loadCatalogListSidebar()}
                    </div>
                    <div class="products-list-catalog">
                        <div class="top-section">
                            <div class="catalog-control">
                                <a href="javascript:void(0);" class="catalog-sort active">Expensive first</a>
                                <a href="javascript:void(0);" class="catalog-sort">Cheap first</a>
                            </div>
                        </div>

                        <div class="catalog-content">
                            ${this.loadCatalog(catalog)}
                        </div>

                    </div>
                </div>
            </div>
        `; 

        this.eventListener();
    }

    sortProducts(catalog, hash = null) {
        let filteredCatalog = [];

        if (hash) {
            let consoles = (hash === "playstation_4") ? "Playstation 4" :
                       (hash === "xbox_one") ? "Xbox One" : "Nintendo Switch";

            filteredCatalog = catalog.filter(product => {
                return product.platform.includes(consoles);
            });
        }

        return filteredCatalog;
    }

    eventListener(){

        let platformsCheckbox = this.getPlatforms();

        platformsCheckbox.forEach(platform => {
            platform.addEventListener('change', (e) => {
                
                if (e.target.checked) {
                    history.pushState(null, null, '#catalog/' + e.target.id.slice(6,));
                } else if (!e.target.checked) {
                    history.pushState(null, null, '#catalog');
                }

            });
        });

        let genresChechbox = [];
        genresChechbox[0] = document.getElementById("check-action");
        genresChechbox[1] = document.getElementById("check-horror");
        genresChechbox[2] = document.getElementById("check-shooter");
        genresChechbox[3] = document.getElementById("check-stealth");
        genresChechbox[4] = document.getElementById("check-andventure");
        genresChechbox[5] = document.getElementById("check-platformer");
        genresChechbox[6] = document.getElementById("check-roleplaying");

        genresChechbox.forEach(genre => {
            genre.addEventListener('change', (e) => {
                console.log(genre);
            });
        });

        
    }

    getPlatforms(){
        let platformsCheckbox = [];
        platformsCheckbox[0] = document.getElementById("check-playstation_4");
        platformsCheckbox[1] = document.getElementById("check-xbox_one");
        platformsCheckbox[2] = document.getElementById("check-nintendo_switch");
        return platformsCheckbox;
    }

    loadCatalogListSidebar(){
        return `
            <div class="filter-block">
                <div id="fixed-filter">
                    <div class="toggle-content">
                        <div class="toggle-row">
                            <div class="toggle-title">
                                Price
                            </div>
                            <div class="price-ranges">
                                <br>
                                <div class="price-input">
                                    <div class="form-group-price">
                                        <input type="text" id="price-from" maxlength="4" min="99" autocomplete="off" name="price_from" value="99">
                                    </div>
                                    <div class="form-group-price">
                                        <input type="text" id="price-to" maxlength="4" min="99" autocomplete="off" name="price_from" value="3999">
                                    </div>
                                </div>
                                <a id="price-btn" href="javascript:void(0);">OK</a>
                            </div>
                        </div>
                        <div class="toggle-row">
                            <div class="toggle-title">
                                Platform
                            </div>
                            <div class="checkbox-row">
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);"> <!--#catalog/playstation_4-->
                                        <input id="check-playstation_4" type="checkbox">
                                        <label for="check-playstation_4">Playstation 4</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-xbox_one" type="checkbox">
                                        <label for="check-xbox_one">Xbox One</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-nintendo_switch" type="checkbox" >
                                        <label for="check-nintendo_switch">Nintendo Switch</label>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="toggle-row">
                            <div class="toggle-title">
                                Genre
                            </div>
                            <div class="checkbox-row">
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-action" type="checkbox">
                                        <label for="check-action">Action</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-andventure" type="checkbox">
                                        <label for="check-andventure">Andventure</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-roleplaying" type="checkbox" >
                                        <label for="check-roleplaying">Roleplaying</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-horror" type="checkbox">
                                        <label for="check-horror">Horror</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-shooter" type="checkbox">
                                        <label for="check-shooter">Shooter</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-stealth" type="checkbox">
                                        <label for="check-stealth">Stealth</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-platformer" type="checkbox">
                                        <label for="check-platformer">Platformer</label>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    loadCatalog(catalog){
        let catalog_content = '';

        catalog.forEach(game => {
            catalog_content += `
                <div class="game-card">
                    <a class="game-card-image" href="#product/${game.url}">
                           <img src="${game.image}" alt="game image">
                    </a>
                    <a class="game-card-title" href="#product/${game.url}">${game.title}</a>
                    <div class="game-card-price">
                        <p>${game.price} ₴</p>
                    </div>
                    <div class="game-card-platform">
                        <span class="platform-item ${game.platform[0]}"><img src="./images/platforms/${game.platform[0]}.svg" alt=''></span>
                        <span class="platform-item ${game.platform[1]}"><img src="./images/platforms/${game.platform[1]}.svg" alt=''></span>
                        <span class="platform-item ${game.platform[2]}"><img src="./images/platforms/${game.platform[2]}.svg" alt=''></span>
                    </div>
                </div>
            `;
        });

        return catalog_content;
    }
}