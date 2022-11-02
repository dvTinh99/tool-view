import puppeteer from 'puppeteer';

async function newPage(url, cookies, flag) {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ["--no-sandbox"],
        executablePath: '/usr/bin/chromium-browser'
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
            // console.log('ran', ran);
        }
    });

    const links = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 1000,
            left: 100,
            behavior: 'smooth'
        });
    });

    await delay(getRandomArbitrary(5000, 7000));

    const links2 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
    });


    await delay(getRandomArbitrary(5000, 15000));

    const links3 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
    });

    await delay(getRandomArbitrary(6000, 12000));

    const links4 = await page.evaluate(resultsSelector => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

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
    });
}
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export default async function main(cookies, name) {
    var i = 0;
    while (true) {
        await newPage("url", cookies, name);
        var currentdate = new Date();
        console.log(name + ':' + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds() +' :time : ' + (++i));
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
// main(nghia3.cookies, 'nghia3');

//pm2 start test.js --name diana_3 --exp-backoff-restart-delay=100
