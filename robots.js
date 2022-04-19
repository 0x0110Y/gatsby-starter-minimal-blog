const path = require('path')
const fs = require('fs')
const fileNamePath = path.join(__dirname, "./public/sitemap/sitemap-0.xml");//1.5k
const xmlData = fs.readFileSync(fileNamePath).toString();
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
//const { url } = require('inspector');

const parser = new XMLParser();
const data = parser.parse(xmlData);

const robotstxt = require("generate-robotstxt");

let res = [];

data.urlset.url.map((o) => {
    if (o.loc.indexOf('/post/') > 0) {
        let loc = o.loc;
        let urls = loc.split('/');
        let paths = urls[urls.length - 1].split('-');

        let lang = paths[paths.length - 1];
        urls.splice(urls.length - 1, 1);
        let url = urls.join('/');
        if (url.indexOf(lang) < 0) {
            res.push(loc.replace('https://jlice.co', ''))
        }
    }
})


robotstxt({
    policy: [
        {
            userAgent: "Googlebot",
            allow: "/",
            disallow: res,
        },
        {
            userAgent: "OtherBot",
            allow: "/",
        },
        {
            userAgent: "*",
            allow: "/",
        },
    ],
    sitemap: "https://jlice.co/sitemap/sitemap-0.xml",
    host: "https://jlice.co/",
})
    .then((content) => {
        console.log(content);
        fs.writeFileSync('./static/robots.txt', content);

        return content;
    })
    .catch((error) => {
        throw error;
    });