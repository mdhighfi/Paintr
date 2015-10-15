class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    # @photo.image_url = Cloudinary::Uploader.upload(@photo.image_url)["secure_url"]

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end


  end

  # def destroy
  #   @photo = Photo.find(params[:id])
  #   @photo.destroy
  #   render :show
  # end

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :medium, :surface, :image_url)
  end
end
