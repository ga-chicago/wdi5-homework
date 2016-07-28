class CreateWhales < ActiveRecord::Migration
  def change
    create_table :whales do |table|
      table.string :length
      table.string :weight
      table.string :name
    end
  end
end
