const {test, expect} = require('@playwright/test')

const url = "https://rahulshettyacademy.com/client/"
const username = 'naveena.varma@gmail.com'
const password = 'Password16'
const productName = 'Banarasi Saree'

test('End to End product order validation', async ({page}) => {
await page.goto(url)

})