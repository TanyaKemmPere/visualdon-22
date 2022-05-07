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

  /* 
  const tweets = await page.evaluate(() => Array.from(document.getElementsByClassName('tweet'), e => e.innerText));

tweets.forEach(tweet => {
  console.log(tweet);
});

let nodeList = document.querySelectorAll(selector);
let elements = Array.from(nodeList);
  */

//il faudrait prendre tous les td > a wr td > bdi avec .innerText et sortir un canton et une pop 

  const canton = await page.$eval("td > a", (el) => el.innerText);
  console.log(canton);

  const pop = await page.$eval("td > bdi", (el) => el.innerText);
  console.log(pop);

  await page.screenshot({ path: "cantons.png" });
  await browser.close();
};

webScrapping();

//pour canton: table class="wikitable sortable jquery-tablesorter” > tbody > tr > first td > soit a soit i
