const {test, expect} = require('@playwright/test')
const {InvalidLogin} = require('../page_objects/invalid_login')

// test('First playwright test', async ({browser})=>{
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto("https://parabank.parasoft.com/");
// })
test('First test', async ({page})=>{
    await page.goto("https://parabank.parasoft.com/");
    let title = await page.title();
    console.log(title)
    // await expect(page).toHaveTitle('ParaBank');
    let username = page.locator("[type='text']");
    let password = page.locator("[type='password']");
    await username.fill('Shubham');
    // await password.fill('test');
    await page.locator("[type='submit']").click();
    let error = await page.locator(".error");
    console.log(await error.textContent());
    await expect(error).toContainText("Please enter a username and password.");
    

    // console.log(await username.textContent());
    // await expect(username).toContainText('Shubham');

});

test.only('Test with page object', async ({page}) => {
    const invalid_login = new InvalidLogin(page);
    await invalid_login.goto();
    await invalid_login.invalidLoginTest();
    await expect(invalid_login.error).toContainText("Please enter a username and password.");

})