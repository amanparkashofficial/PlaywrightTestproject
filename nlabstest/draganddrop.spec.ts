import {test, expect, Browser, Page, Locator, FrameLocator} from '@playwright/test'
import {log } from 'console';
import {webkit, chromium, firefox } from 'playwright'

test('drag and drop', async()=>{
    const browser:Browser = await chromium. launch(); 
    const page: Page = await browser.newPage();
    
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html"); 
    
    //single:
    // await page. locator("#draggable").dragTo (page. locator("#droppable")); 

    //multile commands:
    await page. locator("#draggable").hover();
    await page.mouse.down();
    await page. locator("#droppable").hover();
    await page.mouse.up();


    
    await page.waitForTimeout (15000); 
});