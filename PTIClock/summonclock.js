var clock = ""
function styleChild(element, styling) {
	if(!element.hasChildNodes()){
		element.style = styling;
	}
	else{
		styleChilds(element.childNodes, styling);
		element.style = styling;
	}
}

function styleParent(element, styling) {
	if(element.parentNode == null){
		element.style = styling;
	}
	else {
		styleParent(element.parentNode, styling);
		element.style = styling;
	}
}

function styleChilds(elements, styling){
	for(var i = 0; i<elements.length; i++) {
		styleChild(elements[i], styling);
	}
}

function showClockBlock(){
	styleChild(document.body, "display:none")
	clock = document.getElementsByClassName("block_simple_clock")[0];
	styleChild(clock,"display:block");
	styleParent(clock, "display:block");
	styleClock(clock);
}

function styleClock(element){
	element.getElementsByClassName("lastrow")[0].style = "display:none";
	var serverClock = element.getElementsByTagName("tr")[0];
	serverClock.childNodes[1].innerHTML = "";
	serverClock.childNodes[3].childNodes[0].style="font-size:7rem; text-align:center";
	
	element.parentNode.parentNode.style="width:100%";
	
	var textarea = document.createElement("textarea");
	textarea.style="font-size:2rem; width:100%;";
	element.childNodes[1].appendChild(textarea);
}

function addCountdown(endTime){	
	var timeBlock = document.getElementById("block_progress_serverTime");

	var servTime = timeBlock.value.split(":");
	var endTime = endTime.split(":");
	
	var now = parseInt(servTime[0]) * 3600 + parseInt(servTime[1]) * 60 + parseInt(servTime[2]);
	var end = parseInt(endTime[0]) * 3600 + parseInt(endTime[1]) * 60 + parseInt(endTime[2]);
	
	var timeLeft = end - now;
	if(timeLeft > 0){
		var timeLeftBlock = document.createElement("div");
		timeLeftBlock.id = "timeLeft";
		timeBlock.parentNode.appendChild(timeLeftBlock);
		setInterval(function(){updateCountdown(timeLeft);timeLeft--;},1000);
	}	
}

function updateCountdown(timeLeft){
	var left = document.getElementById("timeLeft");
	var hrsLeft = Math.floor(timeLeft/3600);
	var minLeft = Math.floor((timeLeft%3600)/60);
	var secLeft = timeLeft%60;
	left.innerHTML = hrsLeft +" hours " + minLeft + " minutes " + secLeft + " seconds ";
}

showClockBlock()
