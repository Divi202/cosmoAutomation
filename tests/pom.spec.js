import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import navbarData from "../utils/navbar.data.json";

test.only("test navbar dropdown menu", async ({ page }) => {
  // test.setTimeout(50000);
  test.slow();

  //Home page
  const homepage = new HomePage(page);

  await homepage.goToHomePage();

  for (const navOptions of navbarData) {
    for (const opt of navOptions.options) {
      //hover on navItem eg: SPORTS
      await homepage.navbar.selectNavbarItem(navOptions.navbarItem);

      // Click on sub-option eg: Agility
      await homepage.navbar.selectDropdownItem(opt, navOptions.navbarItem);
    }
  }
});
