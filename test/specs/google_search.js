// Visada svarbu kaip importuoji failus, nes errorai tau nepasakys kur klaida dėl jų
const GooglePage = require("../pageobjects/google.page");
// iskelti i page objectus timeouta
const short_timeout = 1000
// prideti expect i kiekviena testuka

describe('Google Suite', () => {
    it('Should load google page', async () => {
        browser.url(GooglePage.google_url)
        browser.maximizeWindow()
        await browser.pause(short_timeout)
    });
    it('Google cookies accepted', async () => {
        await GooglePage.google_cookies.toBeClickable
        await GooglePage.google_cookies.click()
    });
    it('Search input webdriverio', async () => {
        await GooglePage.google_search_input.addValue('webdriverio')
        browser.keys("Enter")
        await browser.pause(short_timeout)
    });
    it('Select webdriverio page', async () => {
        await GooglePage.search_wdio.toBeClickable
        await GooglePage.search_wdio.click()
        await browser.pause(short_timeout * 30)        
    });
    it('Webdriverio getting started button', () => {
        // click on wdio getting started button

    });
});