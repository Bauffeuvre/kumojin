require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "root path" do
    get '/api/v1/pages'
    assert_response :success
  end

  test "get_tokyo_time not nil" do
    get '/api/v1/pages'
    parsed_response = JSON.parse(@response.body)
    regex = /(0?[1-9]|1[0-2])\/(0?[1-9]|1[0-9]|2[0-9]|3(0|1))\/\d{4}, ((1[0-2]|\s?[1-9]):([0-5][0-9]):([0-5][0-9])) ([AP][M])/
    assert regex.match?(parsed_response["tokyo_time"])
  end
end
