$(document).ready(function() {
  $('.drawer').drawer();
  $('#classify').click(
	  	function () {
	      classifyStatement();
	    }            
    );
});

function classifyStatement(){
	var querystring = require('querystring');
	var http = require('http');
	var pStatement = $('#statement').val();
	console.log(pStatement);
	var num = Math.floor(Math.random() * (100));
	console.log(num);

	// var data = querystring.stringify({
 //    	statement: $('#statement').val()
 //  	});

	//   var options = {
	//     host: 'requestb.in',
	//     port: 80,
	//     path: '/w8xu7iw8',
	//     method: 'POST',
	//     headers: {
	//       'Content-Type': 'application/x-www-form-urlencoded',
	//       'Content-Length': Buffer.byteLength(data)
	//     }
	//   };

	//   var httpreq = http.request(options, function (response) {
	//     response.setEncoding('utf8');
	//     response.on('data', function (chunk) {
	//       console.log("body: " + chunk);
	//     });
	//     response.on('end', function() {
	//       res.send('ok');
	//     })
	//   });
	//   httpreq.write(data);
	//   httpreq.end();
	if(num %2 == 0){
		$('.drawer').fadeOut(500, function() {
        	$('.drawer').css("background-color", "#DD1C1A").fadeIn(1000);
   		  }); 
		$("#dem").css("display", "none");
		$("#rep").css("display", "inline-block").fadeIn(1000);
	}
	else{
		$('.drawer').fadeOut(500, function() {
        	$('.drawer').css("background-color", "#08B2E3").fadeIn(1000);
   		  }); 
		$("#rep").css("display", "none");
		$("#dem").css("display", "inline-block").fadeIn(1000);
	}
	console.log("I classified you");
}
