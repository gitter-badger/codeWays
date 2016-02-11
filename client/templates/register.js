Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go("login"); // Redirect user if registration succeeds
            }
        });
        Router.go('login');
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
