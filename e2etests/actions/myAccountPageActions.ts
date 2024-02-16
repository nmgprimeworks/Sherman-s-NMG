import { Page, expect } from "@playwright/test"
import myAccountPageLocators from "../locators/myAccountPageLocators.json"

export default class myAccountPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }

    async validateMyAccountTittle() {
        await expect(this.page.locator(myAccountPageLocators.myAccount_tittle)).toBeVisible

    }




}