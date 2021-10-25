import GenerateRandomData from '../utils/GenerateRandomData';

class TopMenu {
  elements = {
    featuredEventsMenu: () => cy.get('[href="/featured"]'),
    todaysEventsMenu: () => cy.get('[href="/today"]'),
    searchEngineInput: () => cy.get('input[role="search"]'),
    searchEngineBtn: () => cy.get('.search__button'),
  };

  search(phrase: string) {
    this.elements.searchEngineInput().click();
    this.elements.searchEngineInput().clear();
    this.elements.searchEngineInput().type(phrase);
    this.elements.searchEngineBtn().click();
  }

  randomSearch() {
    this.elements.searchEngineInput().click();
    this.elements.searchEngineInput().clear();
    this.elements.searchEngineInput().type(GenerateRandomData.randomEmail());
    this.elements.searchEngineBtn().click();
  }
}

export default new TopMenu();
