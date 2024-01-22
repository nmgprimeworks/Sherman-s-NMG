import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage";
import { expect } from "@playwright/test";
import homePageActions from "../actions/homePageActions";
import loginPageActions from "../actions/loginPageActions";
import myAccountPageActions from "../actions/myAccountPageActions";
import data from '../data/data.json'


let homeActions: homePageActions
let loginActions: loginPageActions
let myAccountActions: myAccountPageActions


Given('User visit the sherman website',async function () { 
  await getPage().goto(data.URL)
   await getPage().waitForTimeout(1000);
  });


  When('User writes the valid username',async  function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openLoginPage()
   
    loginActions = new loginPageActions(getPage())
    await loginActions.inputValidUsername()
    
  });


  When('User writes the valid password',async  function () {

    await loginActions.inputValidPassword()
    
  });


  When('User click continue button',async  function () {
    await loginActions.clcikButtonContinue()
  });


  Then('User should see The tittle My account',async function () {
    myAccountActions = new myAccountPageActions(getPage())
    await myAccountActions.validateMyAccountTittle()
    await getPage().waitForTimeout(2000);
  });


  When('User writes the invalid password', async function () {
    await loginActions.inputInvalidPassword()
  });

  Then('User should see error message wrong email or password', async function () {
    await loginActions.validateErrorMessage()
    await getPage().waitForTimeout(2000);
  });
