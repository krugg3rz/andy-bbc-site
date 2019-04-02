import data from './newsData'

const addToPage = (articles: IArticleData) => {
    let image = (articles.urlToImage) ? articles.urlToImage: "../src/assets/placeholder-image.jpg";
    
    const getFriendlyTime = (date:string):string => {
        let dateObject = new Date(date);
        return dateObject.toLocaleTimeString();
    }

    let html = `<article>
                <div
                class="image"
                style="background-image:url('${image}')"></div>
                <div class="content">
                    <header>${articles.title}</header>
                    <small>
                        <span class="time">${getFriendlyTime(articles.publishedAt)}</span>
                        <span class="source">Business Insider</span>
                    </small>
                    <div class="description">
                    ${articles.description}
                    </div>
                    <a href="${articles.url}">Read more</a>
                </div>
            </article>`;
    document.getElementById('articles').innerHTML+=html;
    // console.log(document.getElementById('articles'));
}

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
// console.log("News data:", newsData);

newsData.articles.forEach(addToPage);

(<any>window).toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('links').classList.toggle('hidden');
}

(<any>window).doFilter = (filter) => {
    console.log(filter);
}