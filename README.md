This file provides an overview of how the Amazon product scraping code is designed and instructions on how to run the code. The code is designed to scrape product information from Amazon using Node.js and Puppeteer.

The project is developed as follows:

scrape-amazon.js: The main script that uses Puppeteer to scrape product information from an Amazon product page.
package.json: A Node.js package configuration file containing project dependencies and scripts.
Dependencies

The whole project relies on the Puppeteer library:
Puppeteer: A headless browser automation tool for Node.js, used to interact with websites and extract data.

Code Explanation:

The scrape-amazon.js script does the following:

1.Imports the following dependencies: Puppeteer, sanitize-filename.
2.Take the input from the user and process through process.argv.
3.Sanitize the input using sanitize-filename package.
4.Create the directory with the input that we give in the 2nd step.
5.Launches a headless browser instance.
6.Opens a new page in the browser.
7.Navigates to the specified Amazon product page.
8.Extracts product information from the page using JavaScript's document.querySelector to select the first product in the page, navigate to the selected product page, take the screenshot of the product page , HTML content of the page and save the file and image in the above created directory.
9.Closes the browser.

Please follow the below steps to run the Amazon product scraping code:

Clone or Download the Repository: If you haven't already, download or clone the project from your Git repository.

Install Node.js: Make sure you have Node.js installed.

Navigate to the Project Directory: Open your terminal or command prompt and navigate to the directory where you've placed the scrape-amazon.js file.

Install Dependencies: Run the following command to install the necessary dependencies (Puppeteer): npm install

Edit the URL (Optional): Open scrape-amazon.js in a text editor and replace the productURL variable with the URL of the Amazon product page you want to scrape.

Run the Script: Execute the following command to run the scraping script: node scrape-amazon.js

Puppeteer will launch a headless browser, navigate to the specified Amazon product page, Take the screenshot of the product page and HTML content of the page, and save it in the above created foldername(folderName)

Please note that I used asyncronous Immediately Invoked Function(IIF) to perform above steps,and handled exceptions/errors using try catch blocks.

