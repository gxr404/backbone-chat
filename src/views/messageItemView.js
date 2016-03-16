import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import { userSelf, userList } from '../collections/userListCollection.js';


export default Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#sessionItem-template').html()),
    initialize() {
        this.model.view = this;

    },
    render() {
        var dataJson = this.model.toJSON();
        if (dataJson.isSelf) {
            dataJson.img = userSelf.get('img');
        } else {
            var id = this.model.get('sessionId');
            var dataObj = _.where(userList.toJSON(), { id: id })
            dataJson.img = dataObj[0].img;
        }

        let date = new Date(dataJson.date);
        dataJson.date = date.getHours() + ':' + date.getMinutes();

        this.$el.html(this.template(dataJson));
        return this;
    }
})
