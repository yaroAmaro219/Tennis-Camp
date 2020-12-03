class AuthenticationController < ApplicationController
	before_action :authorize_request, except: :login

  def login
    @user = User.find_by_email(login_params[:email])
    if @user
		  if @user.authenticate(login_params[:password])
		  	token = encode(user_id: @user.id, email:@user.email)
		  	render json: {user: @user, token: token, status: :ok} 
		  else
        render json: { errors: 'unauthorized' }, status: :unauthorized
      end
    else
      error
    end
  end

  def error 
    rescue ActiveRecord::RecordNotFound 
      render json: { error: error.message}, status: :not_found
  end
    
	def verify 
		render json: @current_user, status: :ok
	end

	private

	def login_params
		params.require(:authentication).permit(:email, :password)
	end
end

