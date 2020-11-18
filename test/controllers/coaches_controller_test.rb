require 'test_helper'

class CoachesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coach = coaches(:one)
  end

  test "should get index" do
    get coaches_url, as: :json
    assert_response :success
  end

  test "should create coach" do
    assert_difference('Coach.count') do
      post coaches_url, params: { coach: { age: @coach.age, bio: @coach.bio, classes: @coach.classes, location: @coach.location, name: @coach.name } }, as: :json
    end

    assert_response 201
  end

  test "should show coach" do
    get coach_url(@coach), as: :json
    assert_response :success
  end

  test "should update coach" do
    patch coach_url(@coach), params: { coach: { age: @coach.age, bio: @coach.bio, classes: @coach.classes, location: @coach.location, name: @coach.name } }, as: :json
    assert_response 200
  end

  test "should destroy coach" do
    assert_difference('Coach.count', -1) do
      delete coach_url(@coach), as: :json
    end

    assert_response 204
  end
end
