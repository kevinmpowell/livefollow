class Movie < ActiveRecord::Base
  attr_accessible :director, :release_date, :title
end
