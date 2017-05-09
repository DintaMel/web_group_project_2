$(document).ready(function(){
  $('#cake-header').on('click', function(){
    $('#cake-menu').removeClass('display-none');
    $('#non-cake-menu').addClass('display-none');
  });
});

$(document).ready(function(){
  $('#non-cake-header').on('click', function(){
      $('#non-cake-menu').removeClass('display-none');
      $('#cake-menu').addClass('display-none');
  });
});
