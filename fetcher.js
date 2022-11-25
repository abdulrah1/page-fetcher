const request = require('request');
const fs = require('fs');

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html


const accessTerminal = process.argv.slice(2);
// console.log(accessTerminal)
let URL = accessTerminal[0];
let path = accessTerminal[1];



request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  // writeFileSync waits for the file to be written before continuing.
  fs.writeFileSync(path, body);

  console.log(`Dowloaded and saved ${body.length} bytes to ${path}`)
});

fs.wr