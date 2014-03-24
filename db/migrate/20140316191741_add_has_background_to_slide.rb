class AddHasBackgroundToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :has_background, :boolean
  end
end
