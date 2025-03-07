// Frame is a way to divide a page into multiple sections, each section is a separate HTML page.
// Launch the url - original  main page
// Actions on the main page - page.locator()
// Write the locator to identify the iframe - const frames = page.frameLocator()  -- frame page
// frames to identify the elements inside the frame element 

const { test, expect } = require('@playwright/test');

test('Frames handling', async ({ page })=> {
    await  page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#checkBoxOption1').click()

    const framePage = page.frameLocator('#courses-iframe')
    // if the page has nested iframes, then we need to navigate first to that specfic iframe and then locate the element
    // ex: const framePage2 = framePage.frameLocator('ELEMENT')
    await framePage.getByText('All Access plan', {exact :true}).first().click()
    await page.waitForTimeout(1000)
    await expect(framePage.locator('div.inner-box')).toContainText("All Access Subscription")
    await page.waitForTimeout(1000)

    await page.locator('.btn-primary').first().click()
    await page.waitForTimeout(1000)
})