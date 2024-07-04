export const homepageSelector = {
    rentalMobilTab :  `//div[@data-testid = "product-pill-Car Rental"]`,
    withoutDriverInput : `//*[text()='Without Driver']`,
    locationInput :  `//input[@data-testid = "rental-search-form-location-input"]`,
    locationDropdown : location => `//*[@data-testid = "rental-search-form-location-item"]//span[text()='${location}']`,
    startDateInput : `//*[@data-testid = "rental-search-form-date-input-start"]`,
    startDateDropdown : dateToday => `//*[@data-testid = "date-cell-${dateToday}"]`,
    startHourInput : `//input[@data-testid = "rental-search-form-time-input-start"]`,
    startHourDropdown : hour => `//div[text()="Hour"]//following::div[text()="${hour}"][1]`,
    startMinuteDropdown : minute => `//div[text()="Minute"]//following::div[text()="${minute}"][1]`,
    doneButton : `//div[text()="Done"]`,
    endDateInput : `//*[@data-testid = "rental-search-form-date-input-end"]`,
    endDateDropdown : dateToday => `(//*[@data-testid = "date-cell-${dateToday}"])[2]`,
    endHourInput : `//input[@data-testid = "rental-search-form-time-input-end"]`,
    endHourDropdown : hour => `//div[text()="Hour"]//following::div[text()="${hour}"][1]`,
    endMinuteDropdown : minute => `//div[text()="Minute"]//following::div[text()="${minute}"][1]`,
    searchCarInput : `//*[@data-testid = "rental-search-form-cta"]`,
};
  