import _ from 'underscore';
import Backbone from 'backbone';
import userModel from '../models/userModel.js';
import { selfData, userListData } from '../data.js';
import Store from 'backbone.localstorage';


let userListCollection = Backbone.Collection.extend({
    model: userModel,
    localStorage: new Store('userList'),
})
let userList = new userListCollection(userListData);
if (!window.localStorage.getItem('userList')) {
    userList.each((item) => { item.save() })
}

let userSelf = new userModel(selfData);



// console.log('userList',userList);
export { userSelf, userList }
