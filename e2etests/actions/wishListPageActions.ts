import { Page, expect } from "@playwright/test"
import { getPage } from "../utils/basePage"
import wishListPageLocators from '../locators/wishListPageLocators.json'
import homePageActions from "../actions/homePageActions"

let homeActions: homePageActions

export default class wishListPageActions {

    page: Page

    constructor(page: Page) {
        this.page = page
    }



    async removeItemWishList() {
        await this.page.locator(wishListPageLocators.removeItemWishList_button).click()
        await this.page.locator(wishListPageLocators.yesRemoveItem_button).click()
        await this.page.waitForTimeout(1000)

    }
    async getNameItem() {
        const name = await this.page.locator(wishListPageLocators.nameItem_title).textContent()
        console.log("the title of item " + name)
        return name
    }


}