/*
Input field - type
Click on an element
How do we make the locator unique
How to handle radio button, check box
How do we get the text value from an element
Write assertions for radio, checkbox, element is displayed in the page
*/

// import test and expect functions from the Playwright/test module
// test()- will help in writing test case in PW
// expect()- will help in writing assertions for expected results in PW

// first() - returns locator to the first matching element
// last() - returns locator to the last matching element
// nth() - Returns locator to the nth matching element

const {test, expect} = require('@playwright/test')

test('verifying the practice form', async ({ browser }) => {
    const constant = await browser.newContext();
    const page = await constant.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page.getByText('Student Registration Form')).toBeVisible();

    await page.locator("#firstName").fill("First123");
    await page.getByPlaceholder('Last Name').fill('Last123');
    // await page.locator("#lastName").fill("Last123");

    await page.locator("#userEmail").fill("testuser@gmail.com");
    // await page.locator("gender-radio-2").click();
   // await page.getByLabel('Female').click();
    await page.locator("#userNumber").fill("1234567890");
    await page.locator('.subjects-auto-complete__value-container').click();
    await page.keyboard.type('Maths');
    await page.waitForTimeout(5000); 
    await page.getByLabel('Sports').check();
    await expect(page.getByLabel('Sports')).toBeChecked();

    //await page.locator('#currentAddress').fill('Test Address');
    await page.getByPlaceholder('Current Address').fill('Test Address');

});