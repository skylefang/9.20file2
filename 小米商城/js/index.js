/*window.onload=function(){
	// 轮播
	let btn1 =$('.img-list')[0];
    let img= $('li',btn1);
    let imgW=parseInt(getComputedStyle(btn1,null).width);
    let bannerbox=$('.banner-box')[0];
    let lefts = $('.banner-left',bannerbox)[0];
    let rights = $('.banner-right',bannerbox)[0];
    let banbot =$ ('.yuan-list',bannerbox)[0];
    let btn2 = $('li',banbot);
    console.log(btn2)
    // 自动轮播
    let next=0;
    let now=0;
    let flag=true;
    let t;
    t= setInterval(move,2000);
    function move(){
    	next++;
    	if(next==img.length){
    		next=0;
    	}
        btn2[now].style.background=' #78584F';
        btn2[next].style.background='#fff';
    	img[next].style.left = `${imgW}px`;
        animate(img[now],{left:-imgW});
        animate(img[next],{left:0},function(){
        flag=true;
        });
        now=next;
        console.log(now)
    }
    // 鼠标移入自动轮播停止
   /* bannerbox.onmouseover=function(){
    	clearInterval(t);
    }
    bannerbox.onmouseout=function(){
    	t= setInterval(move,2000);
    }
    rights.onclick=function(){
    	if(!flag){
    		return;
    	}
    	movel();
    	flag=false;
    }
    lefts.onclick=function(){
    	if(!flag){
    		return;
    	}
    	move();
    	flag=false;
    }
    function movel(){
    	next--;
    	if(next<0){
    		next=img.length-1;
    	}
    	img[next].style.left = `${-imgW}px`;
        btn2[now].style.background=' #78584F';
        btn2[next].style.background='#fff';
        animate(img[now],{left:imgW});
        animate(img[next],{left:0},function(){
        	flag=true;
        });
        now=next;
    }*/
    // 下面的圆点鼠标点击效果
    /*for(let i=0;i<btn2.length;i++){
    	btn2[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		// btn2[now].style.background=' #78584F';
    		// btn2[i].style.background='#fff';
    		img[i].style.left=imgW+'px';
    		animate(img[now],{left:-imgW});
    		animate(img[i],{left:0});
    		now=next=i;
            
    	}
    }*/

/*}*/
window.onload=function(){
    let imglist = getClass('img-list')[0];
    let imgs = imglist.getElementsByTagName('li');
    let imgW = parseInt(getComputedStyle(imglist,null).width);
    let btn1 = getClass('banner-box')[0];
    let lefts = getClass('banner-left',btn1)[0];
    let rights = getClass('banner-right',btn1)[0];
    let btn = getClass('yuan-list')[0];
    let lis = btn.getElementsByTagName('li');
    console.log(lis);
    let now = 0;
    let next = 0;
    let flag=true;
    let t;
    t=setInterval(move,2000);
    // 自动轮播
    function move(){
       next++;
       if(next==imgs.length){
        next=0;
       }
      
       imgs[next].style.left = `${imgW}px`;
       animate(imgs[now],{left:-imgW});
       animate(imgs[next],{left:0},function(){
        flag=true;
       });
        lis[now].style.background=' #78584F';
       lis[next].style.background='#fff';
       now=next;
    }
    function movel(){
       next--;
       if(next<0){
        next=imgs.length-1;
       }
       
       imgs[next].style.left = `${-imgW}px`;
       animate(imgs[now],{left:imgW});
       animate(imgs[next],{left:0},function(){
        flag=true;
       });
       now=next;
    }
    // 鼠标移入自动轮播停止
    btn1.onmouseover=function(){
        clearInterval(t);
    }
    btn1.onmouseout=function(){
        t=setInterval(move,2000);
    }
    // 左右按钮
    rights.onclick=function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    }
    lefts.onclick=function(){
        if(!flag){
            return;
        }
        movel();
        flag=false;
    }
    // 移入
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            if(now==i){
                return;
            }
            lis[now].style.background=' #78584F';
            lis[i].style.background='#fff';
            imgs[i].style.left=imgW+'px';
            animate(imgs[now],{left:-imgW});
            animate(imgs[i],{left:0});
            now=next=i;
        }
    }


    
}