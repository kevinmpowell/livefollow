if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

$(document).ready(function(){
  $("body").on("click", "a", function(e){
    var url = $(this).attr("href");
    if (!url.startsWith('#')) {
      e.preventDefault();
      $.ajax({
        url: '/livefollow/set_url/' + encodeURIComponent(url),
        success: function() {
          window.location = url;
        }
      });      
    }
  });

  if(window.location.hash && window.location.hash == '#!') {
    $.ajax({
      url: '/livefollow/set_url/' + encodeURIComponent(window.location.pathname),
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
      url: '/livefollow/get_url',
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