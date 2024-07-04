# UI Automation for Traveloka Technical Test

This repository contains a UI automation framework developed for the Traveloka technical test. It uses Mocha as the testing framework and Selenium WebDriver for browser automation. The tests are written in JavaScript and designed to ensure the reliability and functionality of Traveloka's web application.


- **src/pages**: Contains page object classes.
- **src/selectors**: Contains the XPath selectors.
- **test**: Contains test cases organized by feature.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) or any other WebDriver compatible with your browser.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ui-automation.git
    cd ui-automation
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running Tests

To run the tests, use the following command:

```bash
npm test
