
function drawLogScales() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'date');
  data.addColumn('number', 'TemperatureOut');
    data.addColumn('number', 'TemperatureIn');


  data.addRows([
    [0, 0,20], [1, 1,19], [2,3,21], [3,4, 21], [4,3, 22], [5, 9, 21]
  ]);

  var materialOptions = {
    chart: {
    },
    width: 600,
    height: 100,
    backgroundColor: { fill: 'transparent' },
    minorGridlines: { count: 0 }, gridlines: { count: 0 },
    colors: ['gray', 'gray'],
    legend:{position: 'none'},
    vAxis: {
      baselineColor: 'transparent',
      gridlineColor: 'transparent',
      textPosition: 'none'
    },
    hAxis: {
      baselineColor: 'transparent',
      gridlineColor: 'transparent',
      textPosition: 'none'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, materialOptions);
}