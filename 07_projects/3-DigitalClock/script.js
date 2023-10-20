const clock = document.getElementById("clock");

// 1000ms = 1s
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
