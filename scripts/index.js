// Main Javascript file
// Initialize variables
var kairos_api_url = "https://api-dev.kairos.com/media";
var kairos_api_id = "7dc697b8";
var kairos_api_key = "de47fb31888ed4c71e4eff9700ebee52";
var random_video = "https://ia601400.us.archive.org/11/items/RandomVideos1/12_Random_Videos_Collection_1.m4v";

// get stopwatch to work
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
    console.log("updating timer");
    timer.innerHTML = format_time_output(this.time());
};

// if this throws error ignore it is right :P
function start() {
    clocktimer = setInterval("cls_stopwatch.update()", 1);
    cls_stopwatch.start();
}

function stop() {
    cls_stopwatch.stop();
    clearInterval(clocktimer);
}

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

start_button.onclick = function() {
    timer.innerHTML = "Start";
    start();
    // kairos_post_request();

    // start recording (audio video)
};

stop_button.onclick = function() {
    stop();
    // call kairos api with recorded data
};


function start_record() {
    // google api record stuff
}

function stop_record() {
    // google api record stuff
}

function kairos_post_request() {
    /*
       var header_settings = {
       "Content-type" : "application/json",
       "app_id" : kairos_api_id,
       "app_key": kairos_api_key
       };

       jQuery.ajax(kairos_api_url, {
       headers : header_settings,
       type : "POST",
       dataType : "raw",
       data : JSON.stringify(random_video),
       success : callback(),
       error : callback()
       });
       */
    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.kairos.com/media?source=http://media.kairos.com/test.flv');

    request.setRequestHeader('app_id', kairos_api_id);
    request.setRequestHeader('app_key', kairos_api_key);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };
    request.send();
}
function callback() {
    console.log("callback");
}
