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
  h = ((h + 11) % 12 + 1);
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
  var day = date.getDate()
  var year = date.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById("date").innerHTML = months[month] +  " " + day + ", " + year;
}
setDate();


// ============================== greeting ==============================

let anytimeGreetings = [
  "Yo",
  "Greetings",
  "Hello",
  "Hola", 
  "Kamusta",
  "Blessings", 
  "Wash Your Hands",
  "A Dollar A Day",
  "Feed Me",
  "Feed Your Boyfriend",
  "A Gallon A Day",
  "Let's Get Canes", 
  "Let's Smoke Cigars",
  "No More K Dramas",
  "Go Stretch",
];

let morningGreetings = [
  "Good Morning",
  "Wake Up",
  "Wakey Wakey",
  "You Survived The Night",
]

let afternoonGreetings = [
  "Good Afternoon",
  "It's Lunch Time", 
]

let nightGreetings = [
  "Good Evening",
  "Good Night",
  "Go To Sleep",
  // "Night",
  "Turn Up", 
  "Look Behind You"
]

let sundayGreetings = [
  "Tis the Lord's Day",
  "Hallelujah", 
  "Happy Sunday"
]

let mondayGreetings = [
  "*sigh* It's Monday",
  "It's Almost Friday",
]

let tuesdayGreetings = [
  "It's Taco Tuesday", 
  "It's Almost Friday",
]

let wednesdayGreetings = [
  "Happy Hump Day", 
  "We Wear Pink",
]

let thursdayGreetings = [
  "TNO",
  "Thirsty Thursday",
]

let fridayGreetings = [
  "IT'S FRIDAY",
  "TGIF",
  "Fri-nally",
]

let cincodeMayoGreetings = [
  "Happy Pico de Gallo",
  "Happy Pico de Gallo",
  "Happy Pico de Gallo",
  "Happy Pico de Gallo",
  "Happy Pico de Gallo",
  "Happy Pico de Gallo",
  "Happy Cinco",
  "Happy Cinoo",
  "Happy Cinco",
  "Happy Cinco de Mayo",
  "Happy Cinco de Mayo",
  "Happy Cinco de Mayo",
]

let learnAboutCompostingDay = []
let times = 20
for(let i = 0; i < times; i++) {
  learnAboutCompostingDay.push("Happy Learn About Composting Day")
}

let nationalEyeExamMonth = []
let neemTimes = 10
for(let i = 0; i < neemTimes; i++) {
  nationalEyeExamMonth.push("It's National Eye Exam Month")
}

let zucchiniDay = []
let zdTimes = 1000
for(let i = 0; i < neemTimes; i++) {
  zucchiniDay.push("It's National Sneak Some Zucchini Onto Your Neighbor's Porch Day")
}

let nicknames = [
  "Marissa", 
  "Marissa", 
  "Marissa Jain", 
  "Marz",
  "Marz", 
  "2x UTRGV FSA Treasurer",
];

function chooseGreeting() {
  let timebasedArray = [];
  let time = new Date().getHours();
  if (time >= 5 && time <= 11) {
    timebasedArray = anytimeGreetings.concat(morningGreetings);
  } else if (time >= 12 && time <= 19) {
      timebasedArray = anytimeGreetings.concat(afternoonGreetings);
  } else {
      timebasedArray = anytimeGreetings.concat(nightGreetings);
  }

  let day = new Date().getDay();
  if (day == 0) {
      timebasedArray = timebasedArray.concat(sundayGreetings);
  } else if (day == 1) {
      timebasedArray =timebasedArray.concat(mondayGreetings);
  } else if (day == 2) {
      timebasedArray =timebasedArray.concat(tuesdayGreetings);
  } else if (day == 3) {
      timebasedArray =timebasedArray.concat(wednesdayGreetings);
  } else if (day == 4) {
      timebasedArray =timebasedArray.concat(thursdayGreetings);
  } else if (day == 5) {
      timebasedArray =timebasedArray.concat(fridayGreetings);
  }

  let month = new Date().getMonth() + 1;
  let dayofMonth = new Date().getDate();
  if (month == 5 && dayofMonth == 5) {
    timebasedArray = timebasedArray.concat(cincodeMayoGreetings);
  } else if (month == 5 && dayofMonth == 29) {
    timebasedArray = timebasedArray.concat(learnAboutCompostingDay)
  } else if (month == 8) {
    timebasedArray = timebasedArray.concat(nationalEyeExamMonth)
  } else if (month == 8 && dayofMonth == 8) {
    timebasedArray = timebasedArray.concat(zucchiniDay)
  }

  document.getElementById("greeting").innerHTML = timebasedArray[Math.floor(Math.random() * timebasedArray.length)];
  document.getElementById("greeting").innerHTML += ", " + nicknames[Math.floor(Math.random() * nicknames.length)];
}

chooseGreeting();


// ============================== quote ==============================

let mjQuotes = [

  `<blockquote>
    The best gifts are never bought
  </blockquote>
  Elvin, circa 2015`,

  `<blockquote>
    The best gifts are never bought
  </blockquote>
  Elvin, circa 2015`,

  `Canes > CFA`,

  `Is your name Jingle Bells?`,

  `Is your name Jingle Bells?`,

  ``,

  `<blockquote>
    Train for what really matters: the bedroom
  </blockquote>Barbell Brigade`,

  `<blockquote>
    If you see someone shoplifting food, no you didnt
  </blockquote>`,

  `Nose goes`,

  `New year, who dis?`,

  `New year, who dis?`,

  `Nose goes`,

  `Country road, take me home`,

  `Everything in moderation, including moderation.`,

  ``,
  ``,
  `Boobs`,
  `Boobs`,
  `Boobs`,
  `Boobs`,
  `Boobs`,

  `Canes`,
  `Boobs`,
  `Nose goes`,
]

// ===== formats =====

// <blockquote></blockquote>
// <div class="author"></div>


function todaysQuote() {
  let launchDate = new Date();
  launchDate.setFullYear(2020, 12, 22);
  let today = new Date();
  let dayDifference = today.getDate() - launchDate.getDate();
  const day = 1000 * 60 * 60 * 24;
  dayDifference = ((today - launchDate) / day) + 31;

  document.querySelector(".quote").innerHTML = mjQuotes[Math.floor(dayDifference)+0];
}
todaysQuote();


// ============================== weather ==============================
let cityID = 4676740;
function weatherBalloon( cityID ) {
  var key = "5aeae69de47c30696851724875b26f55";
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBalloon( 4676740 );
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('weather').innerHTML = fahrenheit + '&deg; ' + d.weather[0].description;
}
