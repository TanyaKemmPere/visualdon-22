import jsdom from "jsdom";
import fetch from "isomorphic-fetch";
import puppeteer from "puppeteer";



//code pris sur https://www.scrapingbee.com/blog/web-scraping-javascript/
 const webScrapping = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://fr.wikipedia.org/wiki/Canton_(Suisse)#Données_cantonales"
  );
  const name = await page.$eval('td > a', el => el.innerText)
  console.log(name)
  await page.screenshot({ path: "cantons.png" });
  await browser.close();
};

webScrapping(); 

//pour canton: table class="wikitable sortable jquery-tablesorter” > tbody > tr > first td > soit a soit i 
