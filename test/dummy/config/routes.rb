Rails.application.routes.draw do

  resources :movies


  mount Livefollow::Engine => "/livefollow"

  match "/test" => "application#test"
end
