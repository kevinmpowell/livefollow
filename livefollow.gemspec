$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "livefollow/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "livefollow"
  s.version     = Livefollow::VERSION
  s.authors     = ["Kevin Powell"]
  s.email       = ["kevinmpowell@gmail.com"]
  s.summary     = "This Rails Engine can be added to any rails application and when multiple browsers/devices are pointed to this app, clicking the link on one device will make all the other devices follow the same link."
  s.description = "This Rails Engine can be added to any rails application and when multiple browsers/devices are pointed to this app, clicking the link on one device will make all the other devices follow the same link."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails"
  # s.add_dependency "jquery-rails"

  s.add_development_dependency "sqlite3"
end
