import { By, until } from 'selenium-webdriver';
import { carRentalSelector } from '../selector/carRentalSelector.js';

class CarRentalPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.traveloka.com/en-id/car-rental/search';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async selectCar(carName) {
    const element = await this.driver.findElement(By.xpath(carRentalSelector.continueByCarNameButton(carName)));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    // await this.driver.sleep(3000); 
    await element.click();
  }

  async selectCarbyIndex(index) {
    const element = await this.driver.findElement(By.xpath(carRentalSelector.continueByCarIndexButton(index)));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    // await this.driver.sleep(3000); 
    await element.click();
  }

  async selectCarProvider(carProvider) {
    const element = await this.driver.findElement(By.xpath(carRentalSelector.continueProviderByCarNameButton(carProvider)));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    // await this.driver.sleep(3000); 
    await element.click();
  }

  async selectCarProviderbyIndex(index) {
    const element = await this.driver.findElement(By.xpath(carRentalSelector.continueProviderByCarIndexButton(index)));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    // await this.driver.sleep(3000); 
    await element.click();
  }
  
}
export default CarRentalPage;
