$(document).ready(function() {
  $('.drawer').drawer();
  $('#classify').click(
	  	function () {
	      $('.drawer').fadeOut(500, function() {
        	$('.drawer').css("background-color", "#08B2E3").fadeIn(1000);
   		  }); 
	      //rep red: DD1C1A
	      classifyStatement();
	    }            
    );
});

function classifyStatement(){
	var pStatement = $('#statement').val();
	console.log(pStatement);
	var byline = require('byline');
	var fs = require('fs');
	//var stanfordClassifier = require('stanford-classifier');

	/// Initialize the Stanford Classifier
	//var sc = new stanfordClassifier();


	var mem = [];

	/// Create a stream to read the dataset
	var stream = byline(fs.createReadStream('./public/train.txt', {
	    encoding: 'utf8'
	}));

	/// Push each line into memory
	stream.on('data', function(line) {
	    mem.push(line);
	});

	/// Use the training dataset in memory to train the classifier dataset
	stream.on('end', function() {
	    for (var i = 0; i < mem.length; i++) {
	        var line = mem[i];
	        //sc.train(line);
	    }

	/// Sync the classifier with the classifiers dataset
	    //sc.syncClassifier();

	/// Use the classifier
	  //console.log(sc.classify(pStatement));
	$("#dem").css("display", "inline-block").fadeIn(1000);
	//$("#rep").css("display", "inline-block").fadeIn(1000);
	console.log("I classified you");
	});
}
