// page Event - New page is opened
// popup event

const {test, expect} = require('@playwright/test')

test ('Window Handling', async ({page}) => {
page. goto('https://demo.automationtesting.in/Windows.html')
const page1 = page.waitForEvent('popup')
await page.getByRole('button', {name : 'click'}).click()
const newPage = await page1
})