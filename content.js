

// // Return the github handle of the visited gihub pages
// (function () {
//   const socket = io('http://localhost:3000');
//   var user_url = window.location.pathname.split('/');
//   let user_token
//   const user_github_handle = user_url[1];
//   // chrome.storage.sync.get(['token'], function(result) {
//   //   user_token = result
//   // });

//   socket.on('connect', async () => {
//     socket.emit('github event', user_github_handle)
//   })
// }());

// // stores the encrypted token of a user from Github API through Gitviwr server
// // (function() {

// //   var socket = io("http://localhost:3000")
// //   socket.on('user token', function(userToken){
// //     chrome.storage.sync.set({'token': userToken}, function() {
// //       console.log(`Token ${userToken} has been succesfully stored`);
// //     })    
// //   })
// // })

//Returns the github handle of the visited gihub pages

(function () {

  const socket = io('http://localhost:3000');
  var user_url = window.location.pathname.split('/');
  const user_github_handle = user_url[1];
  const token = "1234"
  socket.on('connect', async () => {
    socket.emit('github event', [token, user_github_handle])
  })
}());