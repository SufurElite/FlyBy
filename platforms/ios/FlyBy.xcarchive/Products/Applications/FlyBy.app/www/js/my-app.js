// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Senior registration form submission
$$('#senior-register').on('click', function (e) {
  var formData = $('#senior-form').serialize();
  $$.post('https://flybyapp.herokuapp.com/register-senior', formData, function(data) {
    // Store user information in localStorage
    localStorage.setItem('user', data);

    window.location.href = 'senior-profile.html';
  });
});

// Driver registration form submission
$$('#driver-register').on('click', function (e) {
  var formData = $('#driver-form').serialize();
  $$.post('https://flybyapp.herokuapp.com/register-driver', formData, function(data) {
    window.location.href = 'driver-profile.html';
  });
});