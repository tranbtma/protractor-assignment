var elementUtils = require('./../libs/elementUtils.js');
var filterDashBoard = function (){
    this.getFilter = function (){
        return elementUtils.findById("filters");
    };
    this.getFilterName = function(){
        return elementUtils.findByXpath("//span[@class='filter_name ng-binding']");
    };
}
module.exports  = new filterDashBoard();