require 'test_helper'

class MgmtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mgmt = mgmts(:one)
  end

  test "should get index" do
    get mgmts_url
    assert_response :success
  end

  test "should get new" do
    get new_mgmt_url
    assert_response :success
  end

  test "should create mgmt" do
    assert_difference('Mgmt.count') do
      post mgmts_url, params: { mgmt: {  } }
    end

    assert_redirected_to mgmt_url(Mgmt.last)
  end

  test "should show mgmt" do
    get mgmt_url(@mgmt)
    assert_response :success
  end

  test "should get edit" do
    get edit_mgmt_url(@mgmt)
    assert_response :success
  end

  test "should update mgmt" do
    patch mgmt_url(@mgmt), params: { mgmt: {  } }
    assert_redirected_to mgmt_url(@mgmt)
  end

  test "should destroy mgmt" do
    assert_difference('Mgmt.count', -1) do
      delete mgmt_url(@mgmt)
    end

    assert_redirected_to mgmts_url
  end
end
