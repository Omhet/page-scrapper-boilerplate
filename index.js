const jsdom = require("jsdom");
const express = require("express");
const app = express();

const { JSDOM } = jsdom;
const url = 'http://www.conjugation-fr.com/conjugate.php?verb=%etre';
const options = {
  referrer: "https://example.com/"
}

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening on 3000'));

app.get('/conj', (req, res) => {
  JSDOM.fromURL(url, options).then(dom => {
    const presentText = dom.window.document.getElementsByClassName('arial-13-gris')[0].textContent;
    const lines = presentText.split('\n');
    const present = {
      header: lines[1],
      conjs: {
        je: getVerb(lines[3]),
        tu: getVerb(lines[4]),
        il: getVerb(lines[5]),
        nous: getVerb(lines[6]),
        vous: getVerb(lines[7]),
        ils: getVerb(lines[8])
      }
    };
    console.log(present);
    const data = { present };
    res.json(data);
  });
});

function getVerb(line) {
  return line.slice(line.lastIndexOf(' ') + 1);
}



