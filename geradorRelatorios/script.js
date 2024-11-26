// script.js

document.getElementById("report-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter os dados do formulário
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const qntd= parseFloat(document.getElementById("qntd").value);

    // Criar o relatório
    const relatorio = `
    Relatório Gerado:

    Nome: ${nome}
    Data: ${data}
    Valor: R$ ${valor.toFixed(2)}
    Quantidade: ${qntd}
    `;

    // Armazenar os dados no localStorage (opcional)
    localStorage.setItem("relatorio", relatorio);

    // Exibir o relatório na tela
    document.getElementById("relatorio").textContent = relatorio;
    document.getElementById("relatorio-container").style.display = "block";

    // Limpar o formulário
    document.getElementById("report-form").reset();
});

const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {
   //conteudo pdf
   const content = document.querySelector("#content")

   //configuração do arquivo final de pdf
   const options = { 
       margin: [10, 10, 10, 10],
       filename: "dados",
       html2canvas: {scale: 2},
       jsPDF: {unit: "mm", format: "a4", orietation: "portrait"}
   }

   //baixar o pdf
   html2pdf().set(options).from(content).save(); //aq seleciona oq vc quer colocar no pdf
   




})