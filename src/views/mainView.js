import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import messageItemView from './messageItemView.js';
import sessionModel from '../models/sessionModel.js';
import {sessionListCollection,sessionList} from '../collections/sessionListCollection.js';

export default Backbone.View.extend({
	el:$('.main'),
	events:{
		'keydown .inputbar textarea':'input'
	},
	initialize(){
		sessionList.fetch();		
		this.addAll(1);
		this.sessionId=1;
		Backbone.on('selectSessionView',this.selectSessionView,this);
		
	},
	addOne(model){
		let msgView=new messageItemView({model:model});
		
		this.$('.msgbar').find('ul').append(msgView.render().$el)
	},
	addAll(sessionId){
		let data=sessionList.where({sessionId:sessionId});
		
		let filterColl=new sessionListCollection(data);
		filterColl.each(this.addOne,this);
	},
	selectSessionView(sessionId){
		this.$('.msgbar').find('ul').html('');
		this.addAll(sessionId);
		this.sessionId=sessionId;		
	},
	input(e){
		if(e.ctrlKey && e.which==13){//如果按下ctrl+enter
			let txt=$('.inputbar').find('textarea').val().trim();
			if(txt!=''){
				var newMsg=new sessionModel({
					sessionId:this.sessionId,
					text:txt,
					date:new Date(),
					isSelf:true
				});

				sessionList.add(newMsg);
				newMsg.save();
				this.addOne(newMsg);
				$('.inputbar').find('textarea').val('')
				$('.msgbar').scrollTop(999999);
			}
		}
		
	}
})