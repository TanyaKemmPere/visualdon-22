import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!

console.log(42);


const circle1 = d3.select("body")
                  .append("svg")
                  .attr("width", 300)
                  .attr("height", 300)
                  .attr("class", "les-trois-cercles")
                  .append("circle")
                  .attr("cx", "50")
                  .attr("cy", "50")
                  .attr("r", "40")
                  .style("fill", "indianred");

const circle2 = d3.select(".les-trois-cercles")
                  .append("circle")
                  .attr("cx", "150")
                  .attr("cy", "150")
                  .attr("r", "40")
                  .style("fill", "indianred")

const circle3 = d3.select(".les-trois-cercles")
                  .append("circle")
                  .attr("cx", "250")
                  .attr("cy", "250")
                  .attr("r", "40")
                  .style("fill", "indianred")