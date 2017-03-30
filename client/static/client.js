
var weatherApi = {
    temperature: 0
};

function addToDatabase(temp) {
  console.log(temp);

  $.ajax({
    type: 'POST',
    url: '/temperatures',
    data: { temprature: temp }
  })
}

function fetchCurrentTemp(callback){
    $.ajax({
        type : 'GET', 
        url : 'https://api.darksky.net/forecast/d160f7084fe55c294116b8159f4b4a9f/55.607823,13.016861',
        dataType : 'jsonp',
        success : function(parsed_json) {
            var summ = parsed_json['currently']['summary'];
            var temp_f = parsed_json['currently']['temperature'];
            var celcius = Math.round(((temp_f - 32) * 5)/9);

            callback(null, celcius); // När vi är färdiga med att hämta temperaturen, så kallar vi på den tilldelade funktionen "callback"
        },
        error : function(code, message){
            callback(message, celcius);
        }
    });
}

function printTemp(temp) {
    $('#temperature').html(temp + "Cº")
    //$('#summary').html(summ)            
}

function printError(error) {
    $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
}

function initialize() {    
    $('#temperature').html("Fetching...");

    var tempCallback = function(error, temp) {
        if(error){
            printError(error);
            return;
        }

        weatherApi.temperature = temp;
        printTemp(temp);
        drawLogScales();
        addToDatabase(temp);
    }

    fetchCurrentTemp(tempCallback);
}

// Samma som $(function(){  })
$(document).ready(function(){
    initialize();

    $('#temperature').click(function() {
        addToDatabase(weatherApi.temperature);
    })
})
