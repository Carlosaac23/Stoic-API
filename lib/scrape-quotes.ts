import { writeFile } from 'fs/promises';

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

async function scrapeQuotes() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });
  const page = await browser.newPage();

  await page.goto(
    'https://www.goodreads.com/author/quotes/17212.Marcus_Aurelius',
    {
      waitUntil: 'networkidle2',
    }
  );
  await page.waitForSelector('.quoteText', { timeout: 10000 });
  await page.setViewport({ width: 1080, height: 1024 });

  const quotes = await page.evaluate(() => {
    const quotesList = document.querySelectorAll('.quoteText');
    const quotesArray = [...quotesList];
    return quotesArray.map(quoteElement => {
      const quoteElementText = quoteElement.textContent;
      const author =
        quoteElement
          .querySelector('span.authorOrTitle')
          ?.textContent.replace(',', '')
          .trim() || '';
      const bookLink =
        quoteElement.querySelector('a.authorOrTitle')?.textContent.trim() || '';
      console.log(author);
      console.log(bookLink);
      const textWithoutAuthor = quoteElementText.replace(author, '');
      const cleanText = textWithoutAuthor
        .replace(bookLink, '')
        .replace(/\s+/g, ' ')
        .replace('“', '')
        .replace('--', '')
        .trim();

      return {
        quote: cleanText,
        author,
      };
    });
  });

  try {
    await writeFile('./data/marcus.json', JSON.stringify(quotes, null, 2));
    console.log('File has been written successfully!');
  } catch (error) {
    console.error('Error writing file: ', error);
  }

  await browser.close();
}

scrapeQuotes();
