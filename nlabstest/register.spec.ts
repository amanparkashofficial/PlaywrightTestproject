import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('register test', async()=>{
    //const browser:Browser = await firefox.launch({headless: false});
    //const browser:Browser = await webkit.launch({headless: false});
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    const firstname:Locator = await page.locator('#input-firstname');
    const lastname:Locator = await page.locator('#input-lastname');
    const emailId:Locator = await page.locator('#input-email');
    const telephone:Locator = await page.locator('#input-telephone');
    const password:Locator = await page.locator('#input-password');
    const confirmpassword:Locator = await page.locator('#input-confirm');
    const checkbox: Locator = page.locator('input[type="checkbox"][name="agree"]');
    const continueButton: Locator = page.locator('input[type="submit"][value="Continue"]');

    await firstname.fill("APG");
    await lastname.fill("New");
    await emailId.fill("apg@yopmail.com");
    await telephone.fill("91245689");
    await password.fill("playwright123");
    await confirmpassword.fill("playwright123");
    await checkbox.check();

    await continueButton.click();

    await page.screenshot({path:'registered.png'});

    browser.close();

});