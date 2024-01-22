import { Page } from "@playwright/test"
import itemPageLocators from "..//locators/itemPageLocators.json"


export default class itemPageActions{

    page:Page

    constructor(page:Page){
        this.page = page
    }

    async clickToAddCart(){
        await this.page.locator(itemPageLocators.addToCart_Button).click()  
    }

}