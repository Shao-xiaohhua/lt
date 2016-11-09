$(function(){
$('.one').on('click',function (){
$(this).empty();
  //初始
  $.ajax({
	url:'http://localhost:18080/getalluser',
	dataType:'jsonp'
  }).done(function(data){
	console.log(data)
    for(var i = 0;i<data.length;i++){
	  $('<h2>'+data[i].catname+'</h2>').appendTo('.one');
	}
	})
});
  $('.aaa').on('keyup',function (e){
	if(e.keyCode===13){
	  var abc = $('.aaa').val();
	  $.ajax({
		url:'http://xiaoliaotian.duapp.com/text',
		data:{aa:abc},
		dataType:'jsonp'
	  }).done(function (data){
		$('<li>'+data+'</li>').appendTo('.three');
		$('.aaa').val('');
	  })
	}
  });
//
//$('.aaa').on('keyup',function (){
//  var va = $(this).val();
//  var reg =/^[0-9a-zA-Z]{1,10}$/;
//  if(reg.exec(va)===null){
//    $('.bbb').text('输入不正确');
//  }else if(reg.exec(va)!==null){
//	$('.bbb').text('pass');
//  }
//})
//  $('.aaa').on('keyup',function (){
//	var va = $(this).val();
//	var aab = /\s/;
//	if(va===''){
//	  $('.bbb').text('请输入密码');
//	}
//  })
});
