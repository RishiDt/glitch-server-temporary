const express = require('express');
const expressApp = express();
const socket_server = require('./websocket_api');
const firestore_exp_app = require('./firestore_api');

 require('./websocket_api')
const FIRESTORE_API_PORT =5000;


  
firestore_exp_app.listen(FIRESTORE_API_PORT,(req,res)=>{
console.log(`firestore_api listening on ${FIRESTORE_API_PORT}.`);
})

const WEBSOCKET_API_PORT =3000;
socket_server.listen(WEBSOCKET_API_PORT, () => {
  console.log(`socket_api listening on:${WEBSOCKET_API_PORT}`);
});
