import { test } from '@playwright/test';
import { PreProposal } from "../common/PreAction";
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test('Test case 1: Successful Token Withdrawal', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User); //Click On the User tab 

    await page.click(pageLocators.TokenWithdrawal.Withdraw); //Click On withdrawal Button

    //await page.click(pageLocators.TokenWithdrawal.UseMax); //Click on the Use Max

    await page.fill(pageLocators.TokenWithdrawal.Amount, TezosTestData.TokenWithdrawal.Amount); //fill the Amount 

    await page.click(pageLocators.TokenWithdrawal.Submit); //Click On the Submit Button

    await page.waitForTimeout(30000); //Wait for get the votes

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.TokenWithdrawal.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); // console The Pass And Fail Result

})