class AddHasColorToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :has_color, :boolean
  end
end
