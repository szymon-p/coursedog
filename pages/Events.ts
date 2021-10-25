import * as us2 from '../testdata/us2';

class Events {
  //page factory -->
  elements = {
    calendarMonthYearBtn: () => cy.get('.vc-title'),
    calendarPopup: () => cy.get('.vc-popover-content'),
    calendarPopupItems: () => cy.get('.vc-popover-content .vc-grid-cell'),
    calendarPopupYearBtn: () => cy.get('.vc-nav-title'),
    calendarSpecificDay: (day: string) =>
      cy.get('.day-' + day + '.in-month .vc-day-content'),
    calendarMarkedBoldSelector: () => 'vc-font-bold',
    filteringAcademicEventsItems: () => cy.get('#academicEventSelect'),
    filteringEventTypeItems: () => cy.get('#typeSelect'),
    filteringOrganizationItems: () => cy.get('#orgSelect'),
    mainContent: () => cy.get('#main-content'),
    searchResultStatus: () => cy.get('[role="status"]'),
    cards: () => cy.get('.card-content'),
    cardsSelector: () => '.card-content',
  };
  //page factory <--

  selectCalendarMonth(month: string) {
    this.elements.calendarMonthYearBtn().click();
    this.elements.calendarPopup().should('be.visible');
    this.elements.calendarPopupItems().contains(month.substr(0, 3)).click();
    this.elements.calendarMonthYearBtn().should('contain', month);
  }

  selectCalendarDay(day: string) {
    this.elements.calendarSpecificDay(day).should('have.length', 1).click();
    this.elements
      .calendarSpecificDay(day)
      .should('have.class', this.elements.calendarMarkedBoldSelector());
  }

  selectCalendarSpecificDate(year: string, month: string, day: string) {
    this.elements.calendarMonthYearBtn().click();
    this.elements.calendarPopup().should('be.visible');
    this.elements.calendarPopupYearBtn().click();
    this.elements.calendarPopupItems().contains(year).click();
    this.elements.calendarPopup().should('be.visible');
    this.elements.calendarPopupItems().contains(month.substr(0, 3)).click();
    this.elements.calendarMonthYearBtn().should('contain', month);
    this.selectCalendarDay(day);
  }

  selectCalendarToday() {
    let date = new Date();
    this.selectCalendarSpecificDate(
      date.getFullYear().toString(),
      us2.tc1MonthNames[date.getMonth() + 1].toString(),
      date.getDate().toString()
    );
  }

  selectFilteringSpecificAcademicEvent(textItem: string, value: string) {
    this.elements.filteringAcademicEventsItems().select(textItem);
    this.elements.filteringAcademicEventsItems().should('have.value', value);
  }

  selectFilteringEventTypeItems(textItem: string, value: string) {
    this.elements.filteringEventTypeItems().select(textItem);
    this.elements.filteringEventTypeItems().should('have.value', value);
  }

  selectFilteringOrganizationItems(textItem: string, value: string) {
    this.elements.filteringOrganizationItems().select(textItem);
    this.elements.filteringOrganizationItems().should('have.value', value);
  }

  //In the future worth to handle the pagination as well.
  verifyAmountCards(amount: string) {
    this.elements.mainContent().then(($element) => {
      if ($element.find(this.elements.cardsSelector()).length > 0) {
        this.elements.cards().should('have.length', amount);
      } else return expect('0' === amount).to.be.true;
    });
  }

  //In the future worth to handle the pagination as well.
  verifyDateCards(year: string, month: string, day: string) {
    this.elements.mainContent().then(($element) => {
      if ($element.find(this.elements.cardsSelector()).length > 0) {
        this.elements.cards().each(($element) => {
          expect($element.text()).to.contain(
            month.substr(0, 3) + ' ' + day + ' ' + year
          );
        });
      } else return expect(true).to.be.true;
    });
  }

  verifyContentCards(text: string) {
    this.elements.mainContent().then(($element) => {
      if ($element.find(this.elements.cardsSelector()).length > 0) {
        this.elements.cards().each(($element) => {
          expect($element.text()).to.contain(text);
        });
      } else return expect(true).to.be.true;
    });
  }

  verifyDateTodaysCards() {
    let date = new Date();
    this.verifyDateCards(
      date.getFullYear().toString(),
      us2.tc1MonthNames[date.getMonth() + 1].toString(),
      date.getDate().toString()
    );
  }

  verifyTextHeader(textHeader: string) {
    this.elements.mainContent().should('contain', textHeader);
  }

  verifySearchResultStatus(status: string) {
    this.elements.searchResultStatus().should('contain', status);
  }
}

export default new Events();
