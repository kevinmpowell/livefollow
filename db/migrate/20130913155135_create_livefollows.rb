class CreateLivefollows < ActiveRecord::Migration
  def change
    create_table :livefollows do |t|
      t.text :url

      t.timestamps
    end
  end
end
