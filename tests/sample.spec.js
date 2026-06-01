import{test}from '@playwright/test'
test('validate Automation test practice', async({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('Password123')
    await page.locator('//button[@id="submit"]').click()
})
