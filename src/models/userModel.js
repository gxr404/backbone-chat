import _ from 'underscore';
import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults:()=>({    	
    	name: '',
    	img: ''
    }),
    search:function  (key) {
    	if(typeof(key) === 'undefined'||key===null ||key===''){
    		return true;
    	}
    	return this.get('name').toString().toLowerCase().indexOf(key) != -1
    }
    
})
