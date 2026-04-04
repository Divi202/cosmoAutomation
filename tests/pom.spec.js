import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("test navbar dropdown menu", async ({ page }) => {
  //Home page
  const homepage = new HomePage(page);
  await homepage.goToHomePage();
  await homepage.selectDropdownItems("Agility");

  await page.waitForTimeout(3000);
});
