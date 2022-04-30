class WebdriverioPage {
    get buttonsCollectionsMainPage() { return $('.buttons_pzbO') }
    get buttonGetStarted() { return this.buttonsCollectionsMainPage.$$('.button')[0]}
    get urlWebdriverioGettingStarted() { return "https://webdriver.io/docs/gettingstarted"}
    get urlWebdriverioMain() { return "https://webdriver.io/"}
}

module.exports = new WebdriverioPage



