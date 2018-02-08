class Api::PostsController < ApplicationController

    def index
        @posts = Post.all.reverse

        render json: @posts
    end

    def create
        @post = Post.create(post_params)

        if @post.save
            render json: @post
        end
    end

    def show
        post_id = params[:id]

        @post = Post.find_by_id(post_id)

        render json: @post
    end

    def update
        post_id = params[:id]

        @post = Post.find_by_id(post_id)

        @post.update_attributes(post_params)

        render json: @post
    end

    def destroy
        post_id = params[:id]

        @post = Post.find_by_id(post_id)

        @post.destroy

        render json: {
            msg: "Successfully Deleted"
        }
    end

    private

    def post_params
        params.require(:post).permit(:title, :imgURL, :content)
    end
    
end
