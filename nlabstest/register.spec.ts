import {test, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('register test', async()=>{
    //const browser:Browser = await firefox.launch();
    //const browser:Browser = await webkit.launch();
    const browser: Browser = await chromium.launch({ headless: true });
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    const firstname:Locator = page.locator('#input-firstname');
    const lastname:Locator = page.locator('#input-lastname');
    const emailId:Locator = page.locator('#input-email');
    const telephone:Locator = page.locator('#input-telephone');
    const password:Locator = page.locator('#input-password');
    const confirmpassword:Locator = page.locator('#input-confirm');
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

    await browser.close();

});