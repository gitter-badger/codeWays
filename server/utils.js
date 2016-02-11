
//To add name to the  user collection
Accounts.onCreateUser(function(options, user) {
  user.profile = {};
  user.profile.fullname = options.fullname;
  return user;
});
