if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}

$lfjq(document).ready(function(){
  if(window.location.hash && window.location.hash == '#lfdisable') {
    $lfjq.cookie('livefollow_status', 'disabled');
    alert("Livefollow disabled for this browser/session");
  }
  else if (window.location.hash && window.location.hash == '#lfenable'){
    $lfjq.cookie('livefollow_status', 'enabled');
    alert("Livefollow enabled for this browser/session");
  }

  if (typeof $lfjq.cookie('livefollow_status') == 'undefined' || $lfjq.cookie('livefollow_status') == 'enabled') {
    $lfjq("body").on("click", "a", function(e){
      var url = $lfjq(this).attr("href");
      if (!url.startsWith('#')) {
        e.preventDefault();
        $lfjq.ajax({
          url: '/livefollow/set_url/' + encodeURIComponent(url),
          success: function() {
            window.location = url;
          }
        });
      }
    });

    if(window.location.hash && window.location.hash == '#!') {
      $lfjq.ajax({
        url: '/livefollow/set_url/' + encodeURIComponent(window.location.pathname),
        success: function() {
          poll_for_url_update();
        }
      });
    }
    else {
      poll_for_url_update();
    }
  }
});

function poll_for_url_update(){
  var current_url = window.location.pathname;
  window.setInterval(function(){
    $lfjq.ajax({
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