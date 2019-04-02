"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
var newsData = newsData_1.default;
console.log("News data:", newsData);
var addToPage = function (article) {
    console.log(article.title);
    console.log(article.source.name);
};
newsData.articles.forEach(addToPage);
window.toggleDropdown = function (e) {
    e.preventDefault();
    document.getElementById('links').classList.toggle('hidden');
};
//# sourceMappingURL=index.js.map