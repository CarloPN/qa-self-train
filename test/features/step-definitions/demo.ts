import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(1000)
})

When(/Search with (.*)/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})

/**Section 6 */

Given(/^A web page is opened$/, async function(){
    await browser.url("/frames")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

When(/^Performed web interactions$/, async function(){
    /**
     * 1. Input box
        * Actions:
        * 1. Type into input box
        * 2. Clear the field and type or just add value
        * 3. Click and type
        * 4. Slow typing
     
    let num = 12345
    let strNum = num.toString()

    let ele = await $(`[type=number]`)
    //await ele.setValue(strNum)
    await ele.click()
    for(let i = 0; i < strNum.length; i++){
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }
    */

    /**
     * 2. Dropdown
        * Actions:
        * 1. Assert default option is selected
        * 2. Select by attribute, text, index
        * 3. Get a list of options
    

    let ele = await $('//select/option[@selected="selected"]')
    let val = await ele.getText()
    chai.expect(val).to.equal("Please select an option")
    await browser.debug()
    

    //Select a specific option

    let ddEle = await $('#dropdown')
    await ddEle.selectByIndex(2)
    

    let eleArray = await $$(`select > option`)
    let arr = []
    for (let i = 0; i < eleArray.length; i++){
        let ele = eleArray[i]
        let val = await ele.getText()
        arr.push(val)
        console.log(val);
    }
    console.log(`>> Options Array: ${arr}`);
    await browser.debug()

    3. Checkbox
    Actions:
    1. Select an option
    2. Unselect a option (if selected)
    3. Assert if option is selected
    4. Select all options
    

    //let ele = await $(`//form[@id="checkboxes"]/input`)
    //let isChecked = await ele.isSelected()
    //chai.expect(isChecked).to.be.true

    let eleArr = await $$(`//form[@id="checkboxes"]/input`)
    for (let i = 0; i < eleArr.length; i++){
        let ele = eleArr[i]
        if(!await ele.isSelected()){
            ele.click()
        }
    }

    4. Windows Handling
    Steps:
    1. Launch the browser
    2. Open another window
    3. Switch to the window based on title
    4. Sitch back to the main window

    Methods used:
    1. getTitle()
    2. getWindowHandle()
    3. getWindowHandles()
    4. switchToWindow()
    
    
    // Open new windows
    await $(`=Click Here`).click()
    await $(`=Elemental Selenium`).click()
    let currentWindowTitle = await browser.getTitle()
    let parentWindowHandle = await browser.getWindowHandle()
    console.log(`>> currentWinTitle: ${currentWindowTitle}`)
    
    // Switch to specific window
    let windowHandles = await browser.getWindowHandles()
    for (let i = 0; i < windowHandles.length; i++){
        console.log(`>> Window handle: ${windowHandles[i]}`)
        await browser.switchToWindow(windowHandles[i])
        currentWindowTitle = await browser.getTitle()
        if (currentWindowTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
            await browser.switchToWindow(windowHandles[i])
            let headerTxtEleSel = await $(`<h1>`).getText()
            console.log(`headerTxtEleSel: ${headerTxtEleSel}`);
            // Rest of the actions go here...
            break
        }
    }
    // Switch back to parent window

    await browser.switchToWindow(parentWindowHandle)
    let parentWindowHeaderTxt = await $(`<h3>`).getText()
    console.log(`>> parentWindowHeaderTxt: ${parentWindowHeaderTxt}`);

    //Continue with the rest of the execution.


    5. Handling Alerts

    Methods used:
    1. isAlertOpen()
    2. acceptAlert()
    3. dismissAlert()
    4. getAlertText()
    5. sendAlertText()

    await $(`button=Click for JS Prompt`).click()
    if(await browser.isAlertOpen()){
        let alertText = await browser.getAlertText()
        console.log(`>> alertText: ${alertText}`);
        await browser.sendAlertText(`Test JS Prompt!`)
        await browser.pause(2000)
        await browser.acceptAlert()
    }

    6. File Upload
    await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
    await $(`#file-submit`).click()


    7. Frames

    Methods used:
    1. switchToFrame()
    2. switchToParentFrame


    await $(`=iFrame`).click()
    let ele = await $(`#mce_0_ifr`)
    await browser.switchToFrame(ele)
    // ^ so we can execute the code line below
    await $(`#tinymce`).click()
    await browser.keys(["Control","A"])
    await browser.pause(2000)
    await browser.keys("Delete")
    await $(`#tinymce`).addValue(`Typing into a frame...`)
    await browser.switchToParentFrame()


    8. Basic Scrolling
    Methods:
    1. scrollIntoView()

    await $('span=Best Sellers').scrollIntoView(false)
    */
    await browser.debug()
})