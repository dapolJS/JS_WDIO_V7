class WebdriverioPage {
    get buttonsCollectionsMainPage() { return $('.buttons_pzbO') }
    get buttonGetStarted() { return this.buttonsCollectionsMainPage.$$('.button')[0]}
}

module.exports = new WebdriverioPage