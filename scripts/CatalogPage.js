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
                        <div class="filter-block">
                            <div id="fixed-filter">
                                <div class="toggle_content">
                                    <div class="toggle_row">
                                        <div class="prices_title">
                                            Price
                                        </div>
                                        <div class="price_ranges">
                                            <br>
                                            <div class="price_input">
                                                <div class="form_group">
                                                    <input type="text" id="price_from" maxlength="4" min="99" autocomplete="off" name="price_from" value="99">
                                                </div>
                                                <div class="form_group">
                                                    <input type="text" id="price_from" maxlength="4" min="99" autocomplete="off" name="price_from" value="99">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
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

}