export const carRentalSelector = {
    continueByCarNameButton : carName =>`(//div[contains(div/h3, '${carName}')]/following-sibling::div//div[text()='Continue'])[2]`,
    continueByCarIndexButton : index =>`(//div[text() = 'Continue'])[${index}]`,
    continueProviderByCarNameButton : carProvider =>`(//div[contains(div/h3, '${carProvider}')]/following-sibling::div//div[text()='Continue'])[2]`,
    continueProviderByCarIndexButton : index => `(//div[text() = 'Continue'])[${index}]`,
};
  