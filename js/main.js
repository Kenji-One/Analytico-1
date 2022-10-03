let myChart = document.getElementById("my-chart").getContext("2d");

const monthChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Months",
        data: [10, 20, 50, 90, 70, 60, 34, 20, 45, 60, 20, 35],
        backgroundColor: ["#D8E3E9"],

        borderRadius: [9.1],
        hoverOffset: 4,
        hoverBackgroundColor: "#00BD9D",
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderWidth: 3,
          drawBorder: false,
          drawTicks: false,
          drawOnChartArea: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          drawTicks: false,
          display: false,
          drawBorder: false,
          drawOnChartArea: false,

          lineWidth: 5,
        },
      },
    },
  },
});
const tooltipLine = {
  id: "tooltipLine",
  beforeDraw: (chart) => {
    const myChart = chart.myChart;
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const myChart = chart.myChart;
      myChart.save();
      const activePoint = chart.tooltip._active[0];
      console.log(activePoint.element.y);

      myChart.beginPath();
      myChart.setLineDash([5, 7]);
      myChart.moveTo(activePoint.element.x, chart.chartArea.top);
      myChart.lineTo(activePoint.element.x, activePoint.element.y);
      myChart.lineWidth = 2;
      myChart.strokeStyle = "grey";
      myChart.stroke();
      myChart.restore();

      myChart.beginPath();
      myChart.moveTo(activePoint.element.x, activePoint.element.y);
      myChart.lineTo(activePoint.element.x, 350);
      myChart.lineWidth = 2;
      myChart.strokeStyle = "red";
      myChart.stroke();
      myChart.restore();
    }
  },
};

function beforePrintHandler() {
  for (let id in Chart.instances) {
    Chart.instances[id].resize();
  }
}
window.addEventListener("beforeprint", () => {
  myChart.resize(1800, 1800);
});
window.addEventListener("afterprint", () => {
  myChart.resize();
});

$(document).ready(function () {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
  });
});

const MobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".side-bar");
MobileNavBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// const MobileNavBtn = document.querySelector(".btn-mobile-nav");
// const mainNav = document.querySelector(".side-bar");
// MobileNavBtn.addEventListener("click", () => {
//   mainNav.classList.toggle("nav-open");
// });
