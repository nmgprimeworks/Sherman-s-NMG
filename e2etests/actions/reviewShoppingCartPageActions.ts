import { Page } from "@playwright/test"
import reviewShoppingCartPageLocators from "../locators/reviewShoppingCartPageLocators.json"
import data from "../data/data.json"


export default class reviewShoppingPageActions {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async continueShopping() {
        await this.page.locator(reviewShoppingCartPageLocators.addZipCode_txt).fill(data.zipCode)
        await this.page.waitForTimeout(1000);
        await this.page.locator(reviewShoppingCartPageLocators.checkZipCode_button).click()
        await this.page.waitForTimeout(1000);
        await this.page.locator(reviewShoppingCartPageLocators.wareHousePickUp_radioButton).click()
        await this.page.waitForTimeout(1000);
        await this.page.evaluate(() => {
            window.scrollBy(0, 400)
        })
        await this.page.locator(reviewShoppingCartPageLocators.StartCheckout_button).click()
    }



}