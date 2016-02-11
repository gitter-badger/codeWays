Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                $('.error-msg').html(error.reason);
                $('.error-msg').removeClass('hidden');
            } else {
                Router.go("testPage");
            }
        });
    }
});


Template.login.onRendered(function(){
        $('body').removeClass('skin-blue sidebar-mini');
        $('body').addClass('login-page');
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
});

Template.login.onDestroyed(function(){
    $('body').removeClass('login-page');
    $('body').addClass('skin-blue sidebar-mini');
});
