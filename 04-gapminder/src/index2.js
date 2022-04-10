import * as d3 from "d3";
import esperance from "../data/life_expectancy_years.csv";
import worldmap from "../data/world.geojson";

const margin = { top: 10, right: 40, bottom: 20, left: 40 },
  width = window.innerWidth * 0.8,
  height = window.innerHeight * 0.8;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", height)
  .attr("height", width)
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// définir la projection
const projection = d3
.geoMercator();
// passer la projection à pathCreator
const pathCreator = d3
.geoPath()
.projection(projection);

//solution inspirée de Alexia Léger

function esperancePays(country){
    const data = esperance.find((esp) => esp.country == country.name);
    return data;
}

//mettre de la couleur
const couleur = d3
.scaleLinear()
.domain([50, 100])
.range(["#FFFF00", "#191900"]);


//dessiner la carte
svg.selectAll('path')
.data(worldmap.features)
.enter()
.append('path')
.attr('d', pathCreator)
//solution inspirée de Alexia Léger
.attr('fill', function(d) {
    const data2 = esperancePays(d["properties"]["name"]);
    return couleur(data2);
})



