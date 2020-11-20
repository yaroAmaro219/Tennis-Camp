class ApplicationController < ActionController::API
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, PATCH, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
end
  SECRET_KEY = 
  Rails.env == 'produciton' ? ENV[SECRET_KEY] : 
  Rails.application.secrets.secret_key_base.to_s
  
	def encode(payload, exp = 24.hours.from_now)
		payload[:exp] = exp.to_i
		JWT.encode(payload, SECRET_KEY)
	end

	def decode(token)
		decoded = JWT.decode(token, SECRET_KEY)[0]
		HashWithIndifferentAccess.new decoded
	end

	def authorize_request
		header = request.headers['Authorization']
		header = header.split(' ').last if header
		begin
			@decoded = decode(header)
			@current_user = User.find(@decoded[:user_id])
		rescue Active::RecordNotFound => e
			render json: {errors: e.message}, status: :unauthorized
		rescue JWT::DecodeError => e
			render json: {errors: e.message}, status: :unauthorized
		end
	end
end