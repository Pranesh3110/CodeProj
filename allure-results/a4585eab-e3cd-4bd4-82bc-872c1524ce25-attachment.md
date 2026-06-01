# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sample.spec.js >> validate Automation test practice
- Location: tests\sample.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id="username"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "502 Bad Gateway" [level=1] [ref=e3]
  - separator [ref=e4]
  - generic [ref=e5]: cloudflare
```

# Test source

```ts
  1 | import{test}from '@playwright/test'
  2 | test('validate Automation test practice', async({page}) =>{
  3 |     await page.goto('https://practicetestautomation.com/practice-test-login/')
> 4 |     await page.locator('//input[@id="username"]').fill('student')
    |                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  5 |     await page.locator('//input[@id="password"]').fill('Password123')
  6 |     await page.locator('//button[@id="submit"]').click()
  7 | })
  8 | 
```