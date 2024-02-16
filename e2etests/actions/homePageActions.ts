import { Page } from "@playwright/test"
import homePageLocators from '../locators/homePageLocators.json'
import data from "../data/data.json"


export default class homePageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }

    async openLoginPage() {
        await this.page.locator(homePageLocators.account_button).click()
    }

    async searchAndSeleectAnItem() {
        await this.page.locator(homePageLocators.search_button).fill('furniture')
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => {
            window.scrollBy(0, 50)
        })
        await this.page.locator(homePageLocators.itemSelected_button).click()
        await this.page.waitForTimeout(1000);
    }

    async searchesForAnItem() {
        await this.page.locator(homePageLocators.search_button).fill(data.searches.bottonRefrigerator)
        await this.page.keyboard.press('Enter');

    }

    async openWishListPage() {
        await this.page.locator(homePageLocators.wishListPage_button).click()
    }

    async getNameItem(locator: string) {
        const name = await this.page.locator(locator).textContent()
        return name
    }

    async getNameFirstItem() {
        const locatorTitleFirstItem = await this.page.locator(homePageLocators.titleFirstItem_title)
        locatorTitleFirstItem.scrollIntoViewIfNeeded()
        const name = await this.page.locator(homePageLocators.titleFirstItem_title).textContent()
        console.log("este es el titulo del item 1 " + name)
        return name
    }

    async getNameSecondItem() {
        const name = await this.page.locator(homePageLocators.titleSecondItem_title).textContent()
        console.log("este es el titulo del item 2 " + name)
        return name
    }


    async openComparePage() {
        await this.page.locator(homePageLocators.goTocompare_button).click()
    }

    async addTwoItemsToCompare() {
        const compareButton = await this.page.locator(homePageLocators.compareFirstItem_checkBox)
        compareButton.scrollIntoViewIfNeeded()
        await this.page.locator(homePageLocators.compareFirstItem_checkBox).click()
        await this.page.locator(homePageLocators.compareSecondItem_checkBox).click()
    }


    async openContactUsPage() {
        await this.page.locator(homePageLocators.contactUsPage_button).click()
    }

}