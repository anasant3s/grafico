const trainData = [
    { name: "Linha 8", time: 10, passengers: 1200, status: "Atrasado" },
    { name: "Linha 12", time: 12, passengers: 1570, status: "No horário" },
    { name: "Linha 9", time: 14, passengers: 3880, status: "Atrasado" },
    { name: "Linha 7", time: 16, passengers: 2090, status: "No horário" },
    { name: "Linha 11 ", time: 18, passengers: 1805, status: "No horário" }
];

// Função para gerar a tabela HTML
function generateTable(data) {
    let table = `<table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                        <th>Horário</th>
                            <th>Passageiros</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>`;

    data.forEach(item => {
        table += `<tr>
                    <td>${item.name}</td>
                    <td>${item.time}h</td>
                    <td>${item.passengers}</td>
                    <td>${item.status}</td>
                  </tr>`;
    });

    table += `</tbody></table>`;
    document.getElementById('train-table-container').innerHTML = table;
}

// Gerar a tabela
generateTable(trainData);

// Função para gerar o gráfico de barras com D3.js
function generateBarChart(data) {
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#chart-container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.passengers)])
        .nice()
        .range([height, 0]);

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.passengers))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.passengers))
        .attr("fill", d => d.status === "No horário" ? "#C02D0F" : "#851F0B");

    svg.append("g")
        .selectAll(".x-axis")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "x-axis")
        .attr("x", d => x(d.name) + x.bandwidth() / 2)
        .attr("y", height + 30)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .attr("class", "chart-title")
        .text("Número de Passageiros nos Trens");
}

