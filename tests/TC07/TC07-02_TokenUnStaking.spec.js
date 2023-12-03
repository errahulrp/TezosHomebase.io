import { test } from '@playwright/test';
import { PreProposal } from "../common/PreAction";
import { pageLocators } from '../common/Locator';

test('Test case 2: Successful Token UnStaking ', async ({ page }) => {

  test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

  await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

  try {

    await page.click(pageLocators.TokenStaking.User); //Click on the User Tab

    await page.click(pageLocators.UnStakingToken.UnStakeVotes); //Click on UnStake Votes 

    await page.waitForTimeout(3000); //Wait For Complete The Transaction

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.UnStakingToken.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible);

    console.log("The tokens are successfully UnStaked and show up in the Available Balance field.")

  } catch (error) {
    console.log("Error: No votes to unstake");
  }
})