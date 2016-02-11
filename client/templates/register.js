Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var fullname= $('[name=fullname]').val();
        Accounts.createUser({
            email: email,
            password: password,
            fullname: fullname
        }, function(error){
            if(error){
                $('.error-msg').html(error.reason);
                $('.error-msg').removeClass('hidden');
            } else {
                Router.go("login"); // Redirect user if registration succeeds
            }
        });
    }
});

Template.register.onRendered(function(){
        $('body').removeClass('skin-blue sidebar-mini');
        $('body').addClass('register-page');
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
});

Template.register.onDestroyed(function(){
    $('body').removeClass('register-page');
    $('body').addClass('skin-blue sidebar-mini');
});
