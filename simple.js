$(function(){
	var HelloView = Backbone.View.extend({
		
		render: function() {
            this.$el.append( "new hello world" );
            return this;
		}
	});
	
	var helloView = new HelloView();
    $("body").append(helloView.render().el);
});
