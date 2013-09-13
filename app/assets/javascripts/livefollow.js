$(document).ready(function(){
  $("body").on("click", "a", function(e){
    e.preventDefault();
    var url = $(this).attr("href");
    $.ajax({
      url: '/livefollow/' + encodeURIComponent(url),
      success: function() {
        window.location = url;
      }
    });
  });

  if(window.location.hash && window.location.hash == '#!') {
    $.ajax({
      url: '/livefollow/' + encodeURIComponent(window.location.pathname),
      success: function() {
        poll_for_url_update();
      }
    });
  }
  else {
    poll_for_url_update();
  }


});

function poll_for_url_update(){
  var current_url = window.location.pathname;
  window.setInterval(function(){
    $.ajax({
      url: '/livefollow/current_url',
      success: function(data) {
        if (data.charAt(0) !== "/") {
          data = "/" + data
        }

        if (current_url != data) {
          window.location = data;
        }
      }
    })
  }, 1000);
}