import * as d3 from "d3";
import pib from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";
import esperance from "../data/life_expectancy_years.csv";
import population from "../data/population_total.csv";

// Le premier rendu implique la visualisation statique des données data/gapminder.csv pour l'année 2021 sous forme de Scatter/Bubble Chart.
//Vous aurez sur l'axe X les données de PIB par habitant et sur l'axe Y l'espérance de vie.
//La taille des cercles devra être proportionnelle à la population du pays.

const pib2021 = pib.map((d) => {
  return d[2021];
});
const maxpib2021 = d3.max(pib2021); //ici ce n'est pas la valeur max qui est prise… (pourquoi?)
const minpib2021 = d3.min(pib2021)

const esperance2021 = esperance.map((d) => {
  return d[2021];
});
const maxesperance2021 = d3.max(esperance2021);
const minesperance2021 = d3.min(esperance2021);

const population2021 = population.map((d) => {
  return d[2021];
});

console.log(pib2021);
console.log(esperance2021);
console.log(population2021);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", height)
  .attr("height", width);

const margin = { top: 10, right: 50, bottom: 20, left: 50 },
  width = 450 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

svg
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//création + dessin des axes
const x = d3.scaleLinear().domain([minpib2021, maxpib2021]).range([0, width]); //ici il faut prendre la valeur max du PIB

svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

const y = d3.scaleLinear().domain([minesperance2021, maxesperance2021]).range([height, 0]); //ici il faut prendre la valeur max de l'âge

svg
  .append("g")
  .attr("transform", "translate(0," + margin.left + ")")
  .call(d3.axisLeft(y));
