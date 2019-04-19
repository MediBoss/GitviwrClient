
// Creates a socket connection to gitviwr server
var socket = io("http://localhost:3000")

const currentViewCount = window.localStorage.getItem("currentViewCount")
// Display the number of views if the server has not updated to a new number 
if (currentViewCount !== null && currentViewCount !== 'undefined') {
  document.getElementById('view-count').innerHTML = currentViewCount 
}

/**
 * Receives new viewer count from server and update the view count html label.
 * @param {*} counter -  An number that represents the amount of views a user has.
 */
socket.on('count update', function(counter){

  var curr = window.localStorage.getItem("currentViewCount")
  if (Number(curr) != counter) {
    // Caches the new number of views if the server has updated
    window.localStorage.setItem("currentViewCount", counter)
    document.getElementById('view-count').innerHTML = counter
  }
})

/**
 * Receives the signed in user from the server and caches it for future interaction.
 * @param {*} current_user - The user received from the server.
 */
socket.on('current user', function(current_user){
  window.localStorage.setItem('currentUser', current_user)
})

// Sends the conten.js file the current user as a message to be cached on its local storage.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {currentUser: window.localStorage.getItem("currentUser") })
})