class HomesController < ApplicationController
  before_action :set_home, only: [:show, :edit, :update, :destroy]
	layout "mgmts.html.erb"
  # GET /homes
  # GET /homes.json
  def index
    @homes = Home.all
  end

  # GET /homes/1
  # GET /homes/1.json
  def show
  end

  # GET /homes/1/edit
  def edit
  end

  # PATCH/PUT /homes/1
  # PATCH/PUT /homes/1.json
  def update
    respond_to do |format|
			@home = Home.find(params[:id])
      if @home.update_attributes(home_params)
        format.html { redirect_to @home, notice: 'Home was successfully updated.' }
        format.json { render :show, status: :ok, location: @home }
      else
        format.html { render :edit }
        format.json { render json: @home.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home
      @home = Home.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def home_params
      params.require(:home).permit(:title_1, :content_1, :hours_thursday, :hours_friday, :hours_saturday)
    end
end
