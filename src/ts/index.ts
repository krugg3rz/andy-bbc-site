import data from './newsData'

const addToPage = (articles: IArticleData) => {
    let html = `<article>
                <img src="https://amp.businessinsider.com/images/5c952fe109b603212d46ae03-1136-568.png"
                    alt="A cat, many cats or a kitten">
                <div class="content">
                    <header>CME's CEO explains the biggest issue regulators have with bitcoin</header>
                    <small>
                        <span class="time">14:50</span>
                        <span class="source">Business Insider</span>
                    </small>
                    <div class="description">Lorem ipsum dolor amet cornhole edison bulb palo santo locavore banh mi migas,
                        next
                        level kombucha bushwick fixie shabby chic biodiesel knausgaard four dollar toast poutine. Organic
                        four
                        loko polaroid hashtag. Vaporware gluten-free tousled farm-to-table, 8-bit la croix deep v yuccie
                        try-hard. Literally chicharrones lyft hammock, tumeric helvetica copper mug freegan blue bottle
                        church-key vape ethical tilde everyday carry yuccie. Beard coloring book tofu scenester health goth.
                    </div>
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