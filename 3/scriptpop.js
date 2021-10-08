let popup=document.getElementById('mypopup'),
 	popupTogle=document.getElementById('myBtn'),
 	popupClose=document.querySelector('.close');
let sub=document.querySelector('.submit');
 	popupTogle.onclick=function(){
 		popup.style.display='block';
 	};
 	popupClose.onclick=function(){
 		popup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==popup){
 			popup.style.display="none";
 		}
 	};
 	sub.onclick=function(){
 		popup.style.display='none';
 	};
