import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';

test('Test case 1: Drop the Active proposal', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        await page.click(pageLocators.VoteOnProposal.VotingCycle); //Click on the Voting Cycle

        await page.click(pageLocators.VoteOnProposal.Active);  //Click on the active Proposal

        await page.click(pageLocators.ProposalDrop.ProposalDrop); //Click on the Drop Proposal

        await page.waitForTimeout(30000); //wait for the transaction

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ProposalDrop.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

    }
    catch (error) {
        console.log("Error: No Proposal to drop");
    }

})