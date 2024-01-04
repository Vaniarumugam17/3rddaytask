//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET", "https://restcountries.com/v3.1/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request.onload = function () {
  var result = JSON.parse(request.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
  }
};
