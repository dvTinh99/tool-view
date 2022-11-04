import puppeteer from 'puppeteer';

async function newPage(url, cookies, flag) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--no-sandbox"],
        // executablePath: '/usr/bin/google-chrome',
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


async function checkVideoDeXuat(page) {
    return await page.evaluate(flag => {
        var flag = false;
        const getElementByXpath = (path) => {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        // sau video-renderer là thứ tự video
        var _10Elment = [
            'https://www.youtube.com/watch?v=6dlCMjaOmtc',
            'https://www.youtube.com/watch?v=xIhHIIIXgKQ',
            'https://www.youtube.com/watch?v=bGC7QghdEpQ',
            'https://www.youtube.com/watch?v=yNXu0uuW0PU',
            'https://www.youtube.com/watch?v=wWWsqs8P5sI',
            'https://www.youtube.com/watch?v=evM6HvvPzkI',
            'https://www.youtube.com/watch?v=uQslJVcn83U',
            'https://www.youtube.com/watch?v=AeStpgFYAGk',
            'https://www.youtube.com/watch?v=eZhXHNj1fDQ'
        ]; // list url view

        var arr_element = [];
        for (let index = 1; index <= 10; index++) {
            var getElementByxPath = getElementByXpath("/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[2]/div/div[3]/ytd-watch-next-secondary-results-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-compact-video-renderer["+index+"]/div[1]/div/div[1]/a");

            // console.log(getElementByxPath.href);
            if (_10Elment.includes(getElementByxPath.href)) {
                const index = _10Elment.indexOf(getElementByxPath.href);
                _10Elment.splice(index, 1); 
                flag = true;
                console.log(flag);
                getElementByxPath.click();
            }
        }
        return flag;
    });
}

async function humanAction(page)
{
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
    // while (true) {
        await newPage("url", cookies, name);
        var currentdate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh'
        });
        console.log(name + ':' + currentdate +' :time : ' + (++i));
    // }
}


//pm2 start test.js --name diana_3 --exp-backoff-restart-delay=100
