const { chromium } = require('playwright');
const expect = require('expect');
//import "expect-playwright"

// const express = require("express");

let browser, context, page;
beforeAll(async () => {
  browser = await chromium.launch({
    headless: true
  });
  context = await browser.newContext();
});

afterAll(async () => {
  await context.close();
  await browser.close();
});

beforeEach(async () => {
  page = await context.newPage();
});

afterEach(async () => {
  await page.close();
});

test('test login page', async () => {

  // Go to https://www.tmbbank.com/home
  // await page.goto('https://www.tmbbank.com/home');
 
  await page.goto('https://www.tmbdirect.com/tmb/kdw1.30.1');
  await page.waitForSelector('#frmIBPreLogin_btnLogIn');
  //const element = await page.$('frmIBPreLogin_hbxUserId');
  const text = await page.$eval('#frmIBPreLogin_btnLogIn', e => e.value);
  //expect(text).toBe('เข้าสู่ระบบ');
  
  await expect(text).toBe("Log In");

});
  
//Get Page title
  //console.log("page title", await page.title());
  //expect(await page.title()).toBe("xx");
  //expect(await page.title()).toBe("TMB Bank Public Company Limited");
  //await page.click('[aria-label="ค้นหา"]');

  //const atl = ('//*[@id="frmIBPreLogin_lblCustomerLogin"]');

  //const frmIBPreLogin_btnLogIn = 'button';
  //const expectedText = 'เข้าสู่ระบบ';
  //console.log('frmIBPreLogin_btnLogIn', frmIBPreLogin_btnLogIn)
  //expect(frmIBPreLogin_btnLogIn).toBe('เข้าสู่ระบบ');
  //await expect(page).toHaveText("เข้าสู่ระบบ");

  //console.log('atl', atl)
  //expect(atl).toBe('เข้าสู่ระบบ');
  //await expect(page).toHaveText("atl","เข้าสู่ระบบ");
  //expect(alt).toBe('hbxIBPreLogin_image2503629151205733');
  //const element = await page.$('frmIBPreLogin_hbxUserId');
  //await expect(page).toHaveText("User ID");

//   const context = await browser.newContext();

//   // Open new page
//   const page = await context.newPage();

//   // Go to https://www.tmbbank.com/home
//   await page.goto('https://www.tmbbank.com/home');

//   await page.goto('https://www.tmbdirect.com/tmb/kdw1.30.1');

//  ---------------------
//   await context.close();
//   await browser.close();

//})();
