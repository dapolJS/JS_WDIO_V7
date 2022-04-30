const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('Google', async () => {
        await browser.url('https://www.google.com/')
        await browser.pause(1000)
        // const sutinku = id="L2AGLb"
        const click_sutinku = $(`[id="L2AGLb"]`)
        click_sutinku.click()
        await browser.pause(1000)

    });
});



