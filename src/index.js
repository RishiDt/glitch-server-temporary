const express = require('express');
const expressApp = express();
const expressApp = require('./websocket_api');

 require('./websocket_api')
const FIREBASE_API_PORT =5000;


  
expressApp.listen(PORT,(req,res)=>{
console.log(`Server listening on port ${PORT}.`);
})

const WEBSOCKET_API_PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
