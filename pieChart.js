google.charts.load('current', {'packages':['corechart']});
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
		slices: {
			0: { color: '#00bc8c' },
			1: { color: '#3498db'},
			2: { color: '#f39c12'}
		},
		legend: {
			textStyle: { color : 'white', annotations: {
			    textStyle: {
					fontName: 'Verdana',
					fontSize: '55',
					bold: true,
					// The color of the text.
					color: '#871b47',
					// The color of the text outline.
					auraColor: '#d799ae',
					// The transparency of the text.
					opacity: 0.8
						   }
					   }}
		},
		annotations: {
			textStyle: {
				fontName: 'Verdana',
				fontSize: 100,
				bold: true,
				// The color of the text.
				color: '#ffffff',
				// The color of the text outline.
				auraColor: '#d799ae',
				// The transparency of the text.
				opacity: 0.8
			}
		}
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(data, options);
}
