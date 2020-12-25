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
        let catalog = data.products; 

        let catalogHTML = this.sortProducts(catalog, hash);

        this.content.innerHTML = `
            <div class="container">
                <div class="products-list">
                    <div class="products-list-sidebar">
                        ${this.loadCatalogListSidebar()}
                    </div>
                    <div class="products-list-conteiner">
                        
                    </div>
                </div>
            </div>
        `;

        this.getSidebarCheckboxes();
        
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

        let html = this.loadCatalogItems(filteredCatalog);

        return html;
    }

    loadCatalogItems(catalog) {
        let catalog_content = '';

        catalog.forEach(products => {
            catalog_content += `
                
            `;
        });

        return catalog_content
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
                                        <input id="check-playstation-4" type="checkbox">
                                        <label for="check-playstation-4">Playstation 4</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-xbox-one" type="checkbox">
                                        <label for="check-xbox-one">Xbox One</label>
                                    </a>
                                </div>
                                <div class="checkbox-wrap">
                                    <a class="check-group" href="javascript:void(0);">
                                        <input id="check-nintendo-switch" type="checkbox" >
                                        <label for="check-nintendo-switch">Nintendo Switch</label>
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

    getSidebarCheckboxes(){

        let platformsCheckbox = [];
        platformsCheckbox[0] = document.getElementById("check-playstation-4");
        platformsCheckbox[1] = document.getElementById("check-xbox-one");
        platformsCheckbox[2] = document.getElementById("check-nintendo-switch");

        let genresChechbox = [];
        genresChechbox[0] = document.getElementById("check-action");
        genresChechbox[1] = document.getElementById("check-horror");
        genresChechbox[2] = document.getElementById("check-shooter");
        genresChechbox[3] = document.getElementById("check-stealth");
        genresChechbox[4] = document.getElementById("check-andventure");
        genresChechbox[5] = document.getElementById("check-platformer");
        genresChechbox[6] = document.getElementById("check-roleplaying");

        platformsCheckbox.forEach(platform => {
            platform.addEventListener('change', (e) => {
                if (platform.checked && platform == platformsCheckbox[0]) {
                    history.pushState(null, null, '#catalog/playstation_4');
                    console.log("ps4")
                }
            });
        });

        genresChechbox.forEach(genre => {
            genre.addEventListener('change', (e) => {
                console.log(genre);
            });
        });
    }
}