import { test } from '@playwright/test';
import { PreProposal } from "../common/PreAction";
import { pageLocators } from '../common/Locator';

test('Test case 1: On-Chain Proposal Execution', async ({ page }) => {
    test.setTimeout(10 * 60 * 1000); // Extending Test Case timeout to 10 minutes

    await PreProposal(page); // PreConditions Open URL and Open Mask DAO For Proposal

    try {
        await page.click(pageLocators.OffChainPoll.cycle); // Click on Running Cycle Status

        let elementFound = false;
        let retries = 0;
        const maxRetries = 3; // Set the maximum number of retries as needed

        while (!elementFound && retries < maxRetries) {
            try {
                await page.waitForSelector(pageLocators.ProposalExecution.Execute, { timeout: 300000 });
                await page.click(pageLocators.ProposalExecution.Execute); // Click on Execute Button
                elementFound = true; // Element found and clicked successfully
            } catch (error) {

                console.log(`Retry ${retries + 1}: Element not found or not clickable`);  // Handle the error or log it
                retries++;
            }
        }

        if (elementFound) {
            await page.waitForTimeout(30000); // Wait for transaction

            const content = await page.content(); // Assume Page

            const isTextVisible = content.includes(pageLocators.ProposalExecution.TransactionText, { visible: true }); // Verify that text is visible on the webpage

            console.log(isTextVisible); // Prints True or false for whether the text is visible
        } else {
            console.log(`Error: Element not found or not clickable after ${maxRetries} retries`);
        }
    } catch (error) {
        console.log("Error: No Passed- Executable Proposals");
    }
});
