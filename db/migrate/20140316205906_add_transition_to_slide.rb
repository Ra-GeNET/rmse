class AddTransitionToSlide < ActiveRecord::Migration
  def change
    add_column :slides, :transition_id, :integer
  end
end
