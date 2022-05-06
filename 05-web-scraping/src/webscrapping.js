import jsdom from "jsdom";
import fetch from "isomorphic-fetch"


const puppeteer = require("puppeteer")

const getScreenshot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("http://www.google.com")
  await page.screenshot({ path: "05-web-scraping/src/capture.png" })
  await browser.close()
}

getScreenshot()