import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a good desktop size for a thumbnail
  await page.setViewport({ width: 1280, height: 720 });
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  // Take screenshot and save it
  await page.screenshot({ path: 'public/images/portfolio.png' });
  
  await browser.close();
})();
