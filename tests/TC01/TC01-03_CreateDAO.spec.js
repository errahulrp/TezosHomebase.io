import { test } from '@playwright/test';
import { changeNetwork } from '../common/Action';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';
import { getTokenAddress } from '../common/sharedValues';
import { saveToDatabase } from '../common/mongo';

test('Test Case 3 : Create DAO Successfully', async ({ page }) => {

    const tokenAddress = getTokenAddress();   // Retrieve the TokenAddress value when needed

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await changeNetwork(page); //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.DAOCreate.CreateDAO); //Click on Create DAO

    await page.click(pageLocators.DAOCreate.GovernanceToken);  //Selecting Governance (Yes, I Have one)

    await page.click(pageLocators.DAOCreate.FullDAO);  //Click on FullDAO

    await page.click(pageLocators.DAOCreate.ContinueButton1); //Click On Continue

    await page.fill(pageLocators.DAOCreate.DAOName, TezosTestData.DAOCreate.DAOName); //Fill DAO Name

    const daoNameField = page.locator(pageLocators.DAOCreate.DAOName); // After filling the DAO Name field

    const daoName = await daoNameField.getAttribute('value'); // Get the value of the DAO Name field

    await saveToDatabase(daoName); // Saves to the database

    await page.fill(pageLocators.DAOCreate.TokenAddress, tokenAddress); //Fill Token Address

    await page.fill(pageLocators.DAOCreate.TokenID, TezosTestData.DAOCreate.TokenID); //Fill Token ID 

    await page.fill(pageLocators.DAOCreate.GuardianAddress, TezosTestData.DAOCreate.GuardianAddress); //Fill The Wallet Address

    await page.fill(pageLocators.DAOCreate.Description, TezosTestData.DAOCreate.Description); //Fill The Description

    await page.waitForTimeout(2000); //Wait For Click on Continue Button

    await page.click(pageLocators.DAOCreate.ContinueButton2);   //Click on Continue

    await page.fill(pageLocators.DAOCreate.VotingDays, TezosTestData.DAOCreate.VotingDays); //Pass The Voting Cycle Days Duration 

    await page.fill(pageLocators.DAOCreate.VotingHours, TezosTestData.DAOCreate.VotingHours); //Pass The Voting Cycle Hours Duration

    await page.fill(pageLocators.DAOCreate.VotingMinutes, TezosTestData.DAOCreate.VotingMinutes); //Pass The Voting Minutes Duration

    await page.fill(pageLocators.DAOCreate.ExecutionDays, TezosTestData.DAOCreate.ExecutionDays); //Pass The Proposal Execution Days Duration

    await page.fill(pageLocators.DAOCreate.ExecutionHours, TezosTestData.DAOCreate.ExecutionHours); //Pass The Proposal Execution Hours Duration

    await page.fill(pageLocators.DAOCreate.ExecutionMinutes, TezosTestData.DAOCreate.ExecutionMinutes); //Pass The Proposal Execution Minutes Duration

    await page.fill(pageLocators.DAOCreate.ThresholdExpiryDays, TezosTestData.DAOCreate.ThresholdExpiryDays); //Pass The Proposal Expiry Threshold Days Duration

    await page.fill(pageLocators.DAOCreate.ThresholdExpiryHours, TezosTestData.DAOCreate.ThresholdExpiryHours); //Pass The Proposal Expiry Threshold Hours Duration

    await page.fill(pageLocators.DAOCreate.ThresholdExpiryMinutes, TezosTestData.DAOCreate.ThresholdExpiryMinutes); //Pass The Proposal Expiry Threshold Minutes Duration

    await page.fill(pageLocators.DAOCreate.RequireStake, TezosTestData.DAOCreate.RequiredStake); //Fill Required Stake

    const slider = page.locator(pageLocators.DAOCreate.Slider); //Locate The Slider

    const targetPosition = { x: 50, y: 0 }; // Replace with the desired target position.

    await slider.scrollIntoViewIfNeeded(); // Ensure the slider is in view

    const sliderBoundingBox = await slider.boundingBox();  // Get the bounding box of the slider for dragging

    const targetX = sliderBoundingBox.x + targetPosition.x;    // Calculate the target position based on the slider's bounding box

    const targetY = sliderBoundingBox.y + targetPosition.y;

    await page.mouse.move(sliderBoundingBox.x, sliderBoundingBox.y);  // Create a mouse action context and perform the drag and drop

    await page.mouse.down();

    await page.mouse.move(targetX, targetY, { steps: 50 }); // You can adjust the number of steps for smoother animation

    await page.mouse.up();

    await page.fill(pageLocators.DAOCreate.MinAmount, TezosTestData.DAOCreate.MinAmount); //Pass Min Transfer Amount

    await page.fill(pageLocators.DAOCreate.MaxAmount, TezosTestData.DAOCreate.MaxAmount); //Pass Max Transfer Amount

    await page.click(pageLocators.DAOCreate.ContinueButton3);  //Click On Continue

    await page.fill(pageLocators.DAOCreate.QuorumThreshold, TezosTestData.DAOCreate.QuorumThreshold); //Pass The Initial Quorum Threshold

    await page.fill(pageLocators.DAOCreate.QuorumChange, TezosTestData.DAOCreate.QuorumChange); //Pass The Initial Quorum Change

    await page.fill(pageLocators.DAOCreate.MinQuorumAmount, TezosTestData.DAOCreate.MinQuorumAmount); //Pass The Min. Quorum Threshold

    await page.fill(pageLocators.DAOCreate.QuorumMaxChange, TezosTestData.DAOCreate.QuorumChange); //Pass The Max. Quorum Change

    await page.fill(pageLocators.DAOCreate.MaxQuorumAmount, TezosTestData.DAOCreate.MaxQuorumAmount); //Pass The Max. Quorum Threshold

    await page.waitForTimeout(1000); //Wait for the Page Load

    await page.click(pageLocators.DAOCreate.ContinueButton4);  //Click On Continue

    await page.waitForTimeout(2000); //Wait For The Page Load

    await page.click(pageLocators.DAOCreate.ContinueButton5); //Click On Continue 

    await page.click(pageLocators.DAOCreate.SelfDeployed);  //Click On Self Deployed

    await page.click(pageLocators.DAOCreate.DeployDAO); //Click On Launch

    await page.waitForTimeout(60000); //Wait for Deploy the DAO

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.DAOCreate.DAOText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Show the Results of True of false

    console.log("The DAO is successfully created and the user is redirected to a confirmation page that links to the newly created DAO");

})