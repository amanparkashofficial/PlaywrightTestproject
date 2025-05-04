import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Select based dropdown test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://www.spicejet.com/");
    page.getByText('Add-ons').first().hover();
    //page.getByText('Taxi').first().click();
    page.getByText('Visa Services').first().click();

    await page.waitForTimeout(10000);

});