import { pageLocators } from "./Locator";
import { AppConfig } from "../../config";

async function changeNetwork(page) {

    await page.goto(AppConfig.TestURL);

    await page.click(pageLocators.TokenCreator.EnterApp)

    await page.click(pageLocators.TokenCreator.MainNet);

    await page.waitForSelector(pageLocators.TokenCreator.frame);

    await page.click(pageLocators.TokenCreator.GhostNet);

}

export { changeNetwork };