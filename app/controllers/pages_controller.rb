class PagesController < ApplicationController

  def get_tokyo_time
    @tokyo_time = Time.now.utc.getlocal('+09:00')
  end

end
