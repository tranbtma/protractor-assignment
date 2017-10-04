var elementUtils = function() {
    //Limited to use as Xpath is not human readable, Use only when there a no other ways to detect element.
    this.findByXpath = function(xpath){
        return element(by.xpath(xpath));
    };
    this.findById = function(id) {
        return element(by.id(id));
    };
};
module.exports = new elementUtils();