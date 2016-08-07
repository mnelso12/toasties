console.log('in pie chart js');

////////////////////// keywords stuff //////////////////////////
var keywords = {
	'arr':['jared', 'twilio', 'cell phones', 'code', 'computers', 'MLH', 'hacker', 'gross'],
};

var buttons = {
		'0':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-info">',	
		'1':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-success">',
		'2':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-danger">',	
		'3':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-secondary">',	
		'4':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-warning">',	
		'5':'<button type="button" style="margin-left: 5px; margin-right: 5px;" class="btn btn-primary">',
};

var arr = keywords['arr'];
for (var i=0; i<arr.length; i++) {
	$('#keywords_div').append($(buttons[i%6] + arr[i] + "</button>"));	
}







////////////////////// chart stuff //////////////////////////

// bar chart
var filler_nums = {
	'likes_num':16,
	'umms_num':11,
	'ahhs_num':9,
	'okays_num':7,
	'you_knows_num':23,
	'rights_num':5,
};

for (key in filler_nums) {
	$("#"+key).text(filler_nums[key]);
	var bar_length = filler_nums[key] * 10;
	$("#"+key).css('width', bar_length + 'px');
}

// labels to left of bar chart
var filler_names = {
	'Likes':16,
	'Umms':11,
	'Ahhs':9,
	'Okays':7,
	'You knows':23,
	'Rights':5,
};

for (key in filler_names) {
	var label = key + ': ' + filler_names[key];
	console.log(label);
	$("#"+key).text(label);
}




// pie chart json
var pie_chart_nums = {
	'Positive':86,
	'Neutral':12,
	'Negative':2
};

var pie_chart_nums_array = [
	['Task', 'hours per day'],
	['Positive', pie_chart_nums['Positive']],
	['Neutral', pie_chart_nums['Neutral']],
	['Negative', pie_chart_nums['Negative']],
];

// pie chart display stuff
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
	
	var data = google.visualization.arrayToDataTable(pie_chart_nums_array);

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
