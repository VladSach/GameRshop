import {getData} from "./script.js";
import {showPacMan} from "./script.js"

export default class HomePage {
    constructor (){
        this.route = '/';
        this.content = document.getElementById("page-content");
    }


    async loadHomePage(){

        this.content.innerHTML = showPacMan();

        let data = await getData();
        let best_sellers = data.products;

        best_sellers.sort(function(a, b){
            return b.sold - a.sold;
        });

        best_sellers = Object.entries(best_sellers).slice(0,4).map(entry => entry[1]); // slice object

        this.content.innerHTML = `
        ${this.loadSlider()}
        ${this.loadMastersBlock()}
        ${this.bestSellers(best_sellers)}`;

        this.sliderScript();
        this.mastersScript();
    }

    loadSlider(){
        return `
        <div class="slider">
                
            <div class="slides">
                <input type="radio" name="r" id="r1" checked>
                <input type="radio" name="r" id="r2" >
                <input type="radio" name="r" id="r3" >
                <input type="radio" name="r" id="r4" >
                <div class="slide curS">
                    <a href="">
                        <img src="images/slider/image1.webp" alt="Slide">
                    </a>
                </div>
                <div class="slide">
                    <a href="">
                        <img src="images/slider/image2.webp" alt="Slide">
                    </a>
                </div>
                <div class="slide">
                    <a href="">
                        <img src="images/slider/image3.webp" alt="Slide">
                    </a>
                </div>
                <div class="slide">
                    <a href="">
                        <img src="images/slider/image4.webp" alt="Slide">
                    </a>
                </div>
                
            </div>
            <div class="navigation">
                <label for="r1" class="slider-bar"></label>
                <label for="r2" class="slider-bar"></label>
                <label for="r3" class="slider-bar"></label>
                <label for="r4" class="slider-bar"></label>
            </div>
        </div>
            `;
    }

    sliderScript(){
        let i = 0;
        let inputs = [];
        let time = 4000;
            
        inputs[0] = document.getElementById("r1");
        inputs[1] = document.getElementById("r2");
        inputs[2] = document.getElementById("r3");
        inputs[3] = document.getElementById("r4");
            
        function slideSlider() {
            inputs[i].click();
            
            (i < inputs.length - 1) ? i++ : i = 0;
            
            setTimeout(slideSlider, time);
        }
            
        window.onload = slideSlider();
    }

    loadMastersBlock(){
        return `
        <div class="master-block">
            <div>
                <h2 class="white-text">Master of 
                    <span class="red-text">games</span>
                </h2>
                <p> Game selection crisis? 
                    Great choice and don't know how to play? 
                    Played for a long time and do not know anything about new products? 
                    Our Actions Master will solve your problem quickly and without unnecessary words :)
                </p>
                <a href="" id="btn-h" class="btn-promotes">Begin</a>
            </div>
            <div class="master-image">
                <img class="image_1" src="./images/master/kia-1.svg" alt="master-down">
                <img class="image_2" src="./images/master/kia-2.svg" alt="master-up">
            </div>
        </div>
        `;
    }
    
    mastersScript(){
        document.querySelector('.btn-promotes').onmouseover = () => {
            document.querySelector('.master-block').classList.add('hover'); 
        };

        document.querySelector('.btn-promotes').onmouseout = () => {
            document.querySelector('.master-block').classList.remove('hover'); 
        };
    }


    bestSellers(best_sellers){
        let best_sellers_content = '';

        best_sellers.forEach(game => {
            best_sellers_content += `
                <div class="game-card">
                    <a class="game-card-image" href="#product/${game.url}">
                           <img src="${game.image}" alt="game image">
                    </a>
                    <a class="game-card-title" href="#product/${game.url}">${game.title}</a>
                    <div class="game-card-price">
                        <p>${game.price} ₴</p>
                    </div>
                    <div class="game-card-platform">
                        <img src="./images/platforms/${game.platform[0]}.svg" alt=' '>
                        <img src="./images/platforms/${game.platform[1]}.svg" alt=' '>
                        <img src="./images/platforms/${game.platform[2]}.svg" alt=' '>
                    </div>
                </div>
            `;
        });

        return `
        <div class="the-hateful-four">
            <h2>Our <span>best</span> selling games</h2>
            <div class="top-games-block">
               ${best_sellers_content} 
            </div>
        </div>
        `

    }

}