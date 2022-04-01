import * as d3 from "d3";
import pib from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";
import esperance from "../data/life_expectancy_years.csv";
import population from "../data/population_total.csv";

// Le premier rendu implique la visualisation statique des données data/gapminder.csv pour l'année 2021 sous forme de Scatter/Bubble Chart.
//Vous aurez sur l'axe X les données de PIB par habitant et sur l'axe Y l'espérance de vie. La taille des cercles devra être proportionnelle à la population du pays.

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", height)
  .attr("height", width);

const margin = { top: 10, right: 40, bottom: 10, left: 40 },
  width = 450 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

svg
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//échelles

const x = d3.scaleLinear().domain([0, 100]).range([0, width]);

//création + dessin des axes

svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

svg.append("g").call(d3.axisLeft(y));

//dessin des cercles

svg
  .append("circle")
  .attr("cx", x(10))
  .attr("cy", y(60))
  .attr("r", 40)
  .style("fill", "blue");
svg
  .append("circle")
  .attr("cx", x(50))
  .attr("cy", y(60))
  .attr("r", 40)
  .style("fill", "red");
svg
  .append("circle")
  .attr("cx", x(100))
  .attr("cy", y(60))
  .attr("r", 40)
  .style("fill", "green");
