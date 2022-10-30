import puppeteer from 'puppeteer';
import expect from 'expect';

import dvtinh from './cookie/dvtinh.it.json' assert { type: "json" };
import diana from './cookie/diana.json' assert { type: "json" };
import awin from './cookie/awin.json' assert { type: "json" };
// console.log('dvtinh', dvtinh.cookies);

async function newPage(url, cookies, flag)
{
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setCookie(...cookies);

    await page.goto(url, {
        timeout:0,
    });

    const resultsSelector = '#search-input';
    await page.waitForSelector(resultsSelector);

    // await page.type('#search-input  ', 'Lost Sky Fearless pt II feat Chris Linton NCS Release motivation');


    await delay(getRandomArbitrary(10000, 20000));
    const links = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth'
        });
        console.log('1');
        
    }, resultsSelector);

    await delay(getRandomArbitrary(5000, 7000));

    const links2 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
        console.log('2');
        
    }, resultsSelector);


    await delay(getRandomArbitrary(5000, 15000));

    const links3 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
        console.log('3');
        
    }, resultsSelector);

    await delay(getRandomArbitrary(6000, 12000));

    const links4 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        console.log('3');
        
    }, resultsSelector);

    //watch video
    // await autoScroll(page);

    await delay(getRandomArbitrary(60000, 120000));
    await browser.close();
    
    // expect(responses.get('one-style.css').fromCache()).toBe(false);
    
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function removeCache(page)
{
    // reload without cache
    await page.reload({waitUntil: 'networkidle2'});
    // expect(responses.get('one-style.css').fromCache()).toBe(true);

    await page.setCacheEnabled(false);
    await page.reload({waitUntil: 'networkidle2'});
}

async function main(cookies, name){
    var i = 0;
    var arr = [
        'https://www.youtube.com/watch?v=uQslJVcn83U&ab_channel=Motivation',
        'https://www.youtube.com/watch?v=bGC7QghdEpQ&ab_channel=Motivation',
        'https://www.youtube.com/watch?v=evM6HvvPzkI&ab_channel=Motivation',
        'https://www.youtube.com/watch?v=eZhXHNj1fDQ&ab_channel=Motivation',
        'https://www.youtube.com/watch?v=yNXu0uuW0PU&ab_channel=Motivation',
        'https://www.youtube.com/watch?v=AeStpgFYAGk&ab_channel=Motivation',
    ];

    var item = arr[Math.floor(Math.random()*arr.length)];
    while(true) {
        // await newPage('https://www.youtube.com/watch?v=Fj22CSuQJmc&ab_channel=FUNVlogs', diana.cookies, 'diana');
        await newPage(item, cookies, name);
        console.log(name + ' time : ' + (++i));
    }
}


main(dvtinh.cookies, 'dvtinh');
main(diana.cookies, 'diana');
main(awin.cookies, 'awin');