class ResetController < ActionController::Base
  #Je dois appeler une view qui demande le email avec un bouton confirm qui envoit a forgot qui envoit un email avec le lien reset
  #Token regeneration AKA: début
  def forgot
    if params[:email].blank? # check if email is present
      flash[:error] = 'Email not present'
      redirect_to :controller => 'user', :action => 'forgot'
      return
    end

    if !params[:email].match(/(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
      flash[:error] = 'Email not valid'
      redirect_to :controller => 'user', :action => 'forgot'
      return
    end  

    user = User.find_by(email: params[:email]) # if present find user by email
    
    if user.present?
      user.generate_password_token! #generate pass token
      confUrl = request.host_with_port + '/user/reset'+ '?token='+ user.reset_password_token
      UserMailer.with(userToReset: user, resetUrl: confUrl).password_reset.deliver_later
      flash[:success] = 'Email sent.'
      redirect_to :root
      return
    else
      flash[:success] = 'Email sent.'
      redirect_to :root
      return
    end
  end


  # Form confirmation AKA: étape finale
  def reset
    if params[:token].blank?
      flash[:error] = 'Token not present.'
      redirect_to :controller => 'user', :action => 'reset'
      return
    end
  
    token = params[:token].to_s
  
    user = User.find_by(reset_password_token: token)
  
    if user.present? && user.password_token_valid?
      if user.reset_password!(params[:password])
        redirect_to :root
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        flash[:error] = user.errors.full_messages
        redirect_to :controller => 'user', :action => 'reset'
        return
      end
    else
      flash[:error] = 'Link not valid or expired. Try generating a new link.'
      redirect_to :controller => 'user', :action => 'reset'
      return
    end
  end
end
  