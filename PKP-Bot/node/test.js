const fs = require('fs')
const cheerio = require('cheerio')

const dict = arr => Object.assign(...arr.map( ([k, v]) => ({[k]: v}) ));

// const obj = dict([['name', 'Bob'], ['age', 42], ['breakfast', 'eggs']]);
// console.log(obj);

const content = fs.readFileSync('Intercity.htm', "utf8");
// console.log(content)

const $ = cheerio.load(content);
const tbody = $('tbody');
const trs = tbody.children('tr');
// console.log($.html(trs));

const kvs = trs.toArray().map((tr) => {
    const tds = $(tr).children('td');
    return [
        $(tds[0]).find('a').text().trim(), 
        $(tds[5]).find('span').text()
    ];
});

const d = dict(kvs);

console.log(d);
// console.log($.html(tbody))
