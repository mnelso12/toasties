var submit_button = document.getElementById("submit");
console.log("hello");

submit_button.onclick = function() {
    httpGetAsync();
};

/*
var file = $("#speech_file");
console.log(file);

$("#submit").click(function() {
	console.log("pressed submit");


});

$(document).ready(function(){

    console.log("got here");
	httpGetAsync('http://google.com');

});
*/

function httpGetAsync()
{
    console.log("got here");
	var xmlHttp = new XMLHttpRequest();
    var url = 'https://raw.githubusercontent.com/mnelso12/toasties/master/README.md';

	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4) {
            console.log("got here2");
			console.log(xmlHttp.responseText);
        }
	};
	xmlHttp.open("GET", url, true); // true for asynchronous 
	xmlHttp.send(null);
}
