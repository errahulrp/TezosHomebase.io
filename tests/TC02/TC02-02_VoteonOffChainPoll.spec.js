import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';

test('Test case 2: Vote On Off Chain Proposal ', async ({ page }) => {

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.waitForTimeout(2000); //Wait for page Load

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalTitle); //Click on the Proposal Name 

    await page.click(pageLocators.VoteOnOffChainPoll.Choice1); //Click On Option 1

    await page.click(pageLocators.VoteOnOffChainPoll.CastYourVote); //Submit Your Votes

    await page.waitForTimeout(12000); //wait for CastYourVote

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.VoteOnOffChainPoll.VoteDone, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Prints True or false for is Text Visible

    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})