import { expect } from 'chai';
import { getDriver } from '../helper/helpers.js';
import HomePage from '../../src/pages/homePage.js';
import CarRentalPage from '../../src/pages/carRentalPage.js';
import CarRentalDetailPage from '../../src/pages/carRentalDetailPage.js';
import PaymentPage from '../../src/pages/paymentPage.js';
import BookingPage from '../../src/pages/bookingPage.js';
import { bookData, carData, contactDetail, driverDetail, bankDataVA } from './bookCarWithoutDriverE2E.data.js';

describe('End-to-End Car Booking Without Driver', function() {
  this.timeout(0);
  let driver;
  let homePage;
  let carRentalPage;
  let carRentalDetailPage;
  let bookingPage;
  let paymentPage;

  before(async function() {
    driver = await getDriver();
    homePage = new HomePage(driver);
    carRentalPage = new CarRentalPage(driver);
    carRentalDetailPage = new CarRentalDetailPage(driver);
    bookingPage = new BookingPage(driver);
    paymentPage = new PaymentPage(driver);
  });

  after(async function() {
    await driver.quit();
  });

  it('should book a car without a driver', async function() {
    await homePage.open();
    await homePage.clickRentalMobilTab();
    await homePage.clickWithoutDriver();
    await homePage.inputLocationCarRental(bookData.location);
    await homePage.selectPickUpStartDate(bookData.diffStartDate);
    await homePage.selectPickUpStartHour(bookData.startHour[0],bookData.startHour[1]);
    await homePage.selectPickUpEndDate(bookData.diffEndData);
    await homePage.selectPickUpEndHour(bookData.endHour[0],bookData.endHour[1]);
    await homePage.clickSearchCar();
    await homePage.verifyUrlFromDataBook(bookData);
    expect(await driver.getCurrentUrl()).to.contain('/car-rental/search'); 
    // await carRentalPage.selectCar(carData.carName)
    // await carRentalPage.selectCarProvider(carData.carProviderName)
    await carRentalPage.selectCarbyIndex(carData.indexCar)
    await carRentalPage.selectCarProviderbyIndex(carData.indexProviderCar)
    expect(await driver.getCurrentUrl()).to.contain('/car-rental/detail'); 
    await carRentalDetailPage.selectPickupLocation();
    await carRentalDetailPage.selectDropOffLocation(bookData.location);
    await carRentalDetailPage.clickContinue();
    // expect(await driver.getCurrentUrl()).to.contain('booking'); 
    await driver.sleep(20000); // still manual to check isRobot
    await bookingPage.inputContactDetails(contactDetail);
    await bookingPage.inputDriverDetails(driverDetail);
    await bookingPage.clickContinue();
    await bookingPage.checklistRentalRequirement();
    await bookingPage.clickContinuetoPayment();
    await driver.sleep(10000);

    await paymentPage.paymentWithVA(bankDataVA.bca);
    await paymentPage.clickPayWithVA();
  });
});
