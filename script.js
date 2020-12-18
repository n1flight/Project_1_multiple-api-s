$(document).foundation();

// https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries

var queryURL = "https://disease.sh/v3/covid-19/all"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response1) {
    console.log(response1)
    $("#gTotal").text("Total Cases: " + response1.cases);
    $("#gNew").text("New Cases: " + response1.todayCases);
    $("#gRecovered").text("Recovered: " + response1.recovered);
});





//https://api.covidtracking.com

// var queryURL = "https://api.covidtracking.com/v1/states/current.json"
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response2) {
//     console.log(response2)
// });