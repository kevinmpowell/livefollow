class LivefollowController < ApplicationController

  def update_url
    url = params[:pathname]
    unless params[:format].nil?
      url = url + ".#{params[:format]}"
    end

    if Livefollow.first.nil?
      Livefollow.create({ url: url })
    else
      Livefollow.first.update_attributes({url: url })
    end

    render nothing: true
  end

  def retrieve_url
    url = Livefollow.first.nil? ? '' : Livefollow.first.url
    render text: url
  end
end
