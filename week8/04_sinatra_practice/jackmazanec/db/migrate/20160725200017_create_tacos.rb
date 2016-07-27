class CreateTacos < ActiveRecord::Migration
  def change
    create_table :tacos do |t|
      t.string :name
      t.string :meat
      t.string :cheese
    end
  end
end
