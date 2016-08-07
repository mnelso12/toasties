// Main Javascript file
// Initialize variables

// get stopwatch to work - DONE!
// get video/ audio to work
// connect to back end
// ???
// profit $$$

//////////////////////////////////
//          Stopwatch           //
//////////////////////////////////

var clocktimer;     // interval timer
var cls_stopwatch = {
    running: 0,
    start_time: 0,
    start_time_str: "00:00:00",
};

// gets current time
cls_stopwatch.now = function () {
    return (new Date()).getTime();
};

// if not running start timer
cls_stopwatch.start = function() {
    if (this.running === 0) {
        this.start_time = this.now();
        this.running = 1;
    }
    else {
        // nothing
    }
};

// if running stop timer
cls_stopwatch.stop = function() {
    if (this.running == 1) {
        this.running = 0;
    }
    else {
        // nothing
    }
};

// reset the timer (kinda the same as stop)
cls_stopwatch.reset = function() {
    this.start_time = 0;
    this.running = 0;
};

// gets the current time elapsed 
cls_stopwatch.time = function() {
    if (this.running == 1){
        return  this.now() - this.start_time;
    }
    else {
        return 0;
    }
};

cls_stopwatch.update = function() {
    //console.log("updating timer");
    timer.innerHTML = format_time_output(this.time());
};

// if this throws error ignore it is right :P
function start() {
    clocktimer = setInterval("cls_stopwatch.update()", 1);
    cls_stopwatch.start();
}

// stops timer!
function stop() {
    cls_stopwatch.stop();
    clearInterval(clocktimer);
}

// formats time into 00:00:00:000 format
function format_time_output(time) {
    var h = 0; 
    var m = 0;
    var s = 0;
    var ms = 0;
    var formated_time;

    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );
    ms = time % 1000;

    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms,3);
    return newTime;
}

// pads numbers like 1-9 when they need a leading zero
function pad (num, place) {
    if (place == 2)
    {
        if (num > 9) {
            return num;
        }
        else {
            return "0"+num;
        }
    }
    if (place == 3) {
        if (num > 99) {
            return num;
        }
        else if (num > 9) {
            return "0" + num;
        }
        else {
            return "00" + num;
        }
    }
}

///////////////////////////////////////////
//          End Stopwatch Stuff          //
///////////////////////////////////////////

// kairons api details
var kairos_api_url = "https://api-dev.kairos.com/media";
var kairos_api_id = "7dc697b8";
var kairos_api_key = "de47fb31888ed4c71e4eff9700ebee52";

// Set up other variables
var start_button, stop_button, timer;

// get elements from the html doc
start_button = document.getElementById("start_button");
stop_button = document.getElementById("stop_button");
timer = document.getElementById("timer");

start_button.onclick = function() {
    timer.innerHTML = "Start";
    start();
    // kairos_post_request();
    //TODO:start recording (audio video)
};

stop_button.onclick = function() {
    stop();
    //TODO:call kairos api with recorded data
};


function start_record() {
    //TODO? google api record stuff
}

function stop_record() {
    //TODO? google api record stuff
}

// sends request to kairos api to check out video for details
function kairos_post_request() {
    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.kairos.com/media?source=http://media.kairos.com/test.flv');

    request.setRequestHeader('app_id', kairos_api_id);
    request.setRequestHeader('app_key', kairos_api_key);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            parse_response(this.responseText);
        }
    };
    request.send();
}

function parse_response(text) {	
	var parsed = JSON.parse(text);
}

/////////////////////////////////
//          Templates          //
/////////////////////////////////
// The following are templates in 
// order to perform certain actions 
// and should not be used in thier 
// current state to perform actions.

function generic_post_request() {
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


