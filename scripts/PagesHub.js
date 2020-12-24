export default class PagesHub {
    constructor(pages, homePage){
        this.pages = pages;
        this.homePage = homePage;
    }

    getPage(route) {
        for (let i = 0; i < this.pages.length; i++) {
            if (route === this.pages[i].route){
                return this.pages[i];
            }
        }
    }

    loadByHash(route, hash=null){
        let page = this.getPage(route);
        if(!page.loadPage(hash))
            this.loadHomePage();
    }

    loadHomePage(){
        this.homePage.loadHomePage();
    }
}