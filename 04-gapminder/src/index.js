import * as d3 from "d3";
import pib from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";
import esperance from "../data/life_expectancy_years.csv";
import population from "../data/population_total.csv";

// Le premier rendu implique la visualisation statique des données data/gapminder.csv pour l'année 2021 sous forme de Scatter/Bubble Chart.
//Vous aurez sur l'axe X les données de PIB par habitant et sur l'axe Y l'espérance de vie.
//La taille des cercles devra être proportionnelle à la population du pays.

const pib2021 = pib.map((d) => {
  return parseInt(d[2021]);
});
const maxpib2021 = Math.max(...pib2021); //ici ce n'est pas la valeur max qui est prise… (pourquoi?)

//il faudrait pouvoir prendre la lettre suivant le chiffre du tableau et ajouter les 0 qu'il faut

/*
if(k){
    … * 10^3
}
elseif(M){
    … * 10^6
}
elseif(B){
    … * 10^9
}
else {
    return pib2021
}

*/

const esperance2021 = esperance.map((d) => {
  return d[2021];
});
const maxesperance2021 = d3.max(esperance2021);

const population2021 = population.map((d) => {
  return d[2021];
});

// console.log(pib2021);
// console.log(esperance2021);
// console.log(population2021);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", height)
  .attr("height", width);

const margin = { top: 10, right: 40, bottom: 20, left: 40 },
  width = window.innerWidth * 0.8,
  height = window.innerHeight * 0.8;

svg
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//échelles

//création + dessin des axes
const x = d3.scaleLinear().domain([0, maxpib2021]).range([0, width]); //ici il faut prendre la valeur max du PIB

svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
  .call(d3.axisBottom(x));

// axe Y
const y = d3.scaleLinear().domain([0, maxesperance2021]).range([height, 0]);

svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)
  .call(d3.axisLeft(y));

//il faut rassembler toutes les données en un tableau pour pouvoir dessiner les cercles

/*  let data = [];
  data.push(population2021, pib2021, esperance2021); */

svg
  .select("body")
  .append("circle")
  .data(population2021, pib2021, esperance2021)
  .enter()
  .attr("r", (d) => d.population2021)
  .attr("cx", (d) => x(d.pib2021))
  .attr("cy", (d) => y(d.esperance2021))
  .attr("fill", "pink");
