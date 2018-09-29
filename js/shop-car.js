
window.onload=function(){
   let right=document.querySelectorAll(".right");
   console.log(right);
   right.forEach(function(element){
        let times=0;
        element.onclick=function(){
           times++;
           if(times%2==0){
               this.src="img/xuan.png"
               this.classList.add("hot");
           }else{
            this.src="img/right.png"  
            this.classList.remove("hot");
           }
                
        }
   }) 
   let ul=document.querySelectorAll(".ul");
   let del=document.querySelectorAll(".del");
   console.log(ul,del);
   for(let i=0;i<del.length;i++){
       del[i].onclick=function(){
           ul[i].style.display="none";
       }
   }
//    window.onblur=function(){
//    let hot=document.querySelectorAll(".hot");
//    let time=hot.length;
//    console.log(hot,time);
//    let nowprice=document.querySelector(".Price");
//    nowprice.innerText=(162*"time");
//     }
}
$(function(){
    let num=$(".num2");
    let jia=$(".jia2");
    let jian=$(".jian2");
   
    jiajian(num,jia,jian);
    let a=$(".num1");
    let b=$(".jia1");
    let c=$(".jian1");
   
    jiajian(a,b,c);
     console.log(a,b,c);
    function jiajian(num,jia,jian){
        let number=num.text();
      
        let newnumber;
       
        jia.click(function(){
            number++;
            newnumber=number;
            if(newnumber<10){
                num.text("0"+newnumber);
                }else{
                    num.text(newnumber);  
                }
             
        })
        jian.click(function(){
           
            if(number<=00){
             newnumber=00;
               
            }else{
                number--;
             newnumber=number;   
            }
            if(newnumber<10){
            num.text("0"+newnumber);
            }else{
                num.text(newnumber);  
            }
        })
    }


})