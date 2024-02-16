import { Page, expect } from "@playwright/test"

import compareItemsPageLocators from '../locators/compareItemsPageLocators.json'


export default class compareItemsPageActions {

  page: Page


  constructor(page: Page) {
    this.page = page
  }


  async getNameFirstItem() {
    const name = await this.page.locator(compareItemsPageLocators.titleFirstItemCompared).textContent()
    console.log("the title of item 1 " + name)
    return name
  }

  async getNameSecondItem() {
    const name = await this.page.locator(compareItemsPageLocators.titleSecondItemCompared).textContent()
    console.log("the title of the item 2 " + name)
    return name
  }

  async validateSquareSpecifications() {
    const isVisibleSquareSpecifications = await this.page.locator(compareItemsPageLocators.squareSpecifications).isVisible()
    await expect(isVisibleSquareSpecifications).toEqual(true)
    console.log("is visible the square of specifications? " + isVisibleSquareSpecifications)
  }

}