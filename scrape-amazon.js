const puppeteer = require("puppeteer");
const fs = require("fs");
const sanitize = require("sanitize-filename");

const userInput = process.argv[2];

if (!userInput) {
  console.error("Please provide the user input.");
  process.exit(1);
}

(async () => {
  const folderName = sanitize(userInput);

  try {
    // Create a folder for the product
    fs.mkdirSync(folderName);

    // Launching  a headless Chrome browser
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Navigate to Amazon search results page
    await page.goto(`https://www.amazon.com/s?k=${userInput}`);

    // Wait for page to load completely
    await page.waitForSelector("h2 a");

    // Get the link of the first product in the search results
    const productLink = await page.evaluate(() => {
      const productLinkElement = document.querySelector("h2 a");
      return productLinkElement
        ? productLinkElement.getAttribute("href")
        : null;
    });

    if (productLink) {
      // Navigatating to the product page
      await page.goto(`https://www.amazon.com${productLink}`);

      // Take a screenshot of the product page
      await page.screenshot({ path: `${folderName}/Image.png` });

      // Get the HTML content of the product page
      const productHTML = await page.content();

      // Save the HTML content in the file
      fs.writeFileSync(`${folderName}/product.html`, productHTML);

      console.log("Screenshot and HTML content saved.");
    } else {
      console.log("Product not found.");
    }

    await browser.close(); //closing the browser
  } catch (error) {
    console.error("Error:", error);
  }
})();

