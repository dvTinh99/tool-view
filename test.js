import puppeteer from 'puppeteer';

import dvtinh from './cookie/dvtinh.it.json' assert { type: "json" };
import diana from './cookie/diana.json' assert { type: "json" };
import awin from './cookie/awin.json' assert { type: "json" };
import man from './cookie/man.json' assert { type: "json" };
import nghia2 from './cookie/nghia2.json' assert { type: "json" };
import nghia3 from './cookie/nghia3.json' assert { type: "json" };
import dvtinh_it3 from './cookie/dvtinh_it3.json' assert { type: "json" };

async function newPage(url, cookies, flag) {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ["--no-sandbox"],
        executablePath: '/usr/bin/chromium-browser'
    });
    const page = await browser.newPage();

    await page.setCookie(...cookies);

    await page.goto('https://www.youtube.com/channel/UCbAnWE-1CfUgDrPetsh7hLw/videos', {
        timeout: 0,
    });

    const resultsSelector = '#search-input';
    await page.waitForSelector(resultsSelector);

    const links_0 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth'
        });
    }, resultsSelector);

    await delay(getRandomArbitrary(1000, 2000));

    const click = await page.evaluate(resultsSelector => {
        var video = document.getElementsByClassName('yt-simple-endpoint focus-on-expand style-scope ytd-rich-grid-media');

        var item = video[video.length * Math.random() | 0];
        item.click();

    }, resultsSelector);

    const links = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth'
        });
    }, resultsSelector);

    await delay(getRandomArbitrary(5000, 7000));

    const links2 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
    }, resultsSelector);


    await delay(getRandomArbitrary(5000, 15000));

    const links3 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
    }, resultsSelector);

    await delay(getRandomArbitrary(6000, 12000));

    const links4 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, resultsSelector);

    await delay(getRandomArbitrary(45000, 75000));
    await browser.close();
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

async function scrollDown(){
    return await page.evaluate(resultsSelector => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, resultsSelector);
}
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

async function main(cookies, name) {
    var i = 0;
    while (true) {
        await newPage("url", cookies, name);
        console.log(name + ' time : ' + (++i));
    }
}


// main(dvtinh.cookies, 'dvtinh');
// main(dvtinh_it3.cookies, 'dvtinh_it3');

// main(diana.cookies, 'diana_1');
// main(diana.cookies, 'diana_2');
// main(diana.cookies, 'diana_3');

// main(awin.cookies, 'awin');
// main(awin.cookies, 'awin_2');
// main(awin.cookies, 'awin_3');

// main(man.cookies, 'man');
// main(nghia2.cookies, 'nghia2');
main(nghia3.cookies, 'nghia3');

//pm2 start test.js --name diana_3 --exp-backoff-restart-delay=100
