import { delay, getRandomArbitrary } from './lib.js';
export default async function humanAction(page)
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