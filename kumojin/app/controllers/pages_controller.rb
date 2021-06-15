class PagesController < ApplicationController

  def get_tokyo_time
    tokyo_time = Time.now.utc.getlocal('+09:00').strftime("%-m/%e/%Y, %l:%M:%S %p")
    render json: {tokyo_time: tokyo_time}
  end

end
