class UserMailer < ApplicationMailer
    default from: 'overtrack.noreply@gmail.com'

    def budget_invite
        @recipientUser = params[:recipientUser]
        @senderUser = params[:senderUser]
        # @confirmationUrl = params[:confirmationUrl]
        @confirmationUrl = "TEST"
        mail(to: @recipientUser.email, subject: '[OverTrack] Join ' + @senderUser.firstname + '\'s budget!')
    end
end
