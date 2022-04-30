// Visada svarbu kaip importuoji failus, nes errorai tau nepasakys kur klaida dėl jų
const GooglePage = require("../pageobjects/google.page");
const webdriverioPage = require("../pageobjects/webdriverio.page");
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
        await browser.pause(short_timeout)        
    });
    it('Webdriverio getting started button', async () => {
        // click on webdriverio pages getting started button
        await webdriverioPage.buttonGetStarted.isClickable()
        await webdriverioPage.buttonGetStarted.click()
        expect(await browser.getUrl()).toEqual(webdriverioPage.urlWebdriverioGettingStarted)
        await browser.back()
        expect(await browser.getUrl()).toEqual(webdriverioPage.urlWebdriverioMain)
        await browser.pause(short_timeout * 2)
        // TODO: add expects and add tests for every button on main page that are next to "Getting started"
    });
});