//  $(function  () {
//  	var num;
// 	$(".sl1").click(function(){
//  		num=parseInt($(".sl2").html());
// 		num--;
//  		if(num<0){
//  			num=0;
//  		}

// 		$(".sl2").html(num);
// 	})
// })
  $(function  () {
 	var num;
	$(".sl1").click(function(){
 		num=parseInt($(".sl2").html());
		num--;
 		if(num<0){
 			num=0;
 		}

		$(".sl2").html(num);
	})
})

    $(function  () {
 	var num;
	$(".sl3").click(function(){
 		num=parseInt($(".sl2").html());
		num++;

		$(".sl2").html(num);
	})
})