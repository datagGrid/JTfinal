window.onload=function(){
	let lis=document.querySelectorAll(".price_list li");
	lis.forEach(function(value,index){
		value.onclick=function(){
			for(let i=0;i<lis.length;i++){
				lis[i].classList.remove("active");
			}
			lis[index].classList.add("active");
		}
	})
}
