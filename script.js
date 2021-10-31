//Variables
var minutes
var seconds

//function when time is running
function timer(x) {
  minutes = x
  seconds = 0

  var interval = setInterval(function () {
    var time = document.getElementById('timer')

    if (seconds == 0 && minutes == 0) {
      clearInterval(interval)
      time.innerHTML = '00:00'
    } else if (seconds == 0) {
      minutes = minutes - 1
      seconds = 59
      time.innerHTML = minutes + ':' + seconds
      document.title = minutes + ':' + seconds
    } else if (seconds < 11) {
      seconds = seconds - 1
      time.innerHTML = minutes + ':0' + seconds
    } else if (seconds > 0) {
      seconds = seconds - 1
      time.innerHTML = minutes + ':' + seconds
      document.title = minutes + ':' + seconds
    }
  }, 1000)
}

//function to stop timer
function stop() {
  minutes = 0
  seconds = 0
  var time = document.getElementById('timer')

  clearInterval(interval)
  time.innerHTML = '00:00'
}
