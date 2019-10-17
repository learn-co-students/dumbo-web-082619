class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers, include: "**", status: :ok
    # , only: [:id, :name, :subject], include: {classrooms: {only: [:id, :name], include: {assignments: {only: [:id, :name, :classroom_id]}}}}
  end

  def show
    @teacher = Teacher.find(params[:id])
    render json: @teacher, include: "**", status: 200
    # , only: [:id, :name, :subject], include: {classrooms: {only: [:id, :name], include: {assignments: {only: [:id, :name, :classroom_id]}}}}
  end

end
