// 动画 
function animate(obj,attr,end){
	let t = setInterval(function(){
		let w = parseInt(window.getComputedStyle(obj,null)[attr]);
		if(w>=end){
			w=end;
			clearInterval(t);
		}
		obj.style[attr]=w+10+'px'
	},60)
}