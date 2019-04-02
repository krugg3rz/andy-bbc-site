"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
var addToPage = function (articles) {
    var image = (articles.urlToImage) ? articles.urlToImage : "../src/assets/placeholder-image.jpg";
    var getFriendlyTime = function (date) {
        var dateObject = new Date(date);
        return dateObject.toLocaleTimeString();
    };
    var html = "<article>\n                <div\n                class=\"image\"\n                style=\"background-image:url('" + image + "')\"></div>\n                <div class=\"content\">\n                    <header>" + articles.title + "</header>\n                    <small>\n                        <span class=\"time\">" + getFriendlyTime(articles.publishedAt) + "</span>\n                        <span class=\"source\">Business Insider</span>\n                    </small>\n                    <div class=\"description\">\n                    " + articles.description + "\n                    </div>\n                    <a href=\"" + articles.url + "\">Read more</a>\n                </div>\n            </article>";
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