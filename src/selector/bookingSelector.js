export const bookingSelector = {
    contactDetails : {
        fullNameField: `//*[*[text() = 'Contact Details']]//label[div[text() = 'Full Name']]/following-sibling::div/input`,
        mobileNumberField: `//*[*[text() = 'Contact Details']]//label[div[text() = 'Mobile Number']]/following-sibling::div/input`,
        emailField: `//*[*[text() = 'Contact Details']]//label[div[text() = 'Email']]/following-sibling::div/input`
    },
    driverDetails : {
        titleField: `(//*[*[text() = 'Driver Details']]//label[div[text() = 'Title']]/following-sibling::div/div)[3]`,
        optionTitleField : optionTitle => `//*[*[text() = 'Driver Details']]//label[div[text() = 'Title']]/following-sibling::div/select/option[text()='${optionTitle}']`,
        fullNameField : `//*[*[text() = 'Driver Details']]//label[div[text() = 'Full Name']]/following-sibling::div/input`,
        mobileNumberField : `//*[*[text() = 'Driver Details']]//label[div[text() = 'Mobile Number']]/following-sibling::div/input`
    },
    continueButton : `(//div[text() = 'Continue'])[1]`,
    checkTheRequirementsWidget : `(//div[text() = 'Tap to check the requirements.'])[1]`,
    requirementWidget : {
        checklistAllInput : `//div[text() = 'Check All']/preceding-sibling::div`,
        saveButton : `(//div[text() = 'Save'])[2]`,
    },
    continueToPaymentButton : `(//*[text() = 'Continue to Payment'])[2]`,
    continuePaymentButton : `(//*[text() = 'Continue'])[2]`
};
  