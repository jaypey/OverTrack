class UserMailer < ApplicationMailer
    default from: 'overtrack.noreply@gmail.com'

    def budget_invite
        @recipientUser = params[:recipientUser]
        @senderUser = params[:senderUser]
        @confirmationUrl = params[:confirmationUrl]
        @budgetLinked = params[:invitedBudget]
        mail(to: @recipientUser.email, subject: '[OverTrack] Join ' + @senderUser.firstname + '\'s budget!')
    end

    def user_confirm
        @userToConfirm = params[:userToConfirm]
        @confirmationUrl = params[:confirmationUrl]
        mail(to: @userToConfirm.email, subject: '[OverTrack] Confirm registration')
    end

    def password_reset
        @userToReset = params[:userToReset]
        @resetUrl = params[:resetUrl]
        mail(to: @userToReset.email, subject: '[OverTrack] Reset password')
    end
end
