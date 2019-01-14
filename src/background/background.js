// import io from 'socket.io-client';
//
// const socket = io('http://localhost:3000');
//
// let messages = [];
//
// socket.emit('chat message', 'please see this');
// // socket.on('connect', async () => {
// //     console.log("success??")
// // });
//
// chrome.tabs.onUpdated.addListener(function(id, info, tab){
//     chrome.pageAction.show(tab.id);
//     chrome.tabs.executeScript(null, {"file": "../../content.js"});
// });


chrome.extension.onConnect.addListener(function(port) {
  //const socket = io('http://localhost:3000');
  console.log("Connected .....");
  port.onMessage.addListener(function(msg) {
      console.log("message recieved" + msg);
      // port.postMessage("Hi Popup.js");
  });
})
