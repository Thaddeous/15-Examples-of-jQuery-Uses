// #1 = .fadeIn function 
$( ".button1" ).click(function() {
  $( ".one" ).hide().fadeIn( "slow", function() {
    // Animation complete
  });
});


// #2 = .slideDown function 
$( ".button2" ).click(function() {
  $( ".two" ).hide().slideDown( "slow", function() {
    // Animation complete
  });
});


