module Livefollow
  class LivefollowController < ApplicationController
    URL_TEXT_FILE = "#{Livefollow::Engine.root}/lib/livefollow_url.txt"

    def set_url
      puts params.to_yaml
      url = params[:pathname]
      unless params[:format].nil?
        url = url + ".#{params[:format]}"
      end

      File.open(URL_TEXT_FILE, 'w') { |file| file.write(url) }

      render nothing: true
    end

    def get_url
      file = File.open(URL_TEXT_FILE)
      url = file.read
      file.close
      render text: url
    end
  end
end