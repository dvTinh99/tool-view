import puppeteer from 'puppeteer';
import expect from 'expect';

import dvtinh from './cookie/dvtinh.it.json' assert { type: "json" };
import diana from './cookie/diana.json' assert { type: "json" };
// console.log('dvtinh', dvtinh.cookies);

async function newPage(url, cookies, flag)
{
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setCookie(...cookies);

    await page.goto(url);

    //watch video
    var i = 1;
    while(true) {
        await delay(60000);
        removeCache(page);
        console.log(flag + 'time : ' + i);
        i ++;
    }
    
    // expect(responses.get('one-style.css').fromCache()).toBe(false);
    
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
newPage('https://www.youtube.com/watch?v=Fj22CSuQJmc', diana.cookies, 'diana');
newPage('https://www.youtube.com/watch?v=Fj22CSuQJmc', dvtinh.cookies, 'dvtinh');