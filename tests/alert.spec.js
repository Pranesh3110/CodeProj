import{test}from '@playwright/test'
test('alert handling', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    //simple alert
    await page.once('dialog', async (dialog) => {
        await console.log("simple alert message:", dialog.message())
        await dialog.accept()
})
await page.locator('//button[@class="btn btn-danger"]').click()
//await page.waitForTimeout(3000)

//confirmation alert

//await page.once('(//a[@class="analystic"])[2]').click()
await page.once('dialog', async(dialog) => {
    await console.log("Confirmation Alert Message:", dialog.message())
    await dialog.dismiss()
})
await page.locator('//a[text()="Alert with OK & Cancel "]').click()
await page.locator('//button[@class="btn btn-primary"]').click()

//prompt alert

await page.once('dialog',async(dialog)=>{
    await console.log("Prompt Alert Message:",dialog.message())
    await dialog.accept("Hi Mani")
    
})

await page.locator('//a[contains(text(),"Alert with Textbox")]').click()
await page.locator('//button[@class="btn btn-info"]').click()

})


