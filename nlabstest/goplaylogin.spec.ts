import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Gologin test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://goplaybusiness.vercel.app/login");

    await page.getByPlaceholder('Enter phone number').fill('3394191125');

    // this is for login with email
    // await page.getByRole('button', { name: 'Email' }).click();
    // await page.locator('input.email-input[type="email"]').fill('testgoplay@yopmail.com');


    await page.getByPlaceholder('Password').fill('helloworld');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://goplaybusiness.vercel.app/home');

    await page.screenshot({ path: 'homepage1.png' });

    await browser.close();
});
