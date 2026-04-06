const { Navbar } = require("./navbar.component");

exports.HomePage = class HomePage {
  //Locate Elements
  constructor(page) {
    this.page = page;

    //navbar component
    this.navbar = new Navbar(page); // composition

    this.homepageUrl = "https://www.cosco.in/";
  }

  //Actions
  async goToHomePage() {
    await this.page.goto(this.homepageUrl);
  }
};
