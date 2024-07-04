export const carRentalDetailSelector = {
    continueButton : `(//div[text() = 'Continue'])[4]`,
    pickupLocationWidget : `//div[text() = 'Please Select Below Options']`,
    rentalOfficeInput : `(//div[text() = 'Rental Office'])[1]/..`,
    rentalOfficeDropdown : `(//div[text() = 'Rental Office'])[2]`,
    pickupLocationOption : `(//*[contains(text(), 'Operational Hours')])[1]`,

    otherLocationWidget : `(//div[text() = 'Other Locations'])[2]/..`,
    searchLocationInput : `(//input[@placeholder = 'Search location or address'])[2]`,
    popularLocationDropdown : location => `(//h4[text() = 'Select final drop-off location']/following::*[text() = '${location}'])`
};
  