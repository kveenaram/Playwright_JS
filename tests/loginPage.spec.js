const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { Constant } = require('../pages/Constants')

let loginPage
let constantPage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    constantPage = new Constant(page)
    await loginPage.launchURL(constantPage.url)
})

test ('valid login', {tag: '@smoke'}, async () => {
    // launcn url
    // fill the username and password
    // click on login button
    // assertion to check if the user is logged in

    await loginPage.validLogin(constantPage.username, constantPage.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test('Invalid login', {tag: '@regression'}, async () => {
    await loginPage.invalidLogin(constantPage.username, constantPage.incorrectPassword)
    await expect (constantPage.loginErrorMessage).toBeVisible()
})