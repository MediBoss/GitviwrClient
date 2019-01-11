//Returns the github handle of the visited gihub pages

(function () {
  const socket = io('http://localhost:3000');
  var user_url = window.location.pathname.split('/');
  const user_github_handle = user_url[1];
  socket.on('connect', async () => {
    socket.emit('github event', user_github_handle)
  })

}());
