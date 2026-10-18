import {test, expect} from '@playwright/test'

test.only('Handle E2E Scenario 1', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.pause();


//login to application
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');

await page.locator('[data-test="login-button"]').click();

//add product to cart
await page.locator('#add-to-cart-sauce-labs-backpack').click();

//click on cart logo
await page.locator('#shopping_cart_container').click();

//click on checkout button
await page.locator('#checkout').click();

//fill the form
await page.locator('#first-name').fill('ccccc1234c');
await page.locator('#last-name').fill('rrrrr1234');
await page.locator('#postal-code').fill('555555');
await page.locator('#continue').click();

//finish order
await page.locator('#finish').click();

//Back to home
await page.locator('#back-to-products').click();

//logout from the application
await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click();

//close the browser
await page.close();

console.log('All actions done');
});

test('Amazon site', async ({page}) => {
    await page.goto('https://www.amazon.com/');
    await page.pause();

    await page.locator('//span[@id="nav-cart-count"]').click();
    await page.locator('//span[@class="a-button a-button-primary"]').click();
    await page.locator('#ap_email_login').fill("cs123@yahoo.com");
    await page.locator('//input[@type="submit"]');
    console.log("all executed");
});