"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
var addToPage = function (articles) {
    var html = "<article>\n                <img src=\"https://amp.businessinsider.com/images/5c952fe109b603212d46ae03-1136-568.png\"\n                    alt=\"A cat, many cats or a kitten\">\n                <div class=\"content\">\n                    <header>CME's CEO explains the biggest issue regulators have with bitcoin</header>\n                    <small>\n                        <span class=\"time\">14:50</span>\n                        <span class=\"source\">Business Insider</span>\n                    </small>\n                    <div class=\"description\">Lorem ipsum dolor amet cornhole edison bulb palo santo locavore banh mi migas,\n                        next\n                        level kombucha bushwick fixie shabby chic biodiesel knausgaard four dollar toast poutine. Organic\n                        four\n                        loko polaroid hashtag. Vaporware gluten-free tousled farm-to-table, 8-bit la croix deep v yuccie\n                        try-hard. Literally chicharrones lyft hammock, tumeric helvetica copper mug freegan blue bottle\n                        church-key vape ethical tilde everyday carry yuccie. Beard coloring book tofu scenester health goth.\n                    </div>\n                </div>\n            </article>";
    document.getElementById('articles').innerHTML += html;
    // console.log(document.getElementById('articles'));
};
var newsData = newsData_1.default;
// console.log("News data:", newsData);
newsData.articles.forEach(addToPage);
window.toggleDropdown = function (e) {
    e.preventDefault();
    document.getElementById('links').classList.toggle('hidden');
};
//# sourceMappingURL=index.js.map