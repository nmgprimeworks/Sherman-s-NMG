import { Page } from "@playwright/test"
import homePageLocators from '../locators/homePageLocators.json'

export default class homePageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }

    async openLoginPage() {
        await this.page.locator(homePageLocators.account_Button).click()
    }

    async lookForItem() {
        await this.page.locator(homePageLocators.search_Button).fill('furniture')
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => {
            window.scrollBy(0, 50)
        })
        await this.page.locator(homePageLocators.itemSelected_Button).click()
        await this.page.waitForTimeout(1000);
    }

}