import data from './newsData'

interface INewsData {
    status: string;
    totalResults: number;
    articles: IArticleData[];
}

interface IArticleData {
    source: {
        id: string,
        name: string,
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

const newsData: INewsData = data;
console.log("News data:", newsData);

let addToPage = (article:IArticleData) => {

    console.log(article.title);
    console.log(article.source.name);
}

newsData.articles.forEach(addToPage);

(<any>window).toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('links').classList.toggle('hidden');
}