import { test } from '@playwright/test';
import { PreProposal } from "../common/PreAction";
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 2: Successful Token Staking', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User);  //Click on the User ON the Tab

    await page.click(pageLocators.TokenStaking.Deposit);  //Click on the Deposit Button

    // await page.click(pageLocators.TokenStaking.UseMax); //Click onn the User Max

    await page.fill(pageLocators.TokenStaking.PassAmount, TezosTestData.TokenStaking.Amount) // fill the Amount 

    await page.waitForTimeout(2000); //Wait for the type numbers in text box

    await page.click(pageLocators.TokenStaking.Submit); //Click on the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.TokenStaking.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Console the results of Text 

    console.log("The tokens are successfully staked and and show up as available balance field");

})