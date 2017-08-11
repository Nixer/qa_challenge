import unittest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager


class DokkioTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(ChromeDriverManager().install())
        cls.driver.implicitly_wait(30)
        cls.driver.maximize_window()
        cls.driver.get("http://www.dokkio.com")

    def test_qa_job_listing(self):
        self.job_header1 = self.driver.find_element_by_css_selector("div.iw-so-tabs-panel.iw-so-tab-active h3")
        self.button_qa = self.driver.find_element_by_css_selector("li#Jobs-2 a")
        self.assertEqual("Senior Full Stack Engineer", self.job_header1.text)
        self.button_qa.click()
        self.job_header2 = self.driver.find_element_by_css_selector("div.iw-so-tabs-panel.iw-so-tab-active h3")
        self.assertEqual("QA Engineer", self.job_header2.text)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__ == '__main__':
    unittest.main(verbosity=2)
