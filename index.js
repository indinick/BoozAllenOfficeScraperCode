'use strict';

var cheerio = require("cheerio");
var axios = require("axios");

const https = require('https');

const URL = "https://www.boozallen.com/tools/utility-navigation-pages/office-locations.html"
// First, tell the console what server3.js is doing



// exports.handler = async (event) => {
  // TODO implement
  // Make request via axios to grab the HTML from `awwards's` clean website section
  axios.get("https://www.boozallen.com/tools/utility-navigation-pages/office-locations.html").then(function (response) {

    // Load the HTML into cheerio
    var $ = cheerio.load(response.data);
    // Make an empty array for saving our scraped info
    var results = [];
    // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
    $(".line5").each(function (i, element) {

      //  var addressData = $(element).children().attr('data-address');
      var addressData = $(element).text();

      //var addressData = $(element).find('line5').attr('data-address');

      console.log(addressData)


      // Push the image's URL (saved to the imgLink var) into the results array
      results.push({ link: addressData });
    });

    // After looping through each element found, log the results to the console
    console.log(results);
  });

// }


