//create a XHR object
var request = new XMLHttpRequest();
//2API URL
//.open method
request.open("GET", "https://restcountries.com/v3.1/all");
// establishing the bridge
request.send();
//once the data sucessfully received from server
//onload is an event
request.onload = function () {
  var result = JSON.parse(request.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].flags);
  }
};
