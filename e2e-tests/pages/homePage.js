var elementUtils = require('./../libs/elementUtils.js')
var homePage = function() {
    this.loadHomePage = function(){
        //Should set default screen size to ignore detect component issue, Can be ignore if got error with chrome driver and chrome version
        //browser.driver.manage().window().setSize(1280,1024);
        browser.get('/#/crunchinator');
    };
    this.getMiddleHeader = function(){
        return elementUtils.findByXpath("//DIV[@class='header-text'][contains(text(),'Slice, Filter ')]");
    };
    this.getClickMoreButton = function(){
        return elementUtils.findByXpath("//*[@class='movealong']");
    };

};
module.exports = new homePage();