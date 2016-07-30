class CreateWhales < ActiveRecord::Migration
  def change
    create_table :whales do |table|
      table.string :type
      table.string :diet
      table.string :image_url
    end
  end
end
