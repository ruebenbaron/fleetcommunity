function showResults() {
  $("#qp_front").toggleClass("hide");
  $("#qp_back").fadeIn(1000);
  var data = [
      {
          value: 20,
          color:"rgba(0, 37, 64, 1)",
          highlight: "rgba(0, 37, 64, 0.8)",
          label: "... in Zukunft dominieren."
      },
      {
          value: 40,
          color: "rgba(0, 70, 102, 1)",
          highlight: "rgba(0, 70, 102, 0.8)",
          label: "... immer wichtiger"
      },
      {
          value: 10,
          color: "rgba(19, 111, 142, 1)",
          highlight: "rgba(19, 111, 142, 0.8)",
          label: "... auf lange Sicht unverändert bleiben."
      },
      {
          value: 30,
          color: "rgba(243, 244, 245, 1)",
          highlight: "rgba(243, 244, 245, 0.8)",
          label: "... sich nicht durchsetzen."
      },
  ]

  var option = {
  responsive: true
  };

  // Get the context of the canvas element we want to select
  var ctx = document.getElementById("qp_chart").getContext('2d');
  var myPieChart = new Chart(ctx).Pie(data,option); //'Pie' defines type of the chart.
}
