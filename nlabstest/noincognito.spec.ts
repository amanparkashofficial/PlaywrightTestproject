import {chromium, Browser, Page } from 'playwright'
import test, { BrowserContext } from 'playwright/test';


test('No Incognito test', async () => {

// const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'}); 

const browser:BrowserContext = await chromium.launchPersistentContext('');

const pages = browser.pages();

const page:Page = pages[0];
//const page: Page = await browser.newPage(); 


await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

await page.locator('id=input-firstname').fill("naveen");
await page.locator('id=input-lastname').fill("Automation Labs"); 
await page.waitForTimeout (10000);

});