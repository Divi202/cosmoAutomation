exports.HomePage = class HomePage {
  //Locate Elements
  constructor(page) {
    this.page = page;
    this.homepageUrl = "https://www.cosco.in/";

    //following best practices
    this.navbarDropdownBtn = page.getByRole("button", { name: "SPORTS" });
  }

  //Actions
  async goToHomePage() {
    await this.page.goto(this.homepageUrl);
  }

  async selectDropdownItems(navbarItemName) {
    //Following best practices
    await this.navbarDropdownBtn.hover();

    await this.page.getByRole("link", { name: `${navbarItemName}` }).click();
  }
};
