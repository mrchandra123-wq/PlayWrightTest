import {test} from '@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage.js'
import { HomePage } from '../PageObjects/HomePage.js'
import { YourCartPage } from '../PageObjects/YourCartPage.js'
import { YourInfoPage } from '../PageObjects/YourInfoPage.js'
import { OverviewPage } from '../PageObjects/OverviewPage.js'
import { CompletePage } from '../PageObjects/CompletePage.js'

test('E2E Scenario 1', async ({page}) => {
   await page.pause();
const loginPageInstance = new LoginPage(page);
const homePageInstance = new HomePage(page);
const yourCartPageInstance = new YourCartPage(page);
const overviewPageInstance = new OverviewPage(page);
const yourInfoPageInstance = new YourInfoPage(page);
const completePageInstance = new CompletePage(page);

await loginPageInstance.openApplication();
console.log('Sauce demo application is opened');
loginPageInstance.loginToApplication('standard_user', 'secret_sauce');

await page.waitForTimeout(1000);


await homePageInstance.addProductToCart();
console.log('Product added to card');

await page.waitForTimeout(1000);


await yourCartPageInstance.checkoutOperation();
console.log('Checkout operation done');

await page.waitForTimeout(5000);

yourInfoPageInstance.fillForm('ccccc1234c', 'rrrrr1234', '555555');
console.log('Form Filled');

overviewPageInstance.placeOrder();

completePageInstance.navigateBackToHome();
console.log('navigated to home page');
//await page.waitForTimeout(5000);
await homePageInstance.logoutFromApplication();
console.log('Logout done');

await loginPageInstance.closeApplication();
console.log('Sauce demo application is closed');
})