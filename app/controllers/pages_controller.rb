# Module JSON to get the methods related to JSONs files
require 'json'
# Module uri to open Urls 
require 'open-uri'

class PagesController < ApplicationController

  def home
    # Url of tokyo timezone api
    tokyo_api_url = "http://worldtimeapi.org/api/timezone/Asia/Tokyo"
    
    # Serializing the url
    time_api_serialized = URI.open(tokyo_api_url).read
    # Parsing the Url
    time_api_parsed = JSON.parse(time_api_serialized)
    
    # Get the relevant date time
    @tokyo_time =  DateTime.parse(time_api_parsed["datetime"])
    # @tokyo_time =  DateTime.parse(time_api_parsed["datetime"]).strftime('%e/%m/%Y, %l:%M:%S %p')

  end

end
