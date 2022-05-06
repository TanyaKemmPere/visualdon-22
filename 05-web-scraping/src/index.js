import jsdom from "jsdom";
import fetch from "isomorphic-fetch"
import puppeteer from "puppeteer"


/* //const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fr.wikipedia.org/wiki/Canton_(Suisse)#Données_cantonales');
  await page.screenshot({ path: 'cantons.png' });

  await browser.close();
})(); */

const getScreenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://fr.wikipedia.org/wiki/Canton_(Suisse)#Données_cantonales')
  await page.screenshot({ path: 'cantons.png' })
  await browser.close()
}

getScreenshot()
