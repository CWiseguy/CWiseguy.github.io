$(document).ready(function(){
  $('button').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>");
  })
});

