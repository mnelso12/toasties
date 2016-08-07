// bar chart
var filler_nums = {
	'likes_num':16,
	'umms_num':11,
	'ahhs_num':9,
	'okays_num':7,
	'you_knows_num':23,
	'rights_num':5
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
	'Rights':5
}

for (key in filler_names) {
console.log(filler_names[key]);
	var label = key + ': ' + filler_names[key];
	console.log(label);
	$("#"+key).text(label);
}
