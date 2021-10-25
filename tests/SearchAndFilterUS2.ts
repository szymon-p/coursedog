import Events from '../pages/Events';
import TopMenu from '../pages/TopMenu';
import * as us2 from '../testdata/us2';

describe('US2 - Use the Search Engine and the Filters', () => {
  beforeEach(() => {
    cy.visit(us2.basURL);
  });

  it('TC1 - When I click on Todays Events I can see all events happening today', () => {
    TopMenu.elements.todaysEventsMenu().click();
    Events.verifyTextHeader(us2.tc1TextHeader);
    cy.wait(500);
    Events.elements.mainContent().then(($element) => {
      const amountEvents = $element.find(
        Events.elements.cardsSelector()
      ).length;
      if (amountEvents > 0) {
        Events.selectCalendarToday();
        cy.wait(500);
        Events.verifyAmountCards(amountEvents.toString());
        Events.verifyDateTodaysCards();
      } else {
        Events.selectCalendarToday();
        cy.wait(500);
        Events.verifyAmountCards('0');
        Events.verifyDateTodaysCards();
      }
    });
  });

  it('TC2 - I can use the Search Input in the navigation bar', () => {
    for (let i = 0; i < us2.tc2.length; i++) {
      TopMenu.search(us2.tc2[i][0]);
      Events.verifySearchResultStatus(
        '0 to ' + us2.tc2[i][1] + ' of ' + us2.tc2[i][1]
      );
      Events.verifyAmountCards(us2.tc2[i][1]);
      Events.verifyContentCards(us2.tc2[i][0]);
    }
  });

  it('TC3 - I can use the Filters to restrict the results', () => {
    for (let i = 0; i < us2.tc3.length; i++) {
      Events.selectFilteringOrganizationItems(us2.tc3[i][0], us2.tc3[i][1]);
      Events.verifyAmountCards(us2.tc3[i][2]);
      Events.verifyContentCards(us2.tc3[i][0]);
    }
  });

  it('TC4 - I can use the Filters and Search Engine to restrict the results', () => {
    for (let i = 0; i < us2.tc4.length; i++) {
      TopMenu.search(us2.tc4[i][0]);
      Events.selectFilteringOrganizationItems(us2.tc4[i][1], us2.tc4[i][2]);
      Events.verifyAmountCards(us2.tc4[i][3]);
      Events.verifyContentCards(us2.tc4[i][0]);
      Events.verifyContentCards(us2.tc4[i][1]);
    }
  });
});
