const express = require('express');
const app = express();
const cors = require("cors");
const io = require("socket.io-client");
const request = require("request");
const bodyparser = require("body-parser");
const path = require("path");
const url = require("url");

app.use(cors());
// const socketEndpoint = "wss://stream.coindcx.com";

// const socket = io(socketEndpoint, {
//   transports: ['websocket']
// });
//   socket.emit('join', {
//     'channelName': "I-BTC_INR"
// });

// //Listen update on channelName
// socket.on('depth-update', (response) => {
//     console.log(response.data);
// });

app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(path.resolve("index.html"));
});
// var baseurl = "https://api.coindcx.com"
// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//   qs: {
//     'start': '1',
//     'limit': '50',
//     'convert': 'USD'
//   },
//   headers: {
//     'X-CMC_PRO_API_KEY': '62965735-fd44-45f8-8f68-dc9d81d48d59'
//   },
//   json: true,
//   gzip: true
// };
// /*
// app.get('/stockapi',function(req,res){
//   requestOptions.uri = 'https://pro-api.coinmarketcap.com/v1/stockmarket/listings/latest';
//   rp(requestOptions).then(response => {
//     res.send(response.data);    
//   }).catch((err) => {
//     console.log('API call error:', err.message);
//   });
// })*/

  
//   //Listen update on channelName
  
  

// /*
// //Join Channel
// socket.emit('join', {
//   'channelName': "ADAB_USD",
// });

// //Listen update on channelName
// socket.on('depth_update', (response) => {
//   res.send(response.data);
// });

// // leave a channel
// socket.emit('leave', {
//   'channelName': "ADAB_USD"
// });
// })*/
  
// app.get('/cryptoapi',function(req,res){

//   request.get(baseurl + "/exchange/ticker",function(error, response, body) {
//       res.send(body);
//   })
// })

// /*
// app.get('/cryptoapi',function(req,res){
//   var request = https.request(options, function (response) {
//     let data = '';
//     response.on('data', (chunk) => {
//         data = data + chunk.toString();
//     });
  
//     response.on('end', () => {
//         const body = JSON.parse(data);
//         res.send(body);
//     });

// });
  
// request.end() 
// })*/
// /*
// app.get('/exchanges',function(req,res){
//   requestOptions.uri = 'https://pro-api.coinmarketcap.com/v1/exchange/market-pairs';
//   rp(requestOptions).then(response => {
//     res.send(response.data);    
//   }).catch((err) => {
//     console.log('API call error:', err.message);
//   });
// })const https = require('https');

// var options = {
//   "method": "GET",
//   "hostname": "rest.coinapi.io",
//   "path": "/v1/trades/latest",
//   "headers": {'X-CoinAPI-Key': 'D1054581-B4A0-4D1D-A044-BC606A984E42'},
//   "type": "json"
// };
// app.get('/cryptoapi',function(req,res){

//  https.request(options, function (response) {
//    res.send(response);
//   });
// })
// */
// app.get('/coin',(req,res) => {
//   var urlparsed = url.parse(req.url, true).query;
//   const symbol = urlparsed.coin;
// })


app.listen(8080,function(){console.log("hiit")});