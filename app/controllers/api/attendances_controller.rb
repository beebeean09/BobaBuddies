class Api::AttendancesController < ApplicationController

  def index
    @attendances = Attendance.all
  end

  def create
    @attendance = Attendance.new(attendance_params)
    @attendance.user_id = current_user.id

    if @attendance.save
      @event = @attendance.event
      @event.update(seats: @event.seats - 1)
      render 'api/attendances/show'
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = current_user.events.find(params[:id])
    @event.update(seats: @event.seats + 1)
    @attendance = Attendance.where(event_id: params[:id], user_id: current_user.id).first
    @attendance.destroy
    render 'api/attendances/show'
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
