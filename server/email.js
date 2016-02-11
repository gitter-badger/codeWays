Meteor.startup(function () {
  // 1. Set up stmp.
/*
  process.env.MAIL_URL = 'smtp://' +
    encodeURIComponent(your_username) + ':' +
    encodeURIComponent(your_password) + '@' +
    encodeURIComponent(your_server) + ':' + your_port;
*/
  // 2. Format the email
  //-- Set the from address
  Accounts.emailTemplates.from = 'noreply@codeways.linways.in';

  //-- Application name
  Accounts.emailTemplates.siteName = 'codeways';

  //-- Subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address for codeways';
  };

  //-- Email text
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
  };

  // 3.  Send email when account is created
  Accounts.config({
    restrictCreationByEmailDomain: 'linways.com',
    sendVerificationEmail: true
  });
});
