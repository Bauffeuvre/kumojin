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
    assert tokyo_time.present?
  end
end
