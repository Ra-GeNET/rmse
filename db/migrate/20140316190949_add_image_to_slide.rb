class AddImageToSlide < ActiveRecord::Migration
  def change
    add_attachment :slides, :image
  end
end
