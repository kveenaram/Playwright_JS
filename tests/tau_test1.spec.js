/*
1. Open the page
2. Click at Get started
3. Mouse hover the langugae dropdown
4. Click at Java language
5. Check the URL
6. check the text "Installing Playwright" is not being displayed
7. Rather check the text below is displaying
PLaywright is distributed as a set of Maven modules
*/

const { test, expect} = require('@playwright/test')
// import { test, expect} from '@playwright/test' -> this is for typescript


test('Check Java page', async ({page}) => { 
    //1
    await page.goto('https://playwright.dev/')
    //2
    await page.getByRole('link', {name: 'Get started'}).click();
    //3
    await page.getByRole('button', {name: 'Node.js'}).hover();
    //4
    await page.getByText('Java', { exact:true }).click();
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro')
    //5
    await expect(page).not.toHaveTitle('Installing Playwright')
    //6
    await expect(page.getByText('Installing Playwright', {exact: true})).not.toBeVisible()
    //7
    const javaDesc = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below.`
    await expect(page.getByText(javaDesc)).toBeVisible()
})