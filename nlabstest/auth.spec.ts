import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('auth test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
   

    const username = 'admin';
    const password = 'admin';
    //const authHeader = 'Basic ' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)});


    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await page.screenshot({ path: 'auth.png' });
    await browser.close();

   //await new Promise(() => {}); // prevents your script from existing
});


function createAuthHeader(username:any, password:any){

    return 'Basic ' + btoa(username+':'+password);
}