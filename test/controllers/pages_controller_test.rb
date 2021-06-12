require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "get_tokyo_time not null" do
    get_tokyo_time.present? 
  end
end
