// Target time
var countDownDate = new Date("Oct 1, 2019 00:00:00").getTime();


var x = setInterval(function() {

  // current date
  var now = new Date().getTime();
    
  // difference in date
  var distance = countDownDate - now;

  var distanceSec = distance / 1000;
    
  // Time calculations for days, hours, minutes and seconds
  var weeks = Math.floor(((distanceSec/(60*60))/24)/7)
  var days = Math.floor((distanceSec/(60*60))/24);
  var hours = Math.floor(distanceSec/(60*60));
  var minutes = Math.floor(distanceSec/60);
  var seconds = Math.floor(distanceSec);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = weeks + "Wks : " + days + "Days : " + hours + "Hrs "
  + minutes + "Min : " + seconds + "Sec ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy Independence Day";
  }
}, 1000);










