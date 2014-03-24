class AddColorToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :color, :string
  end
end
