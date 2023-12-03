import { test , expect} from '@playwright/test';
import { PreProposal } from '../common/PreAction';
import { pageLocators } from '../common/Locator';

test('Test case 2: Accept Delegations', async ({ page }) => {

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User);  //Click on the User ON the Tab

    await page.click(pageLocators.AcceptDelegation.EditButton); //Click on the Edit Button

    await page.click(pageLocators.AcceptDelegation.AcceptButton); //click on Accept Button

    await page.click(pageLocators.AcceptDelegation.SubmitButton); //Click on the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.AcceptDelegation.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Console the results of Text 

    expect(isTextVisible).toBe(true, "The Accept delegation are not successfully accepted.");

    console.log("The Accepted Delegation transaction are successfully passed.");

})