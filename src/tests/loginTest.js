const { expect } = require('chai');
const { getDriver } = require('../../test/login/login.helpers');
const LoginPage = require('../pages/loginPage');
const { validUser, invalidUser } = require('../../test/login/login.data');

describe('Login UI Tests', function() {
  let driver;
  let loginPage;

  before(async function() {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  after(async function() {
    await driver.quit();
  });

  it('should login successfully with valid credentials', async function() {
    await loginPage.open();
    await loginPage.enterUsername(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.submit();
    // Add your assertion for successful login, e.g. checking if redirected to a dashboard page
    expect(await driver.getCurrentUrl()).to.equal('http://example.com/dashboard');
  });

  it('should show error message with invalid credentials', async function() {
    await loginPage.open();
    await loginPage.enterUsername(invalidUser.username);
    await loginPage.enterPassword(invalidUser.password);
    await loginPage.submit();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal('Invalid credentials'); // Adjust based on your application's error message
  });
});
