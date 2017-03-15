class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
    user_params[:email],
    user_params[:password]
    )
    @user[:host] = true;
    @user[:first_name] = "vivian"


    if @user
      login(@user)
      render json: ["yay you signed up!"]
    else
      render(
      json: ["Invalid username/password combination"],
      status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
      json: ["Nobody signed in"],
      status: 404
      )
    end
  end
end
