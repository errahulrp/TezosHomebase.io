import { test } from '@playwright/test';
import { pageLocators } from './Locator';
import { changeNetwork } from './Action';
import { getDAOName } from './mongo.js';

async function PreProposal(page) {

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    const DAOName = await getDAOName(); //Get the DAO Name from Database 

    await page.click(`//p[text()='${DAOName}']`)  // Use DAOName to locate elements on the page

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal

}

export { PreProposal };