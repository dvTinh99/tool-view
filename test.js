import puppeteer from 'puppeteer';

import dvtinh from './cookie/dvtinh.it.json' assert { type: "json" };
import diana from './cookie/diana.json' assert { type: "json" };
import awin from './cookie/awin.json' assert { type: "json" };
import man from './cookie/man.json' assert { type: "json" };
import dvtinh_it3 from './cookie/dvtinh_it3.json' assert { type: "json" };
// console.log('dvtinh', dvtinh.cookies);

async function newPage(url, cookies, flag)
{
    const browser = await puppeteer.launch({headless: true, 
        defaultViewport: null,
        args: ["--no-sandbox"],
        executablePath: '/usr/bin/chromium-browser'
    });
    const page = await browser.newPage();
    await page.setCookie(...cookies);

    await page.goto('https://www.youtube.com/channel/UCbAnWE-1CfUgDrPetsh7hLw/videos', {
        timeout:0,
    });

    const resultsSelector = '#search-input';
    await page.waitForSelector(resultsSelector);


    await delay(getRandomArbitrary(3000, 5000));
    

    const click = await page.evaluate(resultsSelector => {
        const video = [
            [186,466],
            [329,466],
            [619,477],
        ];
    
        var item = video[Math.floor(Math.random()*video.length)];
        document.elementFromPoint(item[0], item[1]).click();
        // document.elementFromPoint(329, 466).click();
        // document.elementFromPoint(619, 477).click();
    });
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

    await delay(getRandomArbitrary(60000, 120000));
    await browser.close();
    
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function main(cookies, name){
    var i = 0;
    // var item = arr[Math.floor(Math.random()*arr.length)];
    while(true) {
        await newPage("url", cookies, name);
        console.log(name + ' time : ' + (++i));
    }
}


// main(dvtinh.cookies, 'dvtinh');
main(diana.cookies, 'diana');
main(awin.cookies, 'awin');
// main(man.cookies, 'man');
// main(dvtinh_it3.cookies, 'dvtinh_it3');