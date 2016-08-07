google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

console.log('in pie chart js');

function drawChart() {
	
	var data = google.visualization.arrayToDataTable([
		['Task', 'hours per day'],
		['Positive', 30], 
		['Neutral', 15], 
		['Negative', 55], 
	]);

	var options = {
		backgroundColor: 'transparent',
		is3D: true,
		chartArea: {'width': '80%', 'height': '90%'},
		slices: {
			0: { color: '#00bc8c' },
			1: { color: '#3498db'},
			2: { color: '#f39c12'}
		},
		legend: {
			textStyle: { color : 'white' }
		}
	};
	
	var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
	chart.draw(data, options);
}
