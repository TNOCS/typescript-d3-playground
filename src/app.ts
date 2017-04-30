import * as d3 from 'd3';

const createChart = () => {
  const width = 800;
  const height = 300;

  const margin = {
    left: 30,
    right: 30,
    top: 20,
    bottom: 20
  };

  const barHeight = 30;

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([margin.left, width - margin.right - margin.left]);

  d3.selectAll('#chart svg').remove();
  const chart = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const bar = chart.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${barHeight * i})`);

  bar.append('rect')
    .attr('width', d => x(d))
    .attr('height', barHeight - 1);

  bar.append('text')
    .attr('x', d => x(d) - 3)
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(d => d);
};

window.onload = createChart;