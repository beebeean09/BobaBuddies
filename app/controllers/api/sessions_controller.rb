class Api::SessionsController < ApplicationController

  def show

  end

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email/password combination."], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render 'api/users/show'
    else
      render json: ["Not found. No one is signed in."], status: 404
    end
  end

end
