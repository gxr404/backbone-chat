import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import userItemView from './userItemView.js';
import { userSelf, userList } from '../collections/userListCollection.js';

export default Backbone.View.extend({
    el: $('.sidebar'),
    initialize() {        
    	userList.fetch();
        this.addAll();        
        this.renderSelf();
        this.$('.list').children().first().addClass('active');
    },
    events: {
        'keyup .search': 'searchUser'
    },   
    addOne(model) {
        var itemView = new userItemView({ model: model });
        this.$('.list').append(itemView.render().$el);
    },
    addAll() {
        userList.each(this.addOne, this);
    },
    renderSelf() {
        let selfView = new userItemView({ model: userSelf });
        this.$('.self').find('header').append(selfView.render().$el.children());
    },
    searchUser(e) {
        let key = $('.search').val().toLowerCase();
        userList.each((model) => {
            model.search(key) ? model.view.$el.show() : model.view.$el.hide();
        })
    }


})
