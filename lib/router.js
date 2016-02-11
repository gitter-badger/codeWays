var onBeforeAction;

onBeforeAction = function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.layout("adminLayout");
        this.next();
    } else {
        this.render("login");
    }
};

Router.route("/", {
    name: 'testPage',
    template: 'testPage',
    onBeforeAction: onBeforeAction
});


Router.route('/login');

Router.route('/register');
