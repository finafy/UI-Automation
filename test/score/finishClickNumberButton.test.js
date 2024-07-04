import { expect } from 'chai';
import { getDriver } from '../helper/helpers.js';
import ScorePage from '../../src/pages/scorePage.js';
describe('Finish Click Number Button', function() {
    this.timeout(0);
    let driver;
    let scorePage;

    before(async function() {
        driver = await getDriver();
        scorePage = new ScorePage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('should book a car without a driver', async function() {
        await scorePage.open();
        await scorePage.clickNumber(50);
    });
});
