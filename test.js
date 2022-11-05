import puppeteer from 'puppeteer';
import humanAction from './human_action.js';
import checkVideoDeXuat from './checkDeXuat.js';
import { delay, getRandomArbitrary } from './lib.js';

async function newPage(url, cookies, flag) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        // args: ["--no-sandbox"],
        // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    });
    const page = await browser.newPage();

    await page.setCookie(...cookies);

    await page.goto('https://www.youtube.com/channel/UCbAnWE-1CfUgDrPetsh7hLw', {
        timeout: 0,
        waitUntil: 'domcontentloaded'
    });

    const links_0 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth'
        });
    });

    await delay(getRandomArbitrary(1000, 2000));

    await page.evaluate(resultsSelector => {
        var arr = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-grid-video-renderer');
        if (arr && arr.length > 0) {
            let ran = arr.length * Math.random();
            arr[ran | 0].click();
        }
    });

    await delay(getRandomArbitrary(1000, 2000));

    await humanAction(page);

    await delay(getRandomArbitrary(45000, 63000));
    
    // check video đề xuất 
    var flag = true;
    while(flag) {
        flag = await checkVideoDeXuat(page);
        
        await humanAction(page);
        await delay(getRandomArbitrary(45000, 60000));
        var currentdate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh'
        });
        console.log('deXuat' + ':' + currentdate);
    }
    
    await browser.close();
}



export default async function main(cookies, name) {
    var i = 0;
    // while (true) {
        await newPage("url", cookies, name);
        var currentdate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh'
        });
        console.log(name + ':' + currentdate +' :time : ' + (++i));
    // }
}


//pm2 start test.js --name diana_3 --exp-backoff-restart-delay=100
