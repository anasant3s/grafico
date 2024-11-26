
  const dadosTrens = {
    labels: ['Linha 7-Rubi', 'Linha 8-Diamante', 'Linha 9-Esmeralda', 'Linha 10-Turquesa', 'Linha 11-Coral'],
    datasets: [{
        label: 'Trens com falhas',
        data: [3, 25, 40, 5, 4], // número de trens por linha 
        backgroundColor: ['#690500', 'gray', '#22A386', '#18719D', '#FA3C14'],
        borderColor: ['#4E0500', '#33FF57', '#166957', '#135C81', '#C02D0F'], //hover efeito
        borderWidth: 0
    }]
};

const config = {
    type: 'pie', // tipo de gráfico (barras)
    data: dadosTrens,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// criação do gráfico
const ctx = document.getElementById('grafico').getContext('2d');
const grafico = new Chart(ctx, config);