// #1 = .fadeIn function 
$( ".button1" ).click(function() {
  $( ".one" ).fadeIn( "slow", function() {
    // Animation complete
  });
});


// #2 = .slideDown function 
$( ".button2" ).click(function() {
  $( ".two" ).hide().slideDown( "slow", function() {
    // Animation complete
  });
});

// #3 = .slideToggle function 
$( ".button3" ).click(function(){
	$( ".three" ).slideToggle(function() {
	});
});

// #4 = .slideUp function 
$( ".button4" ).click(function(){
	$( ".four" ).slideUp(function() {
	});
});

// #5 = .fadeToggle function 
$( ".button5" ).click(function(){
	$( ".five" ).fadeToggle( "slow", "linear", function() {
	});
});

// #6 = .fadeOut function 
$( ".button6" ).click(function() {
  $( ".six" ).fadeOut( "slow", function() {
    // Animation complete
  });
});

// #7 = .fadeTo function 
$( ".button7" ).click(function() {
  $( ".seven" ).fadeTo( "slow" , 0.5, function() {
    // Animation complete
  });
});

// #8 = .fadeOut function 
$( ".button8" ).click(function() {
  $( ".eight" ).delay(500).fadeOut( "slow", function() {
    // Animation complete
  });
});

// #9 = .fadeTo function 
$( ".button9" ).click(function() {
  $( ".nine" ).fadeTo( "fast" , 0.9, function() {
    // Animation complete
  });
}); 


// #10 = .fadeOut function 
$( ".button10" ).click(function() {
  $( ".ten" ).delay(600).hide().slideDown( "slow", function() {
    // Animation complete
  });
});

// // #11 = .fadeOut function 
// $( ".button11" ).click(function() {
//   $( ".eleven" )delay(100).slideToggle(function() {
//     // Animation complete
//   });
// });

// #12 = .delay().fadeOut function 
$( ".button12" ).click(function() {
  $( ".twelve" ).delay(700).fadeOut( "slow", function() {
  });
});

// #13 = .delay().fadeToggle function 
$( ".button13" ).click(function() {
  $( ".thirteen" ).delay(800).fadeToggle( "slow", function() {
    // Animation complete
  });
});

// #14 = .delay().fadeTo function 
$( ".button14" ).click(function() {
  $( ".fourteen" ).fadeOut( "slow" , function() {
    // Animation complete
  });
});

// #15 = .fadeTo function 
$( ".button15" ).click(function() {
  $( ".fifteen" ).fadeOut( "fast" , function() {
    // Animation complete
  });
});

























// // example on how to pull data..
// // Templates
// var showRepos = _.template($(".repos").text());

// // Fetch Repos
// $.getJSON('https://api.github.com/users.thaddeous/repos').done(function(data){
// 	renderRepos(data)
// })

// // Render Functions
// function renderRepos (reposarray) {
// 	reposarray.forEach(function(module){
// 	var rendered = showRepos( module );
// 	$('body').prepend(rendered);
// 	})
// }



