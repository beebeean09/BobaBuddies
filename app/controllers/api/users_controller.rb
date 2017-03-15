class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: ['yay you signed up!']
    else
      render json: ['It seems like we already gave you in our database! Or you have an
        invalid input. Please try again!'], status: 422
    end
  end

end
