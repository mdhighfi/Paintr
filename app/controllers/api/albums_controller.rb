class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.author_id = current_user.id

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy

    render :show
  end

  def index
    @albums = Album.where(
      author_id: current_user.id
    )
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    @album.update(album_params)

    render :show
  end

  private
  def album_params
    params.require(:album).permit(
      :title, :description, :author_id
    )
  end
end
