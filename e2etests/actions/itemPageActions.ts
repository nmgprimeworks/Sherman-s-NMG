import { Page } from "@playwright/test"
import itemPageLocators from "..//locators/itemPageLocators.json"


export default class itemPageActions {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickToAddCart() {
        await this.page.locator(itemPageLocators.addToCart_button).click()
    }

    async addItemWishList() {
        await this.page.locator(itemPageLocators.addToWishList_button).click()
    }

    async getNameItem() {
        const name = await this.page.locator(itemPageLocators.titleItem_title).textContent()
        console.log("the title of item " + name)
        return name
    }

}