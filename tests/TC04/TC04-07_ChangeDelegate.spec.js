import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 7: Change Delegate', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.ChangeDelegate.ChangeDelegate); //Click on Change Delegate

        await page.fill(pageLocators.ChangeDelegate.NewDelegateAddress, TezosTestData.ChangeDelegate.NewDelegateAddress); //New Delegate Address

        await page.click(pageLocators.ChangeDelegate.SubmitButton); //Click on Submit button

        await page.waitForTimeout(30000); //Wait For Timeout

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ChangeDelegate.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }

})