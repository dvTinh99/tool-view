const puppeteer = require('puppeteer');

async function newPage(url)
{
    const cookies = [
        {
            "domain": ".youtube.com",
            "hostOnly": false,
            "httpOnly": true,
            "name": "YSC",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": true,
            "storeId": "0",
            "value": "CRAOIJxiWb8"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1682524400.3774,
            "hostOnly": false,
            "httpOnly": true,
            "name": "VISITOR_INFO1_LIVE",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "4ebteS7-Ge8"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1667011441.628487,
            "hostOnly": false,
            "httpOnly": true,
            "name": "GPS",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "1"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569659.74617,
            "hostOnly": false,
            "httpOnly": false,
            "name": "PREF",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "tz=Asia.Saigon"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267823,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "QAh51r1TmMIutAUeqt4c-Q8XYT9ryBWvc7R5WjR0Br2FYQcwjHdms65lhK-e0nXLnXmXdw."
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267881,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "QAh51r1TmMIutAUeqt4c-Q8XYT9ryBWvc7R5WjR0Br2FYQcw4PLsyqA0Lnq9LUlz50BWKw."
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267927,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "QAh51r1TmMIutAUeqt4c-Q8XYT9ryBWvc7R5WjR0Br2FYQcwjd5_2oxeZKqcMAIJ-DzYRQ."
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267951,
            "hostOnly": false,
            "httpOnly": true,
            "name": "HSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "AX6vCg2ifA3DI0L1e"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267971,
            "hostOnly": false,
            "httpOnly": true,
            "name": "SSID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AGHEqyKLba-548bT0"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.267989,
            "hostOnly": false,
            "httpOnly": false,
            "name": "APISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "hglrs3FWM6f1fY70/APtIPMlbnJbGvQIxG"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.268008,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SAPISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "D8pd85UEn-khuLhu/ATuOW7a6GWmso1qzG"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.268029,
            "hostOnly": false,
            "httpOnly": false,
            "name": "__Secure-1PAPISID",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "D8pd85UEn-khuLhu/ATuOW7a6GWmso1qzG"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.268049,
            "hostOnly": false,
            "httpOnly": false,
            "name": "__Secure-3PAPISID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "D8pd85UEn-khuLhu/ATuOW7a6GWmso1qzG"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1701569652.394568,
            "hostOnly": false,
            "httpOnly": true,
            "name": "LOGIN_INFO",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AFmmF2swRQIgdYFmTBWskNLjYg7hImipP5-Ebaz81-GhEPbEEueXMucCIQD5FbU0VeufrvBn7pfCEb-GW__jtW1Ikl9krcROLJWHkA:QUQ3MjNmeGswcVFuVFkzVENUOGVTZ2h5Vmo2Q1labVhEOG01UjlYcmpFRDRoX09lcWNPNzdVdlBrZEdxNWNucmcybWJQOHJCU2ZNWUhYckNod1RmLWRDYmJ1NE50blVjcUowZUZPaXVIRUd4WHJzWFBUR3RVcTFKQlAxaHo4TDZ4Sno0VXI5OWcydGluaXFodDVjSEFhb3RxcFlkOFFKYWJn"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1667010260,
            "hostOnly": false,
            "httpOnly": false,
            "name": "CONSISTENCY",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "APAR8nshySDcuSGEHLVQymC892LXGNe_aniE5FftiSabTQEDuY67ALe4r__6FDo2SEgGPja3IgeF228USqUMKPwc1iWXRi18G2xFdBy_ncm0IK92N0HpSfiqizRIw3fpJs4FvtaObCWmt9cmxytWr7SZ"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1698545660.052207,
            "hostOnly": false,
            "httpOnly": false,
            "name": "SIDCC",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "AIKkIs03QSc4xBDu_lMUfYzFkKF69o81C0qER5zrP8v98PWSiRthSznr11izlHoOI64_LVl8"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1698545660.052274,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSIDCC",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AIKkIs3eV95rCU7G4DLCHyOEnPH71l8eVMcBQhvgVi2VAHalgy_bFvEysa3inusspTldi8_YOQ"
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1698545660.052306,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSIDCC",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AIKkIs3sJEKhnhmgGKzlJI4wQjlqLuqWxps9ijSG7KUgnV9qUgZHKNF5saagiy2qDsxymZKInA"
        }
    ];
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setCookie(...cookies);

    await page.goto(url);
    // await page.screenshot({path: 'example.png'});

    // await browser.close();
}

newPage('https://www.youtube.com/watch?v=wNkKEG5ztSU&ab_channel=HideMyAss%21');