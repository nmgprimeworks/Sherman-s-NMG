import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import wishListPageActions from "../actions/wishListPageActions"
import itemPageActions from "../actions/itemPageActions"
import { expect } from "@playwright/test"


let homeActions: homePageActions
let wishListActions: wishListPageActions
let itemActions: itemPageActions
let titleItem: string | null
let titleItemCompared


When('User searches an item', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.searchAndSeleectAnItem()
    itemActions = new itemPageActions(getPage())
    titleItem = await itemActions.getNameItem()

});

When('User adds an item to wish list', async function () {
    await itemActions.addItemWishList()
    await homeActions.openWishListPage()
});

Then('User should see item added in the wish list page', async function () {
    wishListActions = new wishListPageActions(getPage())
    titleItemCompared  = await wishListActions.getNameItem()
    await expect(titleItem).toContain(titleItemCompared)
    await wishListActions.removeItemWishList()
});