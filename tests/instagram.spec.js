import{test} from '@playwright/test'
test('validate instagram test practice', async({page}) =>{
    await page.goto('https://www.instagram.com/accounts/login/?hl=en')
    await page.locator('//input[@name="email"]').fill('trendo@gmail.com')
    await page.locator('//input[@name="pass"]').fill('xyz@123')
   await page.locator('//span[text()="Log in"]').click()



})
