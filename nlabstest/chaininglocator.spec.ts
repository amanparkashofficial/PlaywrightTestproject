import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import log from 'console';
import {webkit, chromium, firefox } from 'playwright'

test('locator test', async()=>{
const browser: Browser = await chromium. launch();
const page: Page = await browser.newPage(); 
await page.goto("https://www.orangehrm.com/30-day-free-trial/");
await page.waitForTimeout(3000);




}
);