class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to posts_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
