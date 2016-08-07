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
    console.log("Starting http Get Async");
	var xmlHttp = new XMLHttpRequest();
    var url = 'https://raw.githubusercontent.com/mnelso12/toasties/master/README.md';

	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4) {
			console.log(xmlHttp.responseText);
        }
	};
	xmlHttp.open("GET", url, true); // true for asynchronous 
	xmlHttp.send(null);
}

// note incomplete need page and specs to send to.
function httpPostAsync() {
    console.log("Starting http Post Async");
    var request = new XMLHttpRequest();

    request.open('POST', url_to_post_to);

    // headers if necessary
    request.setRequestHeader("dictionary", "format");

    // once all data has been transmitted
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            // do something
            // console.log for debug
            // send data somewhere else maybe
        }
    };
    request.send();
}
