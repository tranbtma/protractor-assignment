var elementUtils = require('./../libs/elementUtils.js')
var dashBoardPage = function() {
    this.getFistItemInCompaniesBoard = function(){
        return elementUtils.findByXpath("//*[@id='main']/div/div[2]/div/div[1]/div/div/div[2]/div[2]/table/tbody/tr[1]/td/div");
    };

};
module.exports = new dashBoardPage();