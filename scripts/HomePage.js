import {getData} from "./script.js";

export default class HomePage {
    constructor (){
        this.route = '/';
        this.content = document.getElementById("page-content");
    }





    async loadPage(){
        this.content.innerHTML = this.showPacMan();

        let data = await getData();

        this.content.innerHTML = `
        ${this.loadSlider()}
        ${this.loadMastersBlock()}`;

        this.sliderScript();
        this.mastersScript();
    }


    showPacMan(){
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
}