import puppeteer from 'puppeteer';
import expect from 'expect';

import dvtinh from './cookie/dvtinh.it.json' assert { type: "json" };
import diana from './cookie/diana.json' assert { type: "json" };
// console.log('dvtinh', dvtinh.cookies);

async function newPage(url, cookies, flag)
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setCookie(...cookies);

    await page.goto(url);
    await page.setViewport({
        width: 1200,
        height: 800
    });

    //watch video
    await autoScroll(page);

    await delay(getRandomArbitrary(60000, 120000));
    await browser.close();
    
    // expect(responses.get('one-style.css').fromCache()).toBe(false);
    
}
async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
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
        'https://www.youtube.com/watch?v=uQslJVcn83U',
        'https://www.youtube.com/watch?v=xIhHIIIXgKQ',
    ];

    var item = arr[Math.floor(Math.random()*arr.length)];
    while(true) {
        // await newPage('https://www.youtube.com/watch?v=Fj22CSuQJmc&ab_channel=FUNVlogs', diana.cookies, 'diana');
        await newPage(item, cookies, name);
        console.log('time : ' + (i++));
    }
}


main(dvtinh.cookies, 'dvtinh');
// main(diana.cookies, 'diana');