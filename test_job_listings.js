var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var driver;

test.before(function() {
  this.timeout(15000);
  driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.chrome()).
  build();
  driver.get('http://www.dokkio.com');
});

test.after(function() {
  driver.quit();
});

test.describe('Dokkio Jobs Section', function() {
  test.it('QA job listing is not displayed until you click QA button', function() {
    var jobHeader1 = driver.findElement(webdriver.By.css('div.iw-so-tabs-panel.iw-so-tab-active h3'));
    var buttonQA = driver.findElement(webdriver.By.css('li#Jobs-2 a'));
    jobHeader1.getText().then(function(value) {
      assert.equal(value, 'Senior Full Stack Engineer');
    });
    buttonQA.click()
    var jobHeader2 = driver.findElement(webdriver.By.css('div.iw-so-tabs-panel.iw-so-tab-active h3'));
    jobHeader2.getText().then(function(value) {
      assert.equal(value, 'QA Engineer');
    });
  });
});
