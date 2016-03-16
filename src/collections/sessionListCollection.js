import _ from 'underscore';
import Backbone from 'backbone';
import sessionModel from '../models/sessionModel.js';
import { sessionListData } from '../data.js';
import Store from 'backbone.localstorage';

let sessionListCollection = Backbone.Collection.extend({
    model: sessionModel,
    localStorage: new Store('sessionList'),
})

let sessionList = new sessionListCollection(sessionListData);
if (!window.localStorage.getItem('sessionList')) {
    sessionList.each((item) => { item.save() })
}

export { sessionListCollection, sessionList }
