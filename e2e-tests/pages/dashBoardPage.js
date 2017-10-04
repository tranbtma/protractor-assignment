var elementUtils = require('./../libs/elementUtils.js');
var filterDashBoard = require('./../fragments/filterDashBoard.js');
var singleBoard = require('./../fragments/singleBoard.js');
var dashBoardPage = function() {
    this.getCompaniesBoard = function(){
        return elementUtils.findByXpath("//H3[@class='ng-binding'][text()='Companies']/self::H3");
    };
    this.getCompaniesHq = function(){
        return elementUtils.findByXpath("//H3[@class='ng-binding'][text()='Company HQ']");
    };
    this.singleBoard = singleBoard;
    this.filterDashBoard = filterDashBoard;
};
module.exports = new dashBoardPage();