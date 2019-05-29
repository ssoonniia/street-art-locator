class CommentsController < ApplicationController
    def create
        @comment = Comment.create(author: params[:author], comment: params[:comment])
		if @comment.save
			render :json => @comment
		else
			render json: {message: @comment.errors}, status:400
		end
    end 
end 