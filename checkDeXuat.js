import { delay, getRandomArbitrary } from './lib.js';
export default async function checkVideoDeXuat(page) {
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
                getElementByxPath.click();
            }
        }
        return flag;
    });
}