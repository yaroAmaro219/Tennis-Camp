require 'test_helper'

class EnrollsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enroll = enrolls(:one)
  end

  test "should get index" do
    get enrolls_url, as: :json
    assert_response :success
  end

  test "should create enroll" do
    assert_difference('Enroll.count') do
      post enrolls_url, params: { enroll: { childage: @enroll.childage, childname: @enroll.childname, consent: @enroll.consent, email: @enroll.email, enddate: @enroll.enddate, firstname: @enroll.firstname, lastname: @enroll.lastname, phone: @enroll.phone, question: @enroll.question, startdate: @enroll.startdate } }, as: :json
    end

    assert_response 201
  end

  test "should show enroll" do
    get enroll_url(@enroll), as: :json
    assert_response :success
  end

  test "should update enroll" do
    patch enroll_url(@enroll), params: { enroll: { childage: @enroll.childage, childname: @enroll.childname, consent: @enroll.consent, email: @enroll.email, enddate: @enroll.enddate, firstname: @enroll.firstname, lastname: @enroll.lastname, phone: @enroll.phone, question: @enroll.question, startdate: @enroll.startdate } }, as: :json
    assert_response 200
  end

  test "should destroy enroll" do
    assert_difference('Enroll.count', -1) do
      delete enroll_url(@enroll), as: :json
    end

    assert_response 204
  end
end
