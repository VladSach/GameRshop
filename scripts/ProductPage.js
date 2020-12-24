import {getData} from "./script.js"
import {showPacMan} from "./script.js"

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
        let hash = "ghost_of_tsushima";

        this.content.innerHTML = showPacMan();

        let data = await getData();
        let game = data.products.filter(product => {
            return product.url === hash;
        }); 
        game = game[0];
        

        this.content.innerHTML = `
            <div class="product-bg-img">
                <img src="${game.backgroundImage}" alt="product bg img">
                <div class="gradient"></div>
            </div>

            <div class="product-container">
                <div class="product-info-wrap">
                    <div class="product-image">
                        <img src="${game.image}" alt="prod img">
                    </div>
                    <div class="product-details">
                        <div class="product-title">
                            <h1>${game.title}</h1>
                        </div>
                        <div class="product-info">
                            <div class="product-info--left">
                                <div class="product-info--block">
                                    <p>Platform</p>
                                    <div class="platform-list">
                                        <span class="info-item ${game.platform[0]}">
                                            <img src="../images/platforms/${game.platform[0]}.svg" alt=' '>
                                        </span>
                                        <span class="info-item ${game.platform[1]}">
                                            <img src="../images/platforms/${game.platform[1]}.svg" alt=' '>
                                        </span>
                                        <span class="info-item ${game.platform[2]}">
                                            <img src="../images/platforms/${game.platform[2]}.svg" alt=' '>
                                        </span>
                                    </div>
                                </div>
                                <div class="product-info--block">
                                    <p>Version</p>
                                    <div class="version-list">
                                        <span class="info-item version">
                                            <span>Standart</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="product-info--block">
                                    <p>Language</p>
                                    <div class="version-list">
                                        <span class="info-item ${game.language[0]}">
                                            <span>${game.language[0]}</span>
                                        </span>
                                        <span class="info-item ${game.language[0]}">
                                            <span>${game.language[0]}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                                <div class="product-info--right">
                                    <div class="info-price">
                                        <p>Price: <span>${game.price} ₴</span></p>
                                    </div>
                                    <div class="info-buttons">
                                        <a id="buy_btn" href="#">
                                            <span class="text_1">buy</span>
                                            <span class="text_2">In cart</span>
                                        </a>
                                    </div>
                                    <div class="info-options">
                                        <img src="images/svg/rocket.svg" alt="">
                                        <p>Will arrive tomorrow at 3pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">

                </div>
            </div>
        `;
    }
}