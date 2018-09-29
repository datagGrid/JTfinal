$(function () {
    let wenb=$(".wenb");
    let ospan=$(".span1")
    let yuy=$(".wenb .yuy b");
    wenb.click(function () {
    let timer=setInterval(move,200);
      var time = '00"03';
	  var timeParts = time.split('"');
      let a= timeParts[0] * (60000)+timeParts[1]*(1000);
      console.log(a);
       setTimeout(function(){
       	clearInterval(timer);
       },a);
       
      function move(){
      	yuy.each(function(value,index){
      		 return $(this).css("height",Math.random()*0.6+"rem");
      	})
       }
      
      
       
       
       
    })
})