import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!

const height = 300;
const width = 300;
let r = 40;
let x1 = 100;
let x2 = 200;
let x3 = 250;

const svgCercles = d3.select("body")
                     .append("div")
                     .append("svg")
                     .attr("width", height)
                     .attr("height", width)
                     .attr("class", "les-trois-cercles")

const circle1 = d3.select(".les-trois-cercles")
                  .append("circle")
                  .attr("cx", x1)
                  .attr("cy", "50")
                  .attr("r", r)
                  .attr("id", "cercle1")
                  .style("fill", "indianred")

const circle2 = d3.select(".les-trois-cercles")
                  .append("circle")
                  .attr("cx", x2)
                  .attr("cy", "150")
                  .attr("r", r)
                  .attr("id", "cercle2")
                  .style("fill", "darkolivegreen")

const circle3 = d3.select(".les-trois-cercles")
                  .append("circle")
                  .attr("cx", x3)
                  .attr("cy", "250")
                  .attr("r", r)
                  .attr("id", "cercle3")
                  .style("fill", "indianred")

const texte1 = d3.select("body")
                 .append("p")
                 .attr("id", "texte1")
                 .text("hello")

///////////////////////

circle3.on("click", () => 
{
    circle1.attr("cx", x3)
    circle2.attr("cx", x3)
});

///////////////////////

const tableau = [20, 5, 25, 8, 15];

const svgGraphe = d3.select("body")
                    .append("svg")
                    .attr("width", height)
                    .attr("height", width)

svgGraphe.selectAll('.bar')
         .data(tableau)
         .enter()
         .append('rect')
         .attr('x', (d,i) => i*25 )
         .attr('y', (d) => 100-d)
         .attr('width', 20)
         .attr('height', (d) => d)