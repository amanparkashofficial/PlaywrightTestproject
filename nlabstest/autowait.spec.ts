import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test' 
import log from 'console';
import path from 'path';
import {webkit, chromium, firefox } from 'playwright'

test.use({
    actionTimeout: 10000
});

test('Auto wait', async()=>{
const browser: Browser = await chromium. launch(); 
const page: Page = await browser.newPage();
//page.setDefaultTimeout(15000);

await page.goto("https://classic.freecrm.com/register/");

//await page.locator("input[name='agreeTerms11']").check({timeout: 5000});


});

test('Auto wait 2', async()=>{
    const browser: Browser = await chromium. launch(); 
    const page: Page = await browser.newPage();
    //page.setDefaultTimeout(15000);
    
    await page.goto("https://classic.freecrm.com/register/");
    
   // await page.locator("input[name='agreeTerms11']").check();
   
    
});


test('Auto wait 3', async()=>{
const browser: Browser = await chromium. launch(); 
const page: Page = await browser.newPage();
//page.setDefaultTimeout(15000);

await page.goto("https://classic.freecrm.com/register/");

//await page.locator("input[name='agreeTerms11']").check({timeout: 5000});


});    