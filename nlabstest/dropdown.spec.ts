import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Select based dropdown test', async () => {
    //const browser: Browser = await firefox.launch({ headless: false });
    //const browser: Browser = await webkit.launch({ headless: false });
    const browser: Browser = await chromium.launch();

    const page: Page = await browser.newPage();
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropDown = 'select#Contact_CountryCode';
    //await page.selectOption(countryDropDown, { value: 'AD' });


    //await page.selectOption(countryDropDown, { label: 'Australia' });

    //await page.selectOption(countryDropDown, { index: 5 });
    
    
    //select#Contact_CountryCode > option
    const alloptions = await page.$$(countryDropDown + ' > option');
    console.log(alloptions.length);

    for (const e of alloptions){
        const text = await e.textContent();
        console.log(text);
            if(text == 'Yemen'){
                await page.selectOption(countryDropDown, {label: text});
                break;
            }
    }

    //await page.waitForTimeout (70000);
    


});