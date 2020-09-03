(function (window) {
	var speakword="GoodBye";
	var byespeaker={};
	byespeaker.speak=function(name){
		console.log(speakword+" "+name);
	}


	window.byespeaker=byespeaker;



})(window);