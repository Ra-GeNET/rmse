class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.text :content

      t.timestamps
    end
  end
end
