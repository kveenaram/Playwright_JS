/* Types of Drop Down
1. Static drop down - values wont change
2. Dynamic drop down - values change
practice site - https://practice.expandtesting.com/dropdown
https://demoqa.com/select-menu

- select tag <select> - dropdown
- non select tag - (div, span, li, ul) dropdown

DD developed using <select> tag
Steps:
1. locate the drop down element
2. get the options of the drop down - selectOption() -- selectOption({label, name, value}) - playwright specific

DD developed using Non <select> tag
Steps:
1. locate the drop down element and cick on that to open the DD element
2. cick on the elemnt that we are trying to select from the DD

*/

const { test, expect } = require('@playwright/test');

test ('dropdown developed usig select tag', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
    // locate the drop down element
    await page.locator("#country").selectOption("AL");
    await page.waitForTimeout(1000);
    await page.locator("#country").selectOption({value: 'BZ'});
    await page.waitForTimeout(1000);
    await page.locator("#country").selectOption({label: 'India'});
    await page.waitForTimeout(1000);
    await page.locator("#country").selectOption({index: 60});
    await page.waitForTimeout(2000);

    await page.goto('https://demoqa.com/select-menu');
    // Standard multi select from the above page
    await page.locator("#cars").selectOption(['volvo', 'saab', 'Audi'])
    await page.waitForTimeout(5000);
    })

    test('dropdown developed usig non select tag', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');
        // Select Value
        await page.locator(".css-1hwfws3").nth(1).click()
        await page.getByText("Mr.").click()
        await page.waitForTimeout(2000)
    })

    test.only('select all the elements from MultiSelect DD using loop', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');
        //await expect(page.getByText('Select Menu')).toBeVisible();

        // Selecting Multiselect drop down
        await page.locator('.css-1hwfws3').last().click()

         // Get all the option elements inside the multiselect dropdown
        const optionsCount = await page.locator(".css-11unzgr div").count();
        console.log("Total Options Count:", optionsCount);

        // Loop through all the options and select each one
        for (let i = optionsCount-1; i >= 0; i--) {
            await page.waitForTimeout(1000);
            const option = page.locator('.css-11unzgr div').nth(i).click()
        }
            await page.waitForTimeout(1000);
    })