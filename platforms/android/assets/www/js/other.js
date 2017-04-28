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

// Variable to store chosen calendar date
var rideDateTime;

var myCalendar = myApp.calendar({
    input: '#calendar',
    onDayClick: function(p, dayContainer, year, month, day) {
      // Update date when selected from date picker
      rideDateTime = new Date(year, month, day);
    }
});

function destination()
{
  // Store ride request timing details
  var rideRequest;

  // Store current date and time if "Right Now" checked
  if($('#actualcheckbox').is(':checked')) {
    rideRequest = {
      datetime: Date.now()
    };

    localStorage.setItem('rideRequest', JSON.stringify(rideRequest));
  } else {
    // Check if date has been selected
    if(typeof rideDateTime !== 'undefined') {
      var hours = parseInt($('#hours').val());
      // Change hours based on AM/PM
      var ampm = $('#ampm').val();
      if(ampm === 'PM')
        hours += 12;

      var minutes = parseInt($('#minutes').val());

      rideDateTime.setHours(hours);
      rideDateTime.setMinutes(minutes);

      rideRequest = {
        datetime: rideDateTime.getTime()
      };

      localStorage.setItem('rideRequest', JSON.stringify(rideRequest));
    } else {
      myApp.alert('Please select a date from the calendar or choose "Right Now"');
      return;
    }
  }

  // Display map
  window.location.href = "map.html";
}