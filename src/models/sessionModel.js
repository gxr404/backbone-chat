import _ from 'underscore';
import Backbone from 'backbone';
export default Backbone.Model.extend({
	default:()=>({			
		sessionId:1, //session 根据userid定的
		text:'',
		date:new Date(),
		isSelf:false
	})
})