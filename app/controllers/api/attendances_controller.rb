class Api::AttendancesController < ApplicationController

  def index
    @attendances = Attendance.all
  end

  def create
    @attendance = Attendance.new(attendance_params)
    @attendance.user_id = current_user.id

    if @attendance.save
      event = @attendance.event
      event.update(seats: event.seats - 1)
      render json: @attendance
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @attendance = Attendance.where(event_id: params[:event_id], user_id: params[:user_id])
    event = @attendance.event
    event.update(seats: event.seats + 1)
    @attendance.destroy 
    render json: @attendance
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
