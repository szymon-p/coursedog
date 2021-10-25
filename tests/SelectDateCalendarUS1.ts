import Events from '../pages/Events';
import * as us1 from '../testdata/us1';

describe('US1 - Select a specific date from the calendar', () => {
  beforeEach(() => {
    cy.visit(us1.basURL);
  });

  it('TC1 - I can only see events that happened on chosen day', () => {
    for (let i = 0; i < us1.tc1.length; i++) {
      Events.selectCalendarSpecificDate(
        us1.tc1[i][0],
        us1.tc1[i][1],
        us1.tc1[i][2]
      );
      cy.wait(500);
      Events.verifyAmountCards(us1.tc1[i][3]);
      cy.wait(500);
      Events.verifyDateCards(us1.tc1[i][0], us1.tc1[i][1], us1.tc1[i][2]);
    }
  });
});
