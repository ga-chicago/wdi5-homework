class CreateWhalesTable < ActiveRecord::Migration
  def change
    create_table :whales do |t|
      t.string :name
      t.string :lifespan
      t.string :ocean
    end
  end
end
