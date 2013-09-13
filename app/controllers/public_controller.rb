class PublicController < ApplicationController

  def render_public_file
    filename = params[:public_file]
    unless params[:format].nil?
      filename = filename + ".#{params[:format]}"
    end

    f = File.open(Rails.root.join('static', filename))
    doc = Nokogiri::HTML(f)

    livefollow_script = Nokogiri::XML::Node.new('script', doc)
    livefollow_script.set_attribute('src', ActionController::Base.helpers.asset_path("application.js"))

    body = doc.at_css "body"
    body.children.last.add_next_sibling(livefollow_script)

    render text: doc.to_html, layout: false
  end
end
