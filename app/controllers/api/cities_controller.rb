class Api::CitiesController < ApplicationController

  def show
    @city = City.find_by_id(params[:id])
  end

  def index
    @cities = City.all
  end
end
