class UsersController < ApplicationController
	require 'pry'
	def index
	end 

	def create
		@user = User.create(name: params[:name], age: params[:age])
		if @user.save
			render :json => @user
		else
			render json: {message: @user.errors}, status:400
		end
	end 

	def show
	end 
	
	
end    