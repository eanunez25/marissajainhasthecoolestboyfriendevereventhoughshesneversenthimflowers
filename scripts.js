// ============================== time ============================== 

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();


// ============================== date ============================== 

function setDate() {
  var date = new Date();
  var month = date.getMonth();
  var day = date.getDay()
  var year = date.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("date").innerHTML = months[month] +  " " + day + ", " + year;
}
setDate();


// ============================== greeting ============================== 