import { Page, expect } from "@playwright/test"
import contactUsPageLocators from '../locators/contactUsPageLocators.json'
import checkOutPageLocators from "../locators/checkOutPageLocators.json"
import data from '../data/data.json'
import { getPage } from "../utils/basePage"


export default class contactUsPageActions {

    page: Page
 

    constructor(page: Page) {
        this.page = page
    }

    async fillContactUsForm() {
        await this.page.locator(contactUsPageLocators.name_text).fill(data.formContactUs.name)
        await this.page.locator(contactUsPageLocators.email_text).fill(data.formContactUs.email)
        await this.page.locator(contactUsPageLocators.productSku_text).fill(data.formContactUs.priductSku)
        await this.page.locator(contactUsPageLocators.phone_txt).fill(data.formContactUs.phone)
        await this.page.locator(contactUsPageLocators.city_txt).fill(data.formContactUs.city)
        await this.page.locator(contactUsPageLocators.productDetails_txt).fill(data.formContactUs.productDetails)
        await this.page.locator(contactUsPageLocators.store_lst).click()
        await this.page.locator(contactUsPageLocators.normalIl_option).click()
        await this.page.locator(contactUsPageLocators.message_txt).fill(data.formContactUs.message)
     
    }

    async selectStore(locator: string) {
        await this.page.locator(contactUsPageLocators.store_lst).click()
        await this.page.locator(locator).click()
       
    }

    async clickSubmitButton() {
        await this.page.locator(contactUsPageLocators.submit_button).click()
     
    }

    async clickCheckCopyEmail() {
        await this.page.locator(contactUsPageLocators.copyEmail_checkBox).click()
     
    }

    async validateRequestSubmitted() {
       const name = await this.page.locator(contactUsPageLocators.name_text)
       name.scrollIntoViewIfNeeded()
       const isVisibleMessage = await this.page.locator(contactUsPageLocators.queryReceived_message).isVisible()
       await expect(isVisibleMessage).toEqual(true)
       await getPage().waitForTimeout(3000)
    }

    async validateCopyEmail() {
        await getPage().goto("https://yopmail.com/es/")
        await this.page.waitForTimeout(1000);
        await this.page.locator(checkOutPageLocators.emailYopmail_txt).fill(data.validEmail)
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        const isVisibleInquiry = await this.page.locator(contactUsPageLocators.inquiryReceivedEmail_message).textContent()
        console.log("copy email " + isVisibleInquiry)
        await expect(isVisibleInquiry).toContain("Inquiry From Website")
     }


}