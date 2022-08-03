
//FETCH PRODUCTS DATA------------------------------------------------
async function fetchData() {
  const response = await fetch("https://api.covid19api.com/summary");
  const products = await response.json();
  console.log(products);
  return products;
}

//CONST FETCH PRODUCTS DATA
const covidDataSummary = fetchData();
//-------------------------------------------------------------------





//ARRAY SUMMARY / COUNTRIES / COUNTRY--------------------------------
// function country() {
//   covidDataSummary.then((products) => {
//     const paises = products.Countries.map(function (elem) {
//       return elem.Country;
//     });
//     console.log(paises);
//   });
// }
// //CONST PAISES
// const paisesArray = country();
//-------------------------------------------------------------------



//ARRAY TOTAL DEATHS-------------------------------------------------
// function totalDeaths() {
//   covidDataSummary.then((products) => {
//     const deathsTotal = products.Countries.map(function (elem) {
//       return elem.TotalDeaths;
//     });
//     console.log(deathsTotal);
//   });
// }
// // CONST TOTAL DEATHS
// const totalDeathArray = totalDeaths()
//-------------------------------------------------------------------



// //ARRAY SUMMARY / COUNTRIES------------------------------------------
// function summaryCountries() {
//   covidDataSummary.then((products) => {
//     const array = products.Countries.map(function (elem) {
//       return elem;
//     });
//     console.log(array);
    
//   })
// }
// //CONST SUMMARY / COUNTRIES:
// const summaryCountriesConst = summaryCountries();
// console.log(summaryCountriesConst)   <---- pq console.log fica undefined
// ------------------------------------------------------------------



//ARRAY SUMMARY / COUNTRIES ORDENADO DECRESCENTE TOP 10---------------------
function summaryCountriesDesc() {
  covidDataSummary.then((products) => {
    const array = products.Countries.map(function(elem) {
      return elem;
    });
    const arrayProductsOrder = _.sortBy(array, [function(o) {return o.TotalDeaths}]).reverse().slice(0, 10)
    console.log(arrayProductsOrder)
    return arrayProductsOrder
  })
}
//CONST SUMMARY / COUNTRIES / top 10 maiores mortes
const arrayTop10CountryDeaths = summaryCountriesDesc()
// ------------------------------------------------------------------

// console.log(arrayTop10CountryDeaths) // undefined 



//ARRAY TOP 10 PAISES------------------------------------------------
function top10Paises() {
  covidDataSummary.then((products) => {
    const array = products.Countries.map(function(elem) {
      return elem;
    });
    const arrayProductsOrder = _.sortBy(array, [function(o) {return o.TotalDeaths}]).reverse().slice(0, 10)
    const array2 = arrayProductsOrder.map(function(elem) {
      return elem.Country;
    });
    console.log(array2)
    return array2
  })
  
}
const arrayTop10paises = top10Paises()
// ------------------------------------------------------------------



//ARRAY TOP 10 DEATHS
function top10TotalDeaths() {
  covidDataSummary.then((products) => {
    const array = products.Countries.map(function(elem) {
      return elem;
    });
    const arrayProductsOrder = _.sortBy(array, [function(o) {return o.TotalDeaths}]).reverse().slice(0, 10)
    const array2 = arrayProductsOrder.map(function(elem) {
      return elem.TotalDeaths;
    });
    console.log(array2)
    return array2
  })
}
const arrayTop10Deaths = top10TotalDeaths()
// ------------------------------------------------------------------


//PIZZA FUNÇÃO-------------------------------------------------------
function pizza() {
  //setup pizza
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
//render
  const myChart = new Chart(document.getElementById("mychart"), config);
}

// CONST GRÁFICO PIZZA
const pizzaChart = pizza();
//-------------------------------------------------------------------



//BARRAS FUNÇÃO------------------------------------------------------
function bar() {
//Setup Barras
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
}
//CONST GRÁFICO BARRAS
const barChart = bar();
//-------------------------------------------------------------------







//ARRAY SUMMARY / COUNTRIES ORDENADO DECRESCENTE---------------------
// const arrayProductsOrder = _.sortBy(summaryCountriesConst, [function(o) {return o.TotalDeaths}]).reverse()
// console.log(arrayProductsOrder)
// // ------------------------------------------------------------------



// //ARRAY SUMMARY / COUNTRIES ORDENADO DECRESCENTE---------------------
// const arrayProductsOrder2 = _.sortBy(summaryCountriesConst, ["Country"], ["TotalDeaths"]).reverse()
// console.log(arrayProductsOrder2)
// // ------------------------------------------------------------------



// //ARRAY SUMMARY / COUNTRIES ORDENADO DECRESCENTE---------------------
// const arrayProductsOrder3 = _.orderBy(summaryCountriesConst, ["Country", "TotalDeaths"], ['asc', 'desc'])
// console.log(arrayProductsOrder3)
// ------------------------------------------------------------------











// ORDEM DE ATIVAÇÃO DAS FUNÇÕES-------------------------




