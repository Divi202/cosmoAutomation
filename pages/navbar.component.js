exports.Navbar = class Navbar {
  constructor(page) {
    this.page = page;
  }

  async selectNavbarItem(navbarItemName) {
    await this.page.getByRole("button", { name: `${navbarItemName}` }).hover();
  }

  async selectDropdownItem(optionName, sectionHeading) {
    await this.page
      .getByRole("link", { name: `${optionName}` })
      .first()
      .click();
  }
};
