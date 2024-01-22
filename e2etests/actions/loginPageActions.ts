import { Page, expect } from "@playwright/test"
import homePageLocators from "../locators/homePageLocators.json"
import loginPageLocators from "../locators/loginPageLocators.json"
import data from "../data/data.json"


export default class loginPageActions {

    page: Page



    constructor(page: Page) {
        this.page = page
    }

    async inputValidUsername() {
        await this.page.locator(loginPageLocators.username_txt).fill(data.validEmail)
    }

    async inputValidPassword() {
        await this.page.locator(loginPageLocators.password_txt).fill(data.validPassword)
    }

    async inputInvalidPassword() {
        await this.page.locator(loginPageLocators.password_txt).fill(data.invalidPassword)
    }

    async clcikButtonContinue() {
        await this.page.locator(loginPageLocators.continue_button).click();
    }

    async validateErrorMessage() {
        await expect(this.page.locator(loginPageLocators.errorLogin_message)).toBeVisible

    }

    async login() {
        await this.page.locator(homePageLocators.account_Button).click()
        await this.page.locator(loginPageLocators.username_txt).fill(data.validEmail)
        await this.page.locator(loginPageLocators.password_txt).fill(data.validPassword)
        await this.page.locator(loginPageLocators.continue_button).click();
    }


}