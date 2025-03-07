const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

const datas = require('../testData/dataDriven.json')

let loginPage
let dashboardPage


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
  constant = new Constant(page)
  await loginPage.launchURL(constant.url); 
  await loginPage.validLogin(constant.username, constant.password)
})


test('Add a product to the cart', async ()=>{
    await expect(loginPage.homePageIndetifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(constant.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText('Product Added To Cart')
})

test('test data', async() => {
    const array =
    [
            {
                "url": "https://rahulshettyacademy.com/client",
                "username": "test7lYM@gmail.com",
                "password": "Test@123",
                "productName": "IPHONE 13 PRO"
            },

            {
                "url": "https://rahulshettyacademy.com/client",
                "username": "test7lYM@gmail.com",
                "password": "Test@123",
                "productName": "qwerty"
            },

            {
                "url": "https://rahulshettyacademy.com/client",
                "username": "test7lYM@gmail.com",
                "password": "Test@123",
                "productName": "Banarsi Saree"
            },
            {
                "url": "https://rahulshettyacademy.com/client",
                "username": "testnHNk@gmail.com",
                "password": "Testing@1234",
                "productName": "LG Refrigerator"
            }
    ]
})  