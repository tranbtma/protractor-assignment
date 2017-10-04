var elementUtils = function() {
    this.findByXpath = function(xpath){
        return element(by.xpath(xpath));
    };
    this.findById = function(id) {
        return element(by.id(id));
    };
};
module.exports = new elementUtils();