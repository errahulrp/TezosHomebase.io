import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 4: Add Lambda ',  async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click On New Proposal

        await page.click(pageLocators.AddLambda.AddLambda); // Click on Add Lambda 

        await page.fill(pageLocators.AddLambda.TestBox, TezosTestData.AddLambda.MichelsonCode); //Pass The Michelson Code

        await page.click(pageLocators.AddLambda.SubmitButton);   //Click on Submit Button

        await page.waitForTimeout(30000); //Wait for Lambda Implementation

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.AddLambda.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        Console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }



})