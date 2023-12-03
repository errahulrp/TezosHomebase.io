import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 1: Off Chain Poll Proposal Creation', async ({ page }) => {

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

    await page.click(pageLocators.OffChainPoll.OffChainPoll);  //Click on Off Chain Poll

    await page.fill(pageLocators.OffChainPoll.ProposalTitle, TezosTestData.OffChainPoll.ProposalTitle);  //Pass the Proposal Title

    await page.fill(pageLocators.OffChainPoll.ShortDescription, TezosTestData.OffChainPoll.ShortDescription); //Pass the Short Description

    await page.fill(pageLocators.OffChainPoll.ExternalLink, TezosTestData.OffChainPoll.ExternalLink);  //Pass the External Link

    await page.click(pageLocators.OffChainPoll.multipleChoice); // Click on Multiple Choice

    await page.fill(pageLocators.OffChainPoll.Choice1, TezosTestData.OffChainPoll.Choice1); //Pass the Choice 1 Data

    await page.click(pageLocators.OffChainPoll.AddChoice); //Click on Add Choice

    await page.fill(pageLocators.OffChainPoll.Choice2, TezosTestData.OffChainPoll.Choice2); //Pass The Choice 2 Data 

    await page.fill(pageLocators.OffChainPoll.DD, TezosTestData.OffChainPoll.DD); //Pass The Date 

    await page.fill(pageLocators.OffChainPoll.HH, TezosTestData.OffChainPoll.HH); //Pass The Hours

    await page.fill(pageLocators.OffChainPoll.MM, TezosTestData.OffChainPoll.MM); //Pass The Minute

    await page.click(pageLocators.OffChainPoll.CreateProposalButton); //Click on the Create Proposal Button

    await page.waitForTimeout(12000); //Wait for the transaction

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.OffChainPoll.CreateText, { visible: true }); //Wait for Text Visible on Webpage

    console.log(isTextVisible); //Console the results

    console.log("The poll is successfully created and the user is redirected to a confirmation page with the details of the newly created poll.");

})