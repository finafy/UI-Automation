import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { homepageSelector } from '../selector/homePageSelector.js';

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.traveloka.com';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async clickRentalMobilTab() {
    const rentalMobilTab = await this.driver.findElement(By.xpath(homepageSelector.rentalMobilTab));
    await rentalMobilTab.click();
  }

  async clickWithoutDriver() {
    const element = await this.driver.findElement(By.xpath(homepageSelector.withoutDriverInput));
    await element.click();
  }
  
  async inputLocationCarRental(location) {
    const elementLocationInput = await this.driver.findElement(By.xpath(homepageSelector.locationInput));
    await elementLocationInput.sendKeys(location);

    const elementLocationItem = await this.driver.findElement(By.xpath(homepageSelector.locationDropdown(location)));
    await this.driver.wait(until.elementIsVisible(elementLocationItem), 10000);

    await elementLocationItem.click();
  }

  getCurrentDateFormatted(sumDay) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + sumDay);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
  }

  async selectPickUpStartDate(sumDay) {
    const elementStartDate = await this.driver.findElement(By.xpath(homepageSelector.startDateInput));
    await elementStartDate.click();

    const dateToday = this.getCurrentDateFormatted(sumDay)
    const elementDate = await this.driver.findElement(By.xpath(homepageSelector.startDateDropdown(dateToday)));
    await elementDate.click();
  }
  
  async selectPickUpStartHour(hour,minute) {
    const element = await this.driver.findElement(By.xpath(homepageSelector.startHourInput));
    await element.click();

    const elementHour = await this.driver.findElement(By.xpath(homepageSelector.startHourDropdown(hour)));
    await elementHour.click();

    const elementMinute = await this.driver.findElement(By.xpath(homepageSelector.startMinuteDropdown(minute)));
    await elementMinute.click();

    await this.driver.findElement(By.xpath(homepageSelector.doneButton)).click()
  }
  
  async selectPickUpEndDate(sumDay) {
    const elementStartDate = await this.driver.findElement(By.xpath(homepageSelector.endDateInput));
    await elementStartDate.click();
    const dateToday = this.getCurrentDateFormatted(sumDay)
    const elementDate = await this.driver.findElement(By.xpath(homepageSelector.endDateDropdown(dateToday)));
    await elementDate.click();
  }
  
  async selectPickUpEndHour(hour,minute) {
    const element = await this.driver.findElement(By.xpath(homepageSelector.endHourInput));
    await element.click();

    const elementHour = await this.driver.findElement(By.xpath(homepageSelector.endHourDropdown(hour)));
    await elementHour.click();

    const elementMinute = await this.driver.findElement(By.xpath(homepageSelector.endMinuteDropdown(minute)));
    await elementMinute.click();

    await this.driver.findElement(By.xpath(homepageSelector.doneButton)).click()
  }

  async clickSearchCar() {
    const rentalMobilTab = await this.driver.findElement(By.xpath(homepageSelector.searchCarInput));
    await rentalMobilTab.click();
    // await this.driver.sleep(5000); 
  }

  async verifyUrlFromDataBook(bookData) {
    expect(await this.driver.getCurrentUrl()).to.contain(bookData.location); 
    expect(await this.driver.getCurrentUrl()).to.contain(bookData.driverType); 
  }
  
}
export default HomePage;
