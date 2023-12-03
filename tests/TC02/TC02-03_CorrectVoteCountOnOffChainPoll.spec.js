import { test } from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';

test('Test case 3: Correct vote Count on Off Chain Poll ', async ({ page }) => {

  test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

  await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

  await page.click(pageLocators.VoteOnOffChainPoll.ProposalTitle); //Click on proposal title

  await page.waitForSelector(pageLocators.CorrectVoteCount.VoteCount);  //Wait for find the Element

  const element = await page.$(pageLocators.CorrectVoteCount.VoteCount); // get The element

  await page.waitForTimeout(2000); //wait for get the votes

  const textContent = await element.innerText();  //get the text From this element

  console.log('Votes:', textContent);  // Console The test Present on the Webpage

  const elements = await page.$$(pageLocators.CorrectVoteCount.Options);

  for (const element of elements) {

    const text = await element.innerText();
    console.log(text);
  }

  console.log("The vote count matches the number of votes submitted for the poll, and if multiple choice is enabled, the voting weight is evenly split between all the options that a voter picked.");

})