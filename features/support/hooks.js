const { After, Before, AfterAll,BeforeAll, setDefaultTimeout } = require('cucumber');
const { driver } = require('./web_driver');


//set default step timeout
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
    //Before  All Scenario Hook
    await driver.manage().window().maximize();
    
})

Before(async function () {
    //Before Scenario Hook
    await driver.manage().deleteAllCookies();
})

After(async function () {
    //After Scenario Hook

    //capture screenshot after each scenario
    let screenshot = await driver.takeScreenshot();
    this.attach(screenshot, 'image/png');
    //clean up cookies
    await driver.manage().deleteAllCookies();
});

AfterAll(async function () {
    //perform some shared teardown
    return driver.quit();
})

