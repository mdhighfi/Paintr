class StaticPagesController < ApplicationController
  before_action :index, :require_logged_in

  def index
  end
end
