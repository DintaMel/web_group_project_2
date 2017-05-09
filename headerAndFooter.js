var navbar =
  '<ul>' +
    '<!--logo navigates to home  -->' +
    "<li class= 'third'><a href='index.html'>" +
      "<img src='./assets/images/fix-logo.png' alt='Fix Cakes Logo'/>" +
    '</li>' +
    "<li class= 'first'><a href='menu.html'>Menu</li>" +
    "<li class= 'second'><a href='custom.html'>Custom</li>" +
    "<li class= 'fourth'><a href='about.html'>About</li>" +
    "<li class= 'fifth'><a href='hours.html'>Hours</li>" +
  '</ul>'
;

var footer =
"<div> <div id='footer-address'> <p>27 Maryland Plaza</p> <p>Saint Louis, MO 63108</p> </div> <p class='desktop-only'> Tues-Say 7am-7pm, Sun 11am-4pm </p> </div> <div class='desktop-only'> <img src='./assets/images/fix-logo-white.png' alt='Fix Cakes Logo'/> </div> <div> <div id='footer-img-div'> <img src='./assets/images/fix-fbicon.png' alt='Facebook icon' /> <img src='./assets/images/fix-twittericon.png' alt='Twitter icon' /> <img src='./assets/images/fix-instaicon.png' alt= 'Instagram icon' /> </div> <p id='footer-phone'><nobr>314-930-3103</nobr></p> </div>";

$(document).ready(function(){
  $('nav').html(navbar);
});

$(document).ready(function(){
  $('footer').html(footer);
});
