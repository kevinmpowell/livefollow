Livefollow::Engine.routes.draw do
  match '/get_url' => 'livefollow#get_url'
  match '/set_url/:pathname' => 'livefollow#set_url'

  match '*public_file' => 'public#render_public_file'
end
