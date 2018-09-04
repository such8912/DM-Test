const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');
const {By,until} = require('selenium-webdriver');

Given(/^浏览到DM网站 "([^"]*)"$/, async function(url) {
    //await driver.manage().window().maximize();
    //await driver.manage().deleteAllCookies();
    await driver.get(url);
});

Then(/^输入用户名"([^"]*)",密码"([^"]*)"进行登陆$/, async function (user, passwd) {

    await driver.findElement(By.name("loginName")).clear();
    await driver.findElement(By.name("loginName")).sendKeys(user);

    await driver.findElement(By.name("loginPwd")).clear();
    await driver.findElement(By.name("loginPwd")).sendKeys(passwd);

    await driver.findElement(By.xpath('//*[@id="app"]/div[2]/form/div[4]/div/div/div[1]/button/span')).click();
    
    await driver.sleep(1000*1);
});

When(/^进入数据管理$/, async function () {

    //await driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/ul/li[3]')).click();
    await driver.findElement(By.css('#app > div > div:nth-child(2) > ul > li:nth-child(3)')).click();
    await driver.sleep(1000*1);
    
});

Then(/^在原始数据产品中上传影像数据$/, async function () {

    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/section/aside/div[2]/div/div[1]/div/span[2]')),5000).click();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/section/section/header/div[1]/div[1]/div/button/span')),5000).click();
    // await driver.findElement(By.xpath('//*[@id="app"]/section/aside/div[2]/div/div[1]/div/span[2]')).click();
    // await driver.findElement(By.xpath('//*[@id="app"]/section/section/header/div[1]/div[1]/div/button/span')).click();

    await driver.sleep(1000*1);
    
    //let aaa =  await driver.findElement(By.xpath('//*[@class="el-dropdown-menu el-popper"]/li[1]'));
    //let aaa =  await driver.findElement(By.xpath('//li[contains(text(),"影像")]'));
    await driver.wait(until.elementLocated(By.xpath('//li[contains(text(),"影像")]')),5000).click();
    await driver.sleep(1000*1);
    //let aaa =  await driver.findElement(By.xpath('//li[text()="影像"]'));

    await driver.wait(until.elementLocated(By.xpath('//input[@name="file"]')),3000).sendKeys("D:\\park.tif");

    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/section/div[6]/div/div[2]/button/span')),3000).click();

    
    //await driver.wait(until.elementLocated(By.xpath('//label[@style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"]')),5000).click();

    await driver.sleep(1000*3);
    await console.log("+++++++++++");

    var text="";

    await driver.executeScript('return document.getElementsByClassName("file-status")[0].innerHTML').then(function(obj){
        console.log(obj);
        text= obj;
        console.log(text);
    });

    await console.log("text:"+text);

    await console.log("+++++++++++");
    await driver.sleep(1000*3);
 
    //await new ActiveXObject("Wscript.Shell").run("D:\\uploadfile.exe"); 
    
});

Then(/^点击原始数据产品$/, async function () {

    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/section/aside/div[2]/div/div[1]/div/span[2]')),5000).click();
    await driver.sleep(1000*1);
    
});

Then(/^点击下一页$/, async function () {

     await driver.findElement(By.xpath('//*[@id="app"]/section/section/main/div[2]/div/button[2]')).click();
     await driver.sleep(1000*1);

});

Then(/^选择第一条数据进行删除$/, async function () {

    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/section/section/main/div[1]/div[3]/table/tbody/tr/td[7]/div/div/button[3]/span')),5000).click();
    await driver.sleep(1000*3);

});

Then(/^点击确认按钮删除$/, async function () {

    let ok_btn = await driver.findElement({className:'el-button el-button--default el-button--small el-button--primary '});
    await ok_btn.click();
    await driver.sleep(1000*3);
});

Then(/^关闭上传窗口$/, async function () {

    await driver.findElement(By.xpath('//*[@id="app"]/section/div[6]/div/div[1]/button/i')).click();
    await driver.sleep(1000*3);
    await driver.manage().deleteAllCookies();
    
});

Then(/^点击退出$/, async function () {

    await driver.findElement(By.xpath('//*[@id="app"]/div/div[3]/div/span[2]/span')).click();
    await driver.sleep(1000*3);
    await driver.findElement(By.xpath('//span[text()="确定"]')).click();
    await driver.sleep(1000*1);

});