import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import homePageActions from "../actions/homePageActions"
import contactUsPageLocators from '../locators/contactUsPageLocators.json'
import contactUsPageActions from "../actions/contactUsPageActions"
import { getPage } from "../utils/basePage"

let homeActions: homePageActions
let contactUsActions: contactUsPageActions


Given('User opens the contact us page', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openContactUsPage()
});

Given('User fills the form', async function () {
  contactUsActions = new contactUsPageActions(getPage())
  await contactUsActions.fillContactUsForm()
});

Given('User select the store', async function () {
 await contactUsActions.selectStore(contactUsPageLocators.normalIl_option)
});

Given('User click on button submit', async function () {
  await contactUsActions.clickSubmitButton()
});


Then('User should see the message We have received your query.', async function () {
  await contactUsActions.validateRequestSubmitted()
});



Given('User clik on woulk like a copy of this email', async function () {
  await contactUsActions.clickCheckCopyEmail()
});

Then('User validate the copy in the email', async function () {
  await contactUsActions.validateCopyEmail()
});