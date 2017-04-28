// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

var myCalendar = myApp.calendar({
    input: '#calendar'
});

// Variable to store chosen calendar date
var rideDateTime;

// Update date when selected from date picker
myCalendar.onDayClick(function(dayContainer, year, month, day) {
  rideDateTime = new Date(year, month, day);
});

function destination()
{
  // Store ride request timing details
  var rideRequest;

  // Store current date and time if "Right Now" checked
  if($('#actualcheckbox').is(':checked')) {
    rideRequest = {
      datetime: Date.now()
    }
  } else {
    // Check if date has been selected
    console.log(myCalendar);
  }

  // Display map
  //window.location.href = "map.html";
}