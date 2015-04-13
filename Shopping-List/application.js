$(document).ready(function(){
  $('#add').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>");
  })
  $('#delete').on('click', function(){
    $('ul').empty();
  })
});

