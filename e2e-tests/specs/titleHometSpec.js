describe('Test cases landing app', function() {
    var homePage = require('./../pages/homePage.js');
    beforeEach(function (){

    });

    it('Test browser title', function() {
        homePage.loadHomePage();
        expect(browser.getTitle()).toEqual('Crunchinator - A Cloudspace Project');
    });
    it('Test home page middle header text' , function(){
        expect(homePage.getMiddleHeader().getText()).toEqual('Slice, Filter & Explore CrunchBase Data');
    });
});