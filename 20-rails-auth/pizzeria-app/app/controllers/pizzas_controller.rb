class PizzasController < ApplicationController
  before_action :set_pizza, only: [:show, :edit, :update, :destroy]

  def index
    byebug
    # model
    @pizzas = @current_user.pizzas

    # render/redirect
    # render :index
  end

  def show
    # model
    # set_page_count
    # if session[:page_count] == nil
    #   session[:page_count] = 0
    # end
    session[:page_count] += 1
    @page_count = session[:page_count]
    # render/redirect
    # render :show
  end

  def new
    # model
    @pizza = Pizza.new

    # render/redirect
    # render :new
  end

  def edit
    # model
    # render/redirect
  end

  def create
    # model
    pizza = Pizza.create(pizza_params.merge(user_id: @current_user.id))

    # render/redirect
    redirect_to pizza_path(pizza)
  end

  def update
    @pizza.update(pizza_params)

    # render/redirect
    redirect_to pizza_path(pizza)
  end

  def destroy
    @pizza.destroy

    redirect_to pizzas_path
  end

  private

  def set_pizza
    @pizza = Pizza.find(params[:id])
  end

  def pizza_params
    params.require(:pizza).permit(:name, :size, :cost, :extra_cheese)
  end

end
