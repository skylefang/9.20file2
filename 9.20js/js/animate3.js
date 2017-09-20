function animate(obj,attrobj){
    let t = setInterval(function(){
    	for(let i in attrobj){
    		let w = parseInt(window.getComputedStyle(obj,null)[i]);
    		if(w>=attrobj[i]){
    			w=attrobj[i];
    			clearInterval(t);
    			obj.style.background='red';
    		}
    	    obj.style[i]=w+10+'px';
    	}
    },60)
}

