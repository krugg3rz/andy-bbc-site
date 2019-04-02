(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./newsData":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = {
    status: 'ok',
    totalResults: 20,
    articles: [
        {
            source: {
                id: 'business-insider',
                name: 'Business Insider',
            },
            author: 'Dan DeFrancesco',
            title: "CME's CEO explains the biggest issue regulators have with bitcoin",
            description: "Terry Duffy, CME Group's chairman and CEO, told Business Insider that regulators are more likely to be accepting of cryptocurrencies backed by fiat money. Cryptocurrencies like bitcoin prove a unique problem for regulators as they have a finite amount, limiti…",
            url: 'https://www.businessinsider.com/cmes-ceo-makes-the-case-for-stablecoins-outlines-bitcoin-issues-2019-3',
            urlToImage: 'https://amp.businessinsider.com/images/5c952fe109b603212d46ae03-1136-568.png',
            publishedAt: '2019-03-25T15:52:45Z',
            content: "As Wall Street attempts to understand where and how cryptocurrencies can fit into its ecosystem, Terry Duffy believes the future won't look too different from the past. \r\n The CME Group chairman and CEO told Business Insider that stablecoins, cryptocurrencies… [+3145 chars]",
        },
        {
            source: {
                id: null,
                name: 'Yahoo.com',
            },
            author: null,
            title: 'Bitcoin is Nothing More Than ‘Bovine Excrement’: Berkeley Researcher',
            description: 'Move over, Jamie Dimon, because there’s a new contender for the coveted title of “king bear of the bitcoin-bashing brigade”: technologist Nicholas Weaver. Technologist Nicholas Weaver Rants Against Bitcoin While he might not have the mainstream name recogniti…',
            url: 'https://finance.yahoo.com/news/bitcoin-nothing-more-bovine-excrement-154018673.html',
            urlToImage: 'https://s.yimg.com/uu/api/res/1.2/iNaLTsjdahFyUGkwotisow--~B/aD02Njc7dz0xMDAwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/ccn_656/1f21e88fb3857c710d47d921ea8424c2',
            publishedAt: '2019-03-25T15:40:18Z',
            content: 'Move over, Jamie Dimon, because theres a new contender for the coveted title of king bear of the bitcoin-bashing brigade: technologist Nicholas Weaver.\r\nWhile he might not have the mainstream name recognition of Jamie Dimon, or Warren Buffett, or even Nouriel… [+1355 chars]',
        },
        {
            source: {
                id: 'crypto-coins-news',
                name: 'Crypto Coins News',
            },
            author: 'Josiah Wilmoth',
            title: 'Bitcoin is Nothing More Than ‘Bovine Excrement’: Berkeley Researcher',
            description: 'Move over, Jamie Dimon, because there’s a new contender for the coveted title of “king bear of the bitcoin-bashing brigade”: technologist Nicholas Weaver. Technologist Nicholas Weaver Rants Against Bitcoin While he might not have the mainstream name recogniti…',
            url: 'https://www.ccn.com/bitcoin-is-nothing-more-than-bovine-excrement-berkeley-researcher',
            urlToImage: 'https://www.ccn.com/wp-content/uploads/2019/03/bitcoin-crumble-break-die-shutterstock.jpg',
            publishedAt: '2019-03-25T15:40:18Z',
            content: 'Move over, Jamie Dimon, because theres a new contender for the coveted title of “king bear of the bitcoin-bashing brigade”: technologist Nicholas Weaver.\r\nTechnologist Nicholas Weaver Rants Against Bitcoin\r\nWhile he might not have the mainstream name recognit… [+4195 chars]',
        },
        {
            source: {
                id: null,
                name: 'Yahoo.com',
            },
            author: null,
            title: 'Moral relativism and the power of unstoppable code on the Ethereum network',
            description: 'Speaking at the recent ETHDenver conference, Andreas Antonopoulos gave a charismatic keynote speech on the importance of “unstoppable code” for the future of smart contracts on the Ethereum platform. The Mastering Ethereum author started out his talk by sayin…',
            url: 'https://finance.yahoo.com/news/moral-relativism-power-unstoppable-code-151518195.html',
            urlToImage: 'https://s.yimg.com/uu/api/res/1.2/Ys4goaadYmr21wWhQq7teg--~B/aD03Njg7dz0xMDI0O3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/coin_rivet_596/101e193a83e6f2bb401ac7319327c148',
            publishedAt: '2019-03-25T15:15:18Z',
            content: 'Speaking at the recent ETHDenver conference, Andreas Antonopoulos gave a charismatic keynote speech on the importance of unstoppable code for the future of smart contracts on the Ethereum platform.\r\nThe Mastering Ethereum author started out his talk by saying… [+3812 chars]',
        },
        {
            source: {
                id: 'the-next-web',
                name: 'The Next Web',
            },
            author: 'Matthew Beedham',
            title: 'Facebook is hiring 22 people for its secretive blockchain division',
            description: 'The fact that Facebook is working on its own cryptocurrency and blockchain applications is no longer a secret – so it’s not surprising the company is looking to grow its distributed ledger division. The social media giant already has a 50-strong team squirrel…',
            url: 'https://thenextweb.com/hardfork/2019/03/25/facebook-cryptocurrency-blockchain-bitcoin-jobs/',
            urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F03%2Fblockchain-facebook-cryptocurrency-bitcoin-jobs.jpg&signature=fd406f86cfefc7e6a7f6188f27ae690d',
            publishedAt: '2019-03-25T15:08:45Z',
            content: 'The fact that Facebook is working on its own cryptocurrency and blockchain applications is no longer a secret  so its not surprising the company is looking to grow its distributed ledger division.\r\nThe social media giant already has a 50-strong team squirrele… [+3501 chars]',
        },
        {
            source: {
                id: null,
                name: 'Bitcoinist.com',
            },
            author: 'Esther Kim',
            title: 'Tim Draper Bets On The Price of Bitcoin With Argentina President',
            description: 'Serial investor and Bitcoin bull Tim Draper has taken his advocacy of the cryptocurrency a step further – by making a bet with the president of Argentina. Draper Lures Macri With Money For Nothing As local news outlet La Nación reported March 22, Draper sees …',
            url: 'https://bitcoinist.com/argentina-president-bitcoin-price-tim-draper/',
            urlToImage: 'https://bitcoinist.com/wp-content/uploads/2019/03/shutterstock_434703343-980x613.jpg',
            publishedAt: '2019-03-25T15:00:11Z',
            content: 'Serial investor and Bitcoin bull Tim Draper has taken his advocacy of the cryptocurrency a step further – by making a bet with the president of Argentina.\r\nDraper Lures Macri With Money For Nothing\r\nAs local news outlet La Naciónreported March 22, Draper sees… [+2984 chars]',
        },
        {
            source: {
                id: null,
                name: 'Cointelegraph.com',
            },
            author: 'Cointelegraph By Helen Partz',
            title: 'Bitcoin Holds $4,000, British Pound Loses to USD as Brexit Anticipation Grows',
            description: 'Bitcoin holds the $4,000 threshold, while most of the top 20 cryptos by market cap are in the red amidst the fall of British pound',
            url: 'https://cointelegraph.com/news/bitcoin-holds-4-000-british-pound-loses-to-usd-as-brexit-anticipation-grows',
            urlToImage: 'https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zZGQ0YzM4MjA3ZmZkZjU4N2Q3MzY0OWRiY2FhNTFjOS5qcGc=.jpg',
            publishedAt: '2019-03-25T14:59:00Z',
            content: null,
        },
        {
            source: {
                id: null,
                name: 'Yahoo.com',
            },
            author: null,
            title: 'Bitcoin Holds $4,000, British Pound Loses to USD as Brexit Anticipation Grows',
            description: 'Monday, March 25 — crypto markets have continued trading sideways, with Bitcoin (BTC) holding the $4,000 threshold at press time, according to data from CoinMarketCap. Most of the top 20 cryptocurrencies by market cap are in the red today, with Cardano (ADA) …',
            url: 'https://news.yahoo.com/bitcoin-holds-4-000-british-145900445.html',
            urlToImage: null,
            publishedAt: '2019-03-25T14:59:00Z',
            content: null,
        },
        {
            source: {
                id: null,
                name: 'Forbes.com',
            },
            author: 'Jim Preissler, Contributor, Jim Preissler, Contributor https://www.forbes.com/sites/jpreissler/',
            title: 'An Uneventful End To The Week',
            description: 'Daily Crypto Commentary 3/25/19',
            url: 'https://www.forbes.com/sites/jpreissler/2019/03/25/an-uneventful-end-to-the-week/',
            urlToImage: 'https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1137173720%2F960x0.jpg%3Ffit%3Dscale',
            publishedAt: '2019-03-25T14:56:00Z',
            content: 'Share to facebook\r\nShare to twitter\r\nShare to linkedin\r\nFridays and the weekend can be feast or famine when it comes to crypto. Sometimes, inexplicable moves with increased volatility, other times a complete slumber party. For the majority of the major coins … [+3476 chars]',
        },
        {
            source: {
                id: null,
                name: 'Itbusiness.ca',
            },
            author: '',
            title: 'Buy Bitcoin now and 9 other ways to prepare for cyber attack',
            description: 'Many governing boards over the past year have had presentations and discussions about cyber security but most look at it as an unlikely event. However, it is no longer the case of whether a company will be cyber breached or receive phishing/ransom attacks, bu…',
            url: 'https://www.itbusiness.ca/blog/buy-bitcoin-now-and-9-other-ways-to-prepare-for-cyber-attack/109109',
            urlToImage: 'https://www.itbusiness.ca/wp-content/uploads/2017/02/Business-cybersecurity-header.jpg',
            publishedAt: '2019-03-25T14:48:00Z',
            content: 'Many governing boards over the past year have had presentations and discussions about cyber security but most look at it as an unlikely event.\r\nHowever, it is no longer the case of whether a company will be cyber breached or receive phishing/ransom attacks, b… [+4751 chars]',
        },
        {
            source: {
                id: null,
                name: 'Hackernoon.com',
            },
            author: 'Tessa Norton',
            title: 'The Impact of Blockchain Technology 10 Years From Now',
            description: 'Where will blockchain be in a decade?',
            url: 'https://hackernoon.com/the-impact-of-blockchain-technology-10-years-from-now-c347e273384d',
            urlToImage: 'https://cdn-images-1.medium.com/max/1200/0*hJ_6uYozy7boeyfM',
            publishedAt: '2019-03-25T14:16:11Z',
            content: 'Blockchain has been the top trending buzzword in technology for over a year now. But gradually, it is transforming into a reality and the time is near when well finally start to see some real applications of the Blockchain Technology for the masses.\r\nThe grow… [+4737 chars]',
        },
        {
            source: {
                id: null,
                name: 'Zerohedge.com',
            },
            author: 'Tyler Durden',
            title: 'Trump Is Going To Repeat This Until November 2020. Thanks, MSNBC.',
            description: 'Authored by Caitlin Johnstone via Medium.com, After news broke that Robert Mueller had turned in his final report without recommending any further indictments, MSNBC’s Rachel Maddow began frantically retweeting blue-checkmarked Twitter pundits who claimed tha…',
            url: 'https://www.zerohedge.com/news/2019-03-25/trump-going-repeat-until-november-2020-thanks-msnbc',
            urlToImage: 'https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/styles/max_650x650/public/2019-03/D2TYtxjX0AEaGj8.jpg?itok=bKAoV_at',
            publishedAt: '2019-03-25T14:15:44Z',
            content: 'Authored by Caitlin Johnstone via Medium.com,\r\nAfter news broke that Robert Mueller had turned in his final report without recommending any further indictments, MSNBCs Rachel Maddow began frantically retweeting blue-checkmarked Twitter pundits who claimed tha… [+8798 chars]',
        },
        {
            source: {
                id: null,
                name: 'Yahoo.com',
            },
            author: null,
            title: 'Mapping out Bakkt',
            description: 'Intercontinental Exchange made headlines last year when it announced the launch of Bakkt, a new venture that would provide the world with a platform to trade bitcoin futures.The post Mapping out Bakkt appeared first on The Block.',
            url: 'https://news.yahoo.com/mapping-bakkt-141259239.html',
            urlToImage: null,
            publishedAt: '2019-03-25T14:12:59Z',
            content: null,
        },
        {
            source: {
                id: null,
                name: 'Hackernoon.com',
            },
            author: 'Future Blok',
            title: 'Introduction to Kin: Universal Virtual Currency for Apps',
            description: 'A New Revenue Model for App Developers Similar to “Bitcoin Mining”, but Based on User Engagement',
            url: 'https://hackernoon.com/introduction-to-kin-universal-virtual-currency-for-apps-ea6464225ffc',
            urlToImage: 'https://cdn-images-1.medium.com/max/1200/1*0_2rOeblUiHR30RiAyf6Rw.png',
            publishedAt: '2019-03-25T14:11:00Z',
            content: 'Kin can be found in several colors, depending on the app.\r\nCryptocurrency seems to re-enter public discussion in tandem with fluctuations in exchange rate, but hopes of mass mainstream adoption continue to remain a hopeful vision for the future. Since most co… [+16238 chars]',
        },
        {
            source: {
                id: 'cnbc',
                name: 'CNBC',
            },
            author: 'Nia Warfield',
            title: 'Three options strategies for the week: March 25',
            description: 'The "Options Action" traders share their first moves for the market open.',
            url: 'https://www.cnbc.com/2019/03/25/three-options-strategies-for-the-week-march-25.html',
            urlToImage: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/05/25/105233067-6ED3-FM-OA-D-BLOCK-052518.1910x1000.jpg',
            publishedAt: '2019-03-25T14:03:15Z',
            content: 'div &gt; div.group &gt; p:first-child"&gt;\r\nThe "Options Action" traders share three options trading strategies to kick off the week.\r\nMike Khouw highlighted a call option in the Homebuilders ETF\r\nBrian Stutland laid out a call spread strategy for Advanced Mi… [+1282 chars]',
        },
        {
            source: {
                id: null,
                name: 'Androidauthority.com',
            },
            author: 'AA Picks',
            title: 'Master blockchain and set up your own network with this $29 training',
            description: 'Learn how Bitcoin works with these two courses on the ins and outs of blockchain technology.',
            url: 'https://www.androidauthority.com/blockchain-certification-training-968026/',
            urlToImage: 'https://cdn57.androidauthority.net/wp-content/uploads/2019/03/sale_18220_primary_image_wide-920x470.jpg',
            publishedAt: '2019-03-25T14:03:00Z',
            content: 'If you’ve been wondering for ages how the heck Bitcoin works, now is your chance. This Blockchain Certification Advanced Training Bundle teaches you the ins and outs of the blockchain, the technology that fuels cryptocurrency.\r\nThis two-course bundle starts w… [+1138 chars]',
        },
        {
            source: {
                id: null,
                name: 'Bitcoinist.com',
            },
            author: 'Osato Avan-Nomayo',
            title: 'Bitmain IPO Application Fails to Impress – Set to Expire Today',
            description: 'After six months of inactivity, the Bitmain IPO is set to expire bringing to a close another difficult chapter for the beleaguered cryptocurrency mining behemoth. Bitmain IPO: Dead on Arrival The Bitmain Technologies application for an initial public offering…',
            url: 'https://bitcoinist.com/bitmain-ipo-expire-hong-kong-stock-exchange/',
            urlToImage: 'https://bitcoinist.com/wp-content/uploads/2019/03/shutterstock_107086754.jpg',
            publishedAt: '2019-03-25T14:00:14Z',
            content: 'After six months of inactivity, the Bitmain IPO is set to expire bringing to a close another difficult chapter for the beleaguered cryptocurrency mining behemoth.\r\nBitmain IPO: Dead on Arrival\r\nThe Bitmain Technologies application for an initial public offeri… [+2588 chars]',
        },
        {
            source: {
                id: null,
                name: 'Marketwatch.com',
            },
            author: 'Aaron Hankin',
            title: 'Cryptos: This Canadian crypto trader sent $75,000 bitcoin to Quadriga’s exchange—then it went bust',
            description: 'The fallout from the Canadian cryptocurrency exchange QuadrigaCX saga continues to unravel in the courts with droves of angry investors demanding answers.',
            url: 'https://www.marketwatch.com/story/this-canadian-crypto-trader-sent-75000-bitcoin-to-quadrigas-exchangethen-it-went-bust-2019-03-25',
            urlToImage: 'http://s.marketwatch.com/public/resources/MWimages/MW-HF892_bitcoi_ZG_20190318144125.jpg',
            publishedAt: '2019-03-25T14:00:07Z',
            content: 'The fallout from the Canadian cryptocurrency exchange QuadrigaCX saga continues to unravel in the courts with droves of angry investors demanding answers. \r\nAmong the hundreds of millions of dollars now presumably lost in the ether, one transaction of perhaps… [+3783 chars]',
        },
        {
            source: {
                id: null,
                name: 'Marketwatch.com',
            },
            author: 'Aaron Hankin',
            title: 'Cryptos: This Canadian crypto trader sent $75,000 bitcoin to Quadriga’s exchange—then it went bust',
            description: 'The fallout from the Canadian cryptocurrency exchange QuadrigaCX saga continues to unravel in the courts with droves of angry investors demanding answers.',
            url: 'https://www.marketwatch.com/story/this-canadian-crypto-trader-sent-75000-bitcoin-to-quadrigas-exchangethen-it-went-bust-2019-03-25',
            urlToImage: 'http://s.marketwatch.com/public/resources/MWimages/MW-HF892_bitcoi_ZG_20190318144125.jpg',
            publishedAt: '2019-03-25T14:00:07Z',
            content: 'The fallout from the Canadian cryptocurrency exchange QuadrigaCX saga continues to unravel in the courts with droves of angry investors demanding answers. \r\nAmong the hundreds of millions of dollars now presumably lost in the ether, one transaction of perhaps… [+3783 chars]',
        },
        {
            source: {
                id: 'cnbc',
                name: 'CNBC',
            },
            author: "Sarah O'Brien",
            title: "Latest 'bad guy' rundown includes theft of client money and bitcoin scheme. Is your broker listed?",
            description: 'The Financial Industry Regulatory Authority recently banned 11 people from working in the securities industry and suspended 16.',
            url: 'https://www.cnbc.com/2019/03/25/bad-guy-broker-list-includes-theft-of-client-money-bitcoin-scheme.html',
            urlToImage: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/11/05/101172060-Tool-104821085.1910x1000.jpg',
            publishedAt: '2019-03-25T14:00:00Z',
            content: "He is accused of stealing nearly $1 million in investment money from two clients, according to the sheriff's office. Gaudet also is accused of using client funds intended for insurance policies to instead buy real estate for himself. He operated two business … [+1556 chars]",
        },
    ],
};
exports.default = data;

},{}]},{},[1]);
