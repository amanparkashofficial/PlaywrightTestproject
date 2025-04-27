import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('login test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId: Locator = page.locator('#input-email');
    const password: Locator = page.locator('#input-password');
    const loginButton: Locator = page.locator("[value=Login]");

    await emailId.fill("apg@yopmail.com");
    await password.fill("playwright123");
    await loginButton.click();

    await page.screenshot({ path: 'homepage.png' });

    await expect(page).toHaveTitle('My Account');

    await browser.close();
});
