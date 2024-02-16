import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import compareItemsPageActions from "../actions/compareItemsPageActions"
import { expect } from "@playwright/test"

let titleFirstItm: string | null 
let titlesecondItm: string | null 
let titleFirstItmCompared 
let titleSecondItemCompared 
let homeActions: homePageActions
let compareItemsActions: compareItemsPageActions


Given('User searches items', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.searchesForAnItem()

  });

  Given('User adds two items to compare', async function () {
  titleFirstItm =   await homeActions.getNameFirstItem()
  titlesecondItm =   await homeActions.getNameSecondItem()
    await homeActions.addTwoItemsToCompare()
  });

  Given('User open the compare page', async function () {
    await homeActions.openComparePage()
    await getPage().waitForTimeout(2000);
  });

  Then('User should see the same product added to campare', async function () {
    compareItemsActions = new compareItemsPageActions(getPage())
    titleFirstItmCompared  = await compareItemsActions.getNameFirstItem()
    titleSecondItemCompared = await compareItemsActions.getNameSecondItem()
    await expect(titleFirstItm).toContain(titleFirstItmCompared)
    await expect(titlesecondItm).toContain(titleSecondItemCompared)
  });


  Then('User should see the specifications', async function () {
   await compareItemsActions.validateSquareSpecifications()
  });