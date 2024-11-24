const { expect } = require('@playwright/test');


exports.InvalidLogin = class InvalidLogin {
   constructor(page){
      this.page = page;
      this.username = page.locator("[type='text']");
      this.password = page.locator("[type='password']");
      this.error =  page.locator(".error");
      this.login = page.locator("[type='submit']");
   }

   async goto(){
    await this.page.goto('https://parabank.parasoft.com/');
   }

   async invalidLoginTest(){
     await this.username.fill('Test');
     await this.login.click();
   }
}