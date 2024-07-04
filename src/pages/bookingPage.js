import { By, until } from 'selenium-webdriver';
import { bookingSelector } from '../selector/bookingSelector.js';

class bookingPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.traveloka.com/en-id/booking/v2';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async inputContactDetails(ContactDetails) {
    const elementFullName = await this.driver.findElement(By.xpath(bookingSelector.contactDetails.fullNameField));
    await elementFullName.sendKeys(ContactDetails.fullName);

    const elementMobileNumber = await this.driver.findElement(By.xpath(bookingSelector.contactDetails.mobileNumberField));
    await elementMobileNumber.sendKeys(ContactDetails.mobileNumber);

    const elementEmail = await this.driver.findElement(By.xpath(bookingSelector.contactDetails.emailField));
    await elementEmail.sendKeys(ContactDetails.email);
  }

  async inputDriverDetails(DriverDetails) {
    const elementTitle = await this.driver.findElement(By.xpath(bookingSelector.driverDetails.titleField));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", elementTitle);
    await this.driver.executeScript("arguments[0].click();", elementTitle);
    // await elementTitle.click();

    const elementOption = await this.driver.findElement(By.xpath(bookingSelector.driverDetails.optionTitleField(DriverDetails.title)));
    await elementOption.click();

    const elementFullName = await this.driver.findElement(By.xpath(bookingSelector.driverDetails.fullNameField));
    await elementFullName.sendKeys(DriverDetails.fullName);

    const elementMobileNumber = await this.driver.findElement(By.xpath(bookingSelector.driverDetails.mobileNumberField));
    await elementMobileNumber.sendKeys(DriverDetails.mobileNumber);
  }

  async clickContinue(){
    const element = await this.driver.findElement(By.xpath(bookingSelector.continueButton));
    await this.driver.executeScript("arguments[0].click();", element);
  }

  async checklistRentalRequirement(){
    const element = await this.driver.findElement(By.xpath(bookingSelector.checkTheRequirementsWidget));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await this.driver.executeScript("arguments[0].click();", element);

    const elementCheckAll = await this.driver.findElement(By.xpath(bookingSelector.requirementWidget.checklistAllInput));
    await this.driver.executeScript("arguments[0].click();", elementCheckAll);

    const elementSave = await this.driver.findElement(By.xpath(bookingSelector.requirementWidget.saveButton));
    await this.driver.executeScript("arguments[0].click();", elementSave);
  }
  
  async clickContinuetoPayment(){
    const element = await this.driver.findElement(By.xpath(bookingSelector.continueToPaymentButton));
    await this.driver.executeScript("arguments[0].click();", element);

    const elementContinue = await this.driver.findElement(By.xpath(bookingSelector.continuePaymentButton));
    await this.driver.executeScript("arguments[0].click();", elementContinue);
  }
}

export default bookingPage;
