require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "root path" do
    get root_path
    assert_response :success
  end

  test "get_tokyo_time not nil" do
    get root_path
    tokyo_time = @controller.get_tokyo_time
    regex = /(0?[1-9]|1[0-2])\/(0?[1-9]|1[0-9]|2[0-9]|3(0|1))\/\d{4}, ((1[0-2]|\s?[1-9]):([0-5][0-9]):([0-5][0-9])) ([AP][M])/
    assert regex.match?(tokyo_time)
  end
end
