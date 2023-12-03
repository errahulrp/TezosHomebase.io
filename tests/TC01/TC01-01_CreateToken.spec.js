import { test } from '@playwright/test';
import { changeNetwork } from '../common/Action';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';
import { setTokenAddress } from '../common/sharedValues';

test("Test Case 1: Successful Token Creation", async ({ page }) => {

  test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

  await changeNetwork(page); //PreConditions Open URL and Selecting the Ghost-net

  await page.click(pageLocators.TokenCreator.CreateDAO); //Select A Create New DAO

  await page.click(pageLocators.TokenCreator.GovernanceToken); //Selecting the Governance Token

  await page.fill(pageLocators.TokenCreator.TokenName, TezosTestData.TokenCreator.TokenName); //Pass The Token Name

  await page.fill(pageLocators.TokenCreator.TokenDescription, TezosTestData.TokenCreator.TokenDescription); //Pass The Token Description

  await page.fill(pageLocators.TokenCreator.TotalSupply, TezosTestData.TokenCreator.SupplyToken); //Total Supply of Tokens

  await page.fill(pageLocators.TokenCreator.Decimals, TezosTestData.TokenCreator.Decimals); //Pass The Decimals

  await page.fill(pageLocators.TokenCreator.Symbol, TezosTestData.TokenCreator.Symbol); //Pass The Symbol for token

  await page.fill(pageLocators.TokenCreator.Icon, TezosTestData.TokenCreator.Icon); //Pass The Icon for Token

  await page.click(pageLocators.TokenCreator.ContinueButton1); //Click On Continue Button

  await page.fill(pageLocators.TokenCreator.WalletAddress, TezosTestData.TokenCreator.WalletAddress); //Pass The Wallet Address

  await page.fill(pageLocators.TokenCreator.Amount, TezosTestData.TokenCreator.Amount); //Pass The Amount

  await page.click(pageLocators.TokenCreator.ContinueButton2); //Click on Continue Button

  await page.click(pageLocators.TokenCreator.launch); //Click on launch button

  await page.waitForTimeout(30000); //Wait for the Token Create

  const content = await page.content(); //Assume Page

  const isTextVisible = content.includes(pageLocators.TokenCreator.DeployText, { visible: true });  //Verify that text visible on the webpage

  console.log(isTextVisible); //console the results of Token

  await page.waitForSelector(pageLocators.TokenCreator.ConsoleAddress);  //Wait for find the Element

  const element = await page.$(pageLocators.TokenCreator.ConsoleAddress); // get The element

  const TokenAddress = await element.innerText();  //get the text From this element

  console.log('Token Address:', TokenAddress);  // Console The token Address

  setTokenAddress(TokenAddress); // Set the TokenAddress value

  console.log("The token is successfully created and the user is redirected to a confirmation page with the details of the newly created token.");

});
