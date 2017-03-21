class Api::AttendancesController < ApplicationController

  def index
    @attendances = Attendance.all
  end

  def create
    @attendance = Attendance.new(attendance_params)
    @attendance.user_id = current_user.id

    if @attendance.save
      render :show
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @attendance = Attendance.where(user_id: params[:user_id])
    @attendance.delete
    render json: @attendance
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
