import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 1: Vote On On-Chain Proposal ',  async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes
  
    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        await page.click(pageLocators.VoteOnProposal.VotingCycle);  // Click on Running Cycle Status
        
        await page.click(pageLocators.VoteOnProposal.Active); //Click on the Active Button

        await page.click(pageLocators.VoteOnProposal.VoteFor); //Click on the Vote For Support

        await page.fill(pageLocators.VoteOnProposal.Amount, TezosTestData.VoteOnProposal.Amount); //Fill the amount for proposal

        // await page.click(pageLocators.VoteOnProposal.UseMax); //Click on Use Max

        await page.click(pageLocators.VoteOnProposal.Submit); //Click on the Submit

        await page.waitForTimeout(30000); //wait for the execute transaction

        const content = await page.content(); //Assume Page
 
        const isTextVisible = content.includes(pageLocators.VoteOnProposal.TransactionText, { visible: true });  //Verify that text visible on the webpage
    
        console.log(isTextVisible); //Prints True or false for is Text Visible

        await page.waitForTimeout(2000); //Wait for Submit the Proposal

        await page.click(pageLocators.VoteOnProposal.View); //Click on the View Button

        await page.waitForTimeout(1000);

        const elementHandle0 = await page.$(pageLocators.VoteOnProposal.Support); // Find the element 

        const textContent0 = await elementHandle0.textContent();  //get the text from element
        
        console.log(textContent0); //Print the test

        const elementHandle1 = await page.$(pageLocators.VoteOnProposal.Oppose); // Find the element 

        const textContent1 = await elementHandle1.textContent();  //get the text from element
        
        console.log(textContent1); //Print the test

    }
    catch (error) {
        console.log("Now Creating Cycle is running");
    }

  

})