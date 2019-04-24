const jsdom = require("jsdom");
const express = require("express");
const app = express();

const { JSDOM } = jsdom;
const url = 'urlToParseGoHere';
const options = {
  referrer: "https://example.com/"
}

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening on 3000'));

app.get('/search', (req, res) => {
  JSDOM.fromURL(url, options).then(dom => {
    const doc = dom.window.document;
   
    const data = {  };
    res.json(data);
  });
});



