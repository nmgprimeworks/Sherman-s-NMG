import { Page, expect } from "@playwright/test"
import checkOutPageLocators from "../locators/checkOutPageLocators.json"
import data from "../data/data.json"
import { getPage } from "../utils/basePage";

export default class checkOutPageActions{

    page:Page

    constructor(page:Page){
        this.page = page
    }

    async fillFormBilling() {
        await this.page.locator(checkOutPageLocators.firstName_txt).fill(data.billingForm.firstName)
        await this.page.locator(checkOutPageLocators.lastName_txt).fill(data.billingForm.lastName)
        await this.page.locator(checkOutPageLocators.phoneNum_txt).fill(data.billingForm.phoneNum)
        const continueButton = await this.page.locator(checkOutPageLocators.continue_button)
        continueButton.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(1000);
        await this.page.locator(checkOutPageLocators.continue_button).click()
        await this.page.locator(checkOutPageLocators.continueStartPickup_button).click()
        await this.page.waitForTimeout(1000);

    }

    async payWithCreditCard() {
        await this.page.locator(checkOutPageLocators.payCreditCard_radioButton).click()
        await this.page.locator(checkOutPageLocators.numberCreditCard_txt).fill(data.formPaymemt.numberCreditcard)
        await this.page.locator(checkOutPageLocators.ccv_txt).fill(data.formPaymemt.numberCcv)
        await this.page.locator(checkOutPageLocators.expMonth_lst).selectOption({ label: data.formPaymemt.expiryMonth })
        await this.page.waitForTimeout(1000);
        await this.page.locator(checkOutPageLocators.expYear_lst).selectOption({ label: data.formPaymemt.expiryYear })
        await this.page.waitForTimeout(1000);
        await this.page.locator(checkOutPageLocators.continuePaymentInformation_button).click()
        await this.page.waitForTimeout(1000);
        const completePurchase = await this.page.locator(checkOutPageLocators.completePurchase_button)
        completePurchase.scrollIntoViewIfNeeded()
        await this.page.locator(checkOutPageLocators.termsAgree_checkBox).click()
        await this.page.locator(checkOutPageLocators.completePurchase_button).click()
        await this.page.waitForTimeout(1000);

    }

    async validatePurchase() {
        const idPurchase = await this.page.locator(checkOutPageLocators.id_message).textContent
        await getPage().goto("https://yopmail.com/es/")
        await this.page.waitForTimeout(3000);
        await this.page.locator(checkOutPageLocators.emailYopmail_txt).fill(data.validEmail)
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        const idEmail = await this.page.locator(checkOutPageLocators.idEmail_message).textContent
        console.log(idPurchase)
        console.log(idEmail)
        expect(idPurchase).toEqual(idEmail)

    }
    

}