class SlideshowController < ApplicationController
    
    def index
        @slides = Slide.order( 'created_at DESC' )
    end
    
end
