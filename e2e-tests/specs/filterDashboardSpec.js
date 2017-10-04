describe('Test cases perform filter in dash board.', function() {
    var homePage = require('./../pages/homePage.js');
    var dashBoardPage = require('./../pages/dashBoardPage.js');
    beforeEach(function (){

    });

    it('Test load more in dash board.', function() {
        homePage.loadHomePage();
        var clickMoreElm = homePage.getClickMoreButton();
        expect(clickMoreElm.getText()).toEqual('Continue to the Crunchinator');
        clickMoreElm.click();
    });
    it('Test components show up.', function (){
        expect(dashBoardPage.getCompaniesBoard().isPresent()).toBe(true);
        expect(dashBoardPage.getCompaniesHq().isPresent()).toBe(true);
    });

    it('Test filter updated when clicked item in Companies board.', function(){
        var clickItem = dashBoardPage.singleBoard.getFistItemInCompaniesBoard();
        //browser.sleep(5000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(clickItem), 5000);

        clickItem.click();

        var filterEl = dashBoardPage.filterDashBoard.getFilterName();
        expect(filterEl.getText()).toEqual(clickItem.getText());
    });
});