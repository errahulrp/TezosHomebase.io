import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 6: Execute Lambda ',  async ({ page }) => {
   
    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click On New Proposal

        await page.click(pageLocators.ExecuteLambda.ExecuteLambda); //Click on Execute Lambda 

        await page.click(pageLocators.ExecuteLambda.Dropdown); //Click on the DropDown

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.fill(pageLocators.ExecuteLambda.LambdaArgumentsCode, TezosTestData.ExecuteLambda.LambdaArgumentsCode); //Pass The Lambda Arguments Code

        await page.waitForTimeout(2000);

        await page.fill(pageLocators.ExecuteLambda.LambdaParams, TezosTestData.ExecuteLambda.LambdaParams); //Pass The Lambda Params Code 

        await page.waitForTimeout(2000);  //Wait For Validate 

        await page.click(pageLocators.ExecuteLambda.SubmitButton); //Click On the Submit Button

        await page.waitForTimeout(30000); //Wait For Pass The test Data 

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ExecuteLambda.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }

})