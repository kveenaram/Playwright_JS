/*
click - click(), to do force click use force option click({force: true})
double click
right click
mouse hover on element
drag and drop
pop-up/ alert validation
*/

const { test, expect } = require('@playwright/test');

test('Mouse operations - Double click and right click operations', async ({ page }) => {
await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
await page.getByText('right click me').click({button: 'right'})
await page.waitForTimeout(2000)
await page.locator('.context-menu-icon-quit').click()
// dblclick() - double click on the element
await page.getByText('Double-Click Me To See Alert').dblclick()
})

test('Mouse operations - Mouse hover on operations', async ({ page }) => {
    await page.goto('https://book.spicejet.com/search.aspx')
    await page.getByText('Add-ons', {exact : true}).hover()
    await page.getByTestId('test-id-SpiceMax').toBeVisible()

})

test('Mouse operations - Drag and Drop operations', async ({ page }) => {
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html')
    const dragableElement = await page.locator('div#draggable')
    const dropPlace = await page.locator('div#droppable')
    // dragTo(locator)
    await dragableElement.dragTo(dropPlace)
    await page.waitForTimeout(2000)
})

test.only('Mouse operations - pop-up or alert validation', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
   // on() is a method
   page.on('dialog', dialog => {
    // clg is a short form of console.log
    console.log(dialog.message());
    dialog.accept()
    //dialog.dismiss()
   })
   await page.getByText('Double-Click Me To See Alert').dblclick()
   
})

test('Confirm Valifation', async ({ page }) => {
await page.goto('https://demoqa.com/alerts')
page.on('dialog', dialog => {
    console.log(dialog.message());
    dialog.accept()
   })
await page.locator('#confirmButton').click()


})