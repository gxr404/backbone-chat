import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

export default Backbone.View.extend({
	tagName:'li',
	template:_.template($('#userItem-template').html()),
	initialize() {
		this.model.view=this
	},
	events:{
		'click':'clickMe'
	},
	render(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	clickMe(){
		$('li').removeClass('active');
		this.$el.addClass('active');		
		Backbone.trigger('selectSessionView',this.model.get('id'))
	}
})