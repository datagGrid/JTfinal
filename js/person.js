window.onload=function(){
	let footer=document.querySelector("footer");
	let oA=footer.getElementsByTagName("a");
	let oshade=document.querySelector(".shade");
	let oicon1=document.querySelector(".icon1");
	let oicon2=document.querySelector(".icon2");
	let orz=document.querySelector(".room");
	let oclose=document.querySelector(".closebtn");
	let osearch=document.querySelector(".search-bar");
	console.log(orz);
	console.log(oshade);
	
		for(let i=0;i<=oA.length-1;i++){
			oA[i].onclick=function(){
				for(let j=0;j<=oA.length-1;j++)
				{
					oA[j].classList.remove("active");
				}
				oA[i].classList.add("active");
			}
		}
		orz.onclick=function(){
			oshade.style.transform="scale(1)";
			oicon1.style.transform="scale(1)";
			oicon2.style.transform="scale(1)";
			oclose.style.transform="scale(1)";
		}
		oclose.onclick=function(){
			oshade.style.transform="scale(0)";
			oicon1.style.transform="scale(0)";
			oicon2.style.transform="scale(0)";
			oclose.style.transform="scale(0)";
		}
		
		
	}