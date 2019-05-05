
(function () {

  // Creates a socket connection to gitviwr server
  const socket = io('https://gitviewerserver.herokuapp.com/');
 
  /**
   * Dynamically grabs the handle from the url
   * Example - https://github.com/MediBoss/GitviewrServer/blob/master/app.js will grab `MediBoss`
   */
  var user_url = window.location.pathname.split('/');
  const viewed_github_handle = user_url[1];

  // Retrieves the user who's viewing the specific profile from local storage...if its a registered user.
  const current_user = window.localStorage.getItem('currentUser')
  const gitviewr = {viewer: current_user, viewed: viewed_github_handle}

  // Sends the data to gitviwr server to process.
  socket.on('connect', async () => {
    socket.emit('github event', gitviewr)
  })
}());

// Listens to the message's data and caches it in local storage.
chrome.runtime.onMessage.addListener(
  function(message, sender, callback) {
    if (message.currentUser == null) {
      return 
    }
    window.localStorage.setItem("currentUser", message.currentUser)
  }
)