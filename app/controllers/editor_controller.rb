class EditorController < ApplicationController
    def index
        @slides = Slide.all
    end
    
  def new
    @slide = Slide.new
  end

end
