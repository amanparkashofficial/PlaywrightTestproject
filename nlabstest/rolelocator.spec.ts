import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Aria role locator test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    

    //7. Role Selector:

    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible();
    await expect (page.getByRole('link', { name: 'Forgotten Password'})).toBeVisible();
    await expect (page.getByRole('radio', { name: 'Yes'})).toBeVisible();
    await page.getByRole('radio', { name: 'Yes'}).click();
    await expect (page.getByRole('checkbox')).toBeVisible();
    await page.getByRole('checkbox').click();

    await expect (page.getByRole('button', { name: 'Continue'})).toBeVisible();
    await page.getByRole('button', { name: 'Continue'}).click();

    await page.waitForTimeout(3000);


});