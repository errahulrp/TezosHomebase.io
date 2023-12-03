import { test, expect } from '@playwright/test';
import { changeNetwork } from '../common/Action';
import { pageLocators } from '../common/Locator';
import { TezosTestData } from '../common/TestData';

test("Test Case 2: Token Creation with Various Input Values", async ({ page, }) => {

  test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

  await changeNetwork(page); //PreConditions Open URL and selecting the Ghost-net

  await page.click(pageLocators.TokenCreator.CreateDAO); //Select A Create New DAO

  await page.click(pageLocators.TokenCreator.GovernanceToken); //Selecting the Governance Token

  await page.fill(pageLocators.TokenCreator.TokenName, TezosTestData.TokenCreator.TokenName); //Pass The Token Name

  await page.fill(pageLocators.TokenCreator.TokenDescription, TezosTestData.TokenCreator.TC02TokenDescription); //Pass The Token Description

  await page.fill(pageLocators.TokenCreator.TotalSupply, TezosTestData.TokenCreator.SupplyToken); //Total Supply of Tokens

  await page.fill(pageLocators.TokenCreator.Decimals, TezosTestData.TokenCreator.Decimals); //Pass The Decimals

  await page.fill(pageLocators.TokenCreator.Symbol, TezosTestData.TokenCreator.Symbol); //Pass The Symbol for token

  await page.fill(pageLocators.TokenCreator.Icon, TezosTestData.TokenCreator.Icon); //Pass The Icon for Token

  await page.click(pageLocators.TokenCreator.ContinueButton1); //Click On Continue Button

  const textMessage = page.getByText(pageLocators.TokenCreator.ErrorText);  //Get The Text 

  console.log(textMessage);   //Console The Results 

  await expect(textMessage).toBeVisible(); //Verify The Text Present on The Web

  console.log("Create Token with input values are fail due to the decimals test box not accept 0 value");

});
