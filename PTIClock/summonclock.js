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

showClockBlock()
