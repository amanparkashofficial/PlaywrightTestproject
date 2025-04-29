import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('locator test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    
    //1. id:unique
    const firstname:Locator = page.locator('#input-firstname');
    const lastname:Locator = page.locator('#input-lastname');

    //2.classname:
    const logo:Locator = page.locator('.img-responsive');
    const LogoExist = await logo.isEnabled();
    console.log(LogoExist);

    //3. Text:
    const header:Locator = page.locator('text=Register Account');
    const headerExist = await header.isEnabled();
    console.log(headerExist);

    const continueBtn: Locator = page. locator ('text=Continue');
    const continueBtnExist= await continueBtn.isEnabled();
    console.log(continueBtnExist);
    
    const forgotPwdLink: Locator = page. locator('text=Forgotten Password');
    const forgotPwdLinkExist = await forgotPwdLink.isEnabled();
    console.log(forgotPwdLinkExist);

    //4.css:
    const email: Locator = page.locator('css=input#input-email');
    const telephone: Locator = page.locator('css=input[name="telephone"]');
    const privacyCheckBox: Locator = page.locator('css=input[type="checkbox"]');
    
    await email.fill("naveen@gmail.com");
    await telephone.fill("88888888");
    await privacyCheckBox.click();

    //await new Promise(() => {});

    //5. xpath
    const password: Locator = page. locator('xpath=//input[@id="input-password"]');
    const search: Locator = page. locator('xpath=//input[@name="search" and @type="text"]');

    await password.fill("test@123");
    await search.fill('macbook');



});