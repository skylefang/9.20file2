/*
* @Author: DELL-PC
* @Date:   2017-09-20 11:56:59
* @Last Modified by:   DELL-PC
* @Last Modified time: 2017-09-20 12:00:32
*/
function animate(obj,attrobj,callback){
    let t = setInterval(function(){
    	for(let i in attrobj){
    		let w = parseInt(window.getComputedStyle(obj,null)[i]);
    		if(w>=attrobj[i]){
    			w=attrobj[i];
    			clearInterval(t);
    			obj.style.background='red';
    			if(callback){
    				callback();
    			}
    		}
    	    obj.style[i]=w+10+'px';
    	}
    },60)
}
