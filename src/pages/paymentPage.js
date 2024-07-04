import { By, until } from 'selenium-webdriver';
import { paymentSelector } from '../selector/paymentSelector.js';

class PaymentPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.traveloka.com/en-id/payment/v2';
  }

  async open() {
    await this.driver.get(this.url);
  }
  async paymentWithVA(bank){
    const elementVirtualAccount = await this.driver.findElement(By.xpath(paymentSelector.paymentWithVAWidget(bank)));
    await this.driver.executeScript("arguments[0].click();", elementVirtualAccount);
  }
  async clickPayWithVA(){
    const element = await this.driver.findElement(By.xpath(paymentSelector.paymentButton));
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await this.driver.executeScript("arguments[0].click();", element);
  }
}
export default PaymentPage;
