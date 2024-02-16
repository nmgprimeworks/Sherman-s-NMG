import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import contactUsPageActions from "../actions/contactUsPageActions"
import contactUsPageLocators from '../locators/contactUsPageLocators.json'
import { getPage } from "../utils/basePage"

let contactUsActions: contactUsPageActions

Given('User select the store peru', async function () {
    contactUsActions = new contactUsPageActions(getPage())
    await contactUsActions.selectStore(contactUsPageLocators.peruIl_option)
  });

  Given('User select the store peoria', async function () {
    contactUsActions = new contactUsPageActions(getPage())
    await contactUsActions.selectStore(contactUsPageLocators.peoriaIl_option)
  });

  Given('User select warehouse clearance center', async function () {
    contactUsActions = new contactUsPageActions(getPage())
    await contactUsActions.selectStore(contactUsPageLocators.wareHouse_option)
  });