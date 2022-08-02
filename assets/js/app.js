// FETCH PRODUCTS DATA
async function fetchData() {
  const response = await fetch("https://api.covid19api.com/summary");
  const products = await response.json();
  console.log(products);
  return products;
}




// // Atualização dashboard
// !(function paisesDash() {
//   paises = fetchData().then((products) => {
//     const paises = products.Countries.map(function (index) {
//       return index.Country;
//     });
//     console.log(paises);
//     const paisesTop10 = paises.slice(0, 10)
    
//     myChart2.config.data.labels = paisesTop10
//     myChart2.config.data.datasets.data = paisesTop10
//     myChart2.update()
//   });
// })()





// NÚMEROS
// Global
// Date: "2022-08-01T00:59:14.518Z"
// NewConfirmed: 567528
// NewDeaths: 988
// NewRecovered: 0
// TotalConfirmed: 575436732
// TotalDeaths: 6394187
// TotalRecovered: 0

//setup pizza---------------------
!(function pizza() {
  const labels = ["NewConfirmed", "NewRecovered", "NewDeaths"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Distribuição de novos casos",
        data: [20, 50, 20],
        backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
        hoverOffset: 20,
      },
    ],
  };
  //config
  const config = {
    type: "pie",
    data: data,
    options: {},
  };
  //load
  const myChart = new Chart(document.getElementById("mychart"), config);
})()

//Setup Barras --------------------------------------
(function barras() {
  const labels2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Total de mortes por país - Top 10",
        data: [65, 59, 80, 81, 56, 55, 40, 10, 80, 25],
        backgroundColor: ["#9966ff"],
      },
    ],
  };
  //config
  const config2 = {
    type: "bar",
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  //render
  const myChart2 = new Chart(document.getElementById("mychart2"), config2);
  
})()

