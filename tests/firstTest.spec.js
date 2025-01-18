const {test, expect} = require('@playwright/test')

test.only("First test case", async ({ browser }) => {
    // Create a browser context
    const constant = await browser.newContext();
    const page = await constant.newPage();

    await page.goto("https://practicetestautomation.com/practice-test-login/");
   // await expect(page.getByRole("heading", {name: 'Test login'})).toBeVisible();
    await expect(page.getByText('Test login')).toBeVisible();
    //await page.locator("input#username").fill("student");
    await page.getByLabel('Username').fill("student");
    await page.locator("input#password").fill("Password123");
    //await page.locator("button#submit").click();
    await page.getByRole('button', {name: 'Submit'}).click();

});

test("First test case1", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click();
});