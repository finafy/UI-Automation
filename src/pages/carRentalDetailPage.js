import { By, until } from 'selenium-webdriver';
import { carRentalDetailSelector } from '../selector/carRentalDetailSelector.js';

class carRentalDetailPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.traveloka.com/en-id/car-rental/search';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async clickContinue() {
    const element = await this.driver.findElement(By.xpath(carRentalDetailSelector.continueButton));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await element.click();
  }
 
  async selectPickupLocation() {
    const element = await this.driver.findElement(By.xpath(carRentalDetailSelector.pickupLocationWidget));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);

    const elementRentalOffice = await this.driver.findElement(By.xpath(carRentalDetailSelector.rentalOfficeInput))
    await elementRentalOffice.click();

    const elementRentalOfficeDropDown = await this.driver.findElement(By.xpath(carRentalDetailSelector.rentalOfficeDropdown))
    await elementRentalOfficeDropDown.click();

    const elementPickupLocation = await this.driver.findElement(By.xpath(carRentalDetailSelector.pickupLocationOption))
    await elementPickupLocation.click();
    await this.driver.sleep(3000);
  }

  async selectDropOffLocation(location) {
    const elementOtherLocation = await this.driver.findElement(By.xpath(carRentalDetailSelector.otherLocationWidget))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", elementOtherLocation);
    await this.driver.wait(until.elementIsVisible(elementOtherLocation), 5000);
    await elementOtherLocation.click();
    
    const elemetSearchLocation = await this.driver.findElement(By.xpath(carRentalDetailSelector.searchLocationInput))
    await elemetSearchLocation.sendKeys(location);

    const elementPopularLocations = await this.driver.findElement(By.xpath(carRentalDetailSelector.popularLocationDropdown(location)))
    await elementPopularLocations.click();
    await this.driver.sleep(3000);
  }
}
export default carRentalDetailPage;
