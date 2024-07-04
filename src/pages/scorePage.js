import { By, until } from 'selenium-webdriver';
import { scoreSelector } from '../selector/scoreSelector.js';

class ScorePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://zzzscore.com/1to50/en/';
  }

  async open() {
    await this.driver.get(this.url);
  }
  async clickNumber(totalNumber){
      for(let i=1;i<=totalNumber;i++){
        const element = await this.driver.findElement(By.xpath(scoreSelector.boxButtonbyNumber(i)));
        // await this.driver.executeScript("window.scrollBy(0,-450)", "", element);
        await element.click();
    }
  }
}
export default ScorePage;
