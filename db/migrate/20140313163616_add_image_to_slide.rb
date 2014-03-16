class AddImageToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :image, :attachment
  end
end
