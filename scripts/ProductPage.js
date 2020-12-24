import {getData} from "./script.js"

export default class ProductPage {
    constructor(){
        this.route = "product";
        this.content = document.getElementById("page-content");
    }

    loadPage(hash){
        if (hash == null){
            return false;
        }
        else {
            this.loadProduct(hash);
        }
        return true;
    }

    async loadProductPage(){
        this.content.innerHTML = this.showPacMan();

        let data = await getData();
        let product = data.products.filter(product => {
            return product.url === hash;
        }); 
        


        this.content.innerHTML = `
            <div class="product-bg-img">
                <img src="${product.backgroundImage}" alt="product bg img">
                <div class="gradient"></div>
            </div>
        `;
    }
}