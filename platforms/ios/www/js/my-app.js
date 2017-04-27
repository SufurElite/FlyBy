// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Senior registration form submission
$$('#senior-register').on('click', function (e) {
  var formData = $('#senior-form').serialize();
  $$.post('http://127.0.0.1:5000/register-senior', formData, function(data) {
    window.location.href = 'senior-profile.html';
  });
});

// Driver registration form submission
$$('#driver-register').on('click', function (e) {
  var formData = $('#driver-form').serialize();
  $$.post('http://127.0.0.1:5000/register-driver', formData, function(data) {
    window.location.href = 'driver-profile.html';
  });
});

$$('#check').on('click', function (e) {
    console.log("Fuck this");
    $$('#list').style.color='gray';
});