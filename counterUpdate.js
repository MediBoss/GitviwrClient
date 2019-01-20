var socket = io("http://localhost:3000")

socket.on('count update', function(counter){
  document.getElementById('view-count').innerHTML = counter
})
