Livefollow::Engine.routes.draw do
  match '/get_url' => 'livefollow#get_url'
  match '/set_url/:pathname' => 'livefollow#set_url', constraints: {pathname: /[A-Za-z0-9%\-\.\_]+?/, format: /html/}
end