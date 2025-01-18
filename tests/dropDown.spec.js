/* Types of Drop Down
1. Statis drop down - values wot change
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

    test ('dropdown developed usig non select tag', async ({ page }) => {
        
    })