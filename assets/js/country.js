//setup line---------------------
!(function linhas() {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Número de Mortes",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Média de Mortes",
        data: [14, 20, 35, 50, 45, 25, 43],
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  };
  // Config
  const config = {
    type: "line",
    data: data,
  };

  //load
  const myChart3 = new Chart(document.getElementById("linhas"), config);
})();
