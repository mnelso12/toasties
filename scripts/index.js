// Main Javascript file
var kairos_api_url = "https://api-dev.kairos.com/";
var kairos_api_id = "7dc697b8";
var kairos_api_key = "de47fb31888ed4c71e4eff9700ebee52";


//////////////////////////////////
//          Stopwatch           //
//////////////////////////////////

/*
var cls_stopwatch = {
    running: 0,
    start_time: 0,
    start_time_str: "00:00:00",
    
    var now = function () {
        return (new Date()).getTime();
    };

    //public
    this.start = function() {
        if (running === 0) {
            start_time = now();
            running = 1;
        }
        else {
            // nothing
        }
    };

    this.stop = function() {
        if (running == 1) {
            running = 0;
        }
        else {
            // nothing
        }
    };

    this.reset = function() {
        start_time = 0;
        running = 0;
    };

    this.time = function() {
        if (running == 1){
            return  now() - start_time;
        }
        else {
            return 0;
        }
    };
};

function update(sw, timer) {
    timer.innerHTML = sw.time();
}

function start(sw, timer, clk_timer) {
    clocktimer = setInterval(update(), 1);
    sw.start();
}

function stop(sw, timer, clk_timer) {
    sw.stop();
    clearInterval(clocktimer);
}

*/
///////////////////////////////////////////
//          End Stopwatch Stuff          //
///////////////////////////////////////////

// Set up variables
var URL, data;
var start_button, stop_button;
var timer;
//var stop_watch = new cls_stopwatch();
var clocktimer;

/*
// Set up http request
var xmlhttp = new XMLHttpRequest();

// Open request and send (no body?)
xmlhttp.open("GET", URL, true);
xmlhttp.send( null );

// store reponse in data
data = xmlHttp.responseText;
console.log(data);
*/


start_button = document.getElementById("start_button");
stop_button = document.getElementById("stop_button");
timer = document.getElementById("timer");

start_button.onclick = function()
{
    timer.innerHTML = "start:00:00:00";
    //kairos_post_request();

    // start recording (audio video)
};

stop_button.onclick = function()
{
    timer.innerHTML = "end:00:00:00";
    
    // call kairos api with recorded data
};


function start_record() {
    // google api record stuff
}

function stop_record() {
    // google api record stuff
}

/*
function kairos_post_request() {
    var header_settings = {
        "Content-type" : "application/json",
        "app_id" : kairos_api_id,
        "app_key": kairos_api_key
    };

    jQuery.ajax(kairos_api_url, {
        headers : header_settings,
        type : "POST",
        dataType : "raw",
        data : JSON.stringify(data),
        success : callback,
        error : callback
    });
}

*/
