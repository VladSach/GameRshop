import {getData} from "./script.js"

export default class Router {
    constructor({products_end_points}, hub){
        
        this.end_points = {
            "product": products_end_points
        }
        
        this.hub = hub;

        window.addEventListener('hashchange', () => this.onRouteChange());

        if (window.location.hash){
            this.loadHome();
        }
            
    }

    onRouteChange() {
        
        window.scrollTo({
            left:0,
            top:0,
            behavior: 'smooth'
        });

        const hashLocation = window.location.hash.substring(1);
        const splitedHash = hashLocation.split('/');

        let route;
        let hash;

        if (splitedHash.length == 2){
            route = splitedHash[0];
            hash = splitedHash[1];

            if (!this.loadContent(route, hash))
                this.loadHome();
        }

        else if (splitedHash.length == 1) {
            route = splitedHash[0];

            if (!this.loadContent(route))
                this.loadHome();
        }
        else {
            this.loadHome();
        }
    }

    loadContent(route, hash=null) {
        if (route in this.end_points) {
            if (hash != null && this.end_points[route].includes(hash)) {
                this.hub.loadByHash(route, hash);
                return true;
            }
            else if (hash == null){
                this.hub.loadByHash(route);
                return true;
            }
            
        }
        return false;
        
    }

    loadHome(){
        history.pushState(null, null, '/');
        this.hub.loadHomePage();
    }
}