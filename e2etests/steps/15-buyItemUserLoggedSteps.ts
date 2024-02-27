import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import loginPageActions from "../actions/loginPageActions"
import itemPageActions from "../actions/itemPageActions"
import reviewShoppingPageActions from "../actions/reviewShoppingCartPageActions"
import checkOutPageActions from "../actions/checkOutPageActions"; 


let homeActions: homePageActions
let loginActions: loginPageActions
let itemActions: itemPageActions
let reviewShoppingCartActions: reviewShoppingPageActions
let checkOutActions: checkOutPageActions



When('User logs in website', async function () {
  loginActions = new loginPageActions(getPage())
  await loginActions.login()
  await getPage().waitForTimeout(3000)
 
  });

  When('User searches and adds an item to cart', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.searchAndSeleectAnItem()

    itemActions = new itemPageActions(getPage())
    await itemActions.clickToAddCart()
    await getPage().waitForTimeout(2000)

    reviewShoppingCartActions = new reviewShoppingPageActions(getPage())
    await reviewShoppingCartActions.continueShopping()
    await getPage().waitForTimeout(2000)
  });

  When('User fills out the form', async function () {
    checkOutActions = new checkOutPageActions(getPage())
    await checkOutActions.fillFormBilling()
    await getPage().waitForTimeout(2000)
  });

  When('User makes the purchase', async function () {
    await checkOutActions.payWithCreditCard()
  }); 


  Then('User should see the id of the purchase', async function () {
    await checkOutActions.validatePurchase()
    ////h2[text()='Thank you for your order!']
    //(//td[@style='padding: 10px; border: 1px solid rgba(206, 206, 206, 1); font-size: 12px; font-family: Verdana, Geneva, Tahoma, sans-serif'])[1]
  });