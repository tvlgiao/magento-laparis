(function ($){
	$.fn.scrollFormenu = function() {
   var element=$(this);
  $(window).scroll(function(){
		if($(window).scrollTop()>800){
			element.addClass("positionFixed");
			$(".session3").css({paddingTop:80})	
		}else{
			element.removeClass("positionFixed");	
			$(".session3").css({paddingTop:0})	
		}
  });
  if($(window).scrollTop()>800){
			element.addClass("positionFixed");
			$(".session3").css({paddingTop:80})	
		}else{
			element.removeClass("positionFixed");	
			$(".session3").css({paddingTop:0})	
	}
	scrollHas();
};
}(jQuery));
function scrollHas(){
	jQuery('.ul_for_nav li a').bind('click',function (e) {
		jQuery('.ul_for_nav li').removeClass('active');
		 jQuery(this).parent().addClass('active');
		 var id = window.location.hash.substring(1);
		   var topValue=jQuery('#'+id).position().top - 15;
		   console.log(topValue);
		   var timer;
			  if(topValue>$(window).scrollTop()){
			  timer=topValue-$(window).scrollTop();
			  }else{
				timer=$(window).scrollTop()-topValue;	
			  }
		  $("body,html").animate({scrollTop:topValue},timer);
		  
	});
}
function scrollToSection(id){
	var topValue=$(id).position().top;
	var timer;
	if(topValue>$(window).scrollTop()){
		timer=topValue-$(window).scrollTop();
	}else{
		timer=$(window).scrollTop()-topValue;	
	}
	$("body,html").animate({scrollTop:topValue},timer);
	var src;
	
	if(id=="#homeSection") src="#home-ready";
	if(id=="#designsReady") src="#designs-ready";
	if(id=="#salesBoosted") src="#sales-boosted";
	if(id=="#experienceIpad") src="#experience-ipad";
	if(id=="#mostFeature") src="#most-feature";
	if(id=="#friendlyMobile") src="#friendly-mobile";
	if(id=="#themefeature") src="#theme-feature";
	window.location.href =src;
	
}

var item_section;
var scrollTop;
$(function(){
	$("#menu_section").scrollFormenu();
	/*$(".main_nav > ul > li").on("click",function(){
		$(".main_nav > ul > li").removeClass("active");
		$(this).addClass("active");	
	});*/
	item_section=$(".main_nav > ul > li");
	$(window).scroll(function(){
		scrollTop=$(window).scrollTop();
		if(scrollTop<$("#whatwedoSection").position().top){
			$(".main_nav > ul > li").removeClass("active");
			$(item_section[0]).addClass("active");
			
			
		}else{
			if(scrollTop>$("#whatwedoSection").position().top-150 && scrollTop<$("#serviceSection").position().top-150){
				$(".main_nav > ul > li").removeClass("active");
				$(item_section[1]).addClass("active");
				
			}else{
				if(scrollTop>$("#serviceSection").position().top-150 && scrollTop<$("#ClientSection").position().top-150){
					$(".main_nav > ul > li").removeClass("active");
					$(item_section[2]).addClass("active");
					
				}else{
					if(scrollTop>$("#ClientSection").position().top-150 && scrollTop<$("#AboutSection").position().top-150){
						$(".main_nav > ul > li").removeClass("active");
						$(item_section[3]).addClass("active");
						
					}else{
						if(scrollTop>$("#AboutSection").position().top-150 && scrollTop<$("#ContactSection").position().top-150){
							$(".main_nav > ul > li").removeClass("active");
							$(item_section[4]).addClass("active");
							
						}else{
							if(scrollTop>$("#ContactSection").position().top-150){
								$(".main_nav > ul > li").removeClass("active");
								$(item_section[5]).addClass("active");
								
							}	
						}		
					}	
				}		
			}	
		}
	});
	scrollTop=$(window).scrollTop();
		if(scrollTop<$("#whatwedoSection").position().top){
			$(".main_nav > ul > li").removeClass("active");
			$(item_section[0]).addClass("active");
			
		}else{
			if(scrollTop>$("#whatwedoSection").position().top-150 && scrollTop<$("#serviceSection").position().top-150){
				$(".main_nav > ul > li").removeClass("active");
				$(item_section[1]).addClass("active");
			}else{
				if(scrollTop>$("#serviceSection").position().top-150 && scrollTop<$("#ClientSection").position().top-150){
					$(".main_nav > ul > li").removeClass("active");
					$(item_section[2]).addClass("active");
				}else{
					if(scrollTop>$("#ClientSection").position().top-150 && scrollTop<$("#AboutSection").position().top-150){
						$(".main_nav > ul > li").removeClass("active");
						$(item_section[3]).addClass("active");
					}else{
						if(scrollTop>$("#AboutSection").position().top-150 && scrollTop<$("#ContactSection").position().top-150){
							$(".main_nav > ul > li").removeClass("active");
							$(item_section[4]).addClass("active");
						}else{
							if(scrollTop>$("#ContactSection").position().top-150){
								$(".main_nav > ul > li").removeClass("active");
								$(item_section[5]).addClass("active");
							}	
						}		
					}	
				}		
			}	
		}
		
		/*$(".services ul li").hover(function(){
			clearTimeout(t1);
			var element=$(this);
			
				$(element).addClass("active");
				if($(this).position().top<12){
				$(element).find(".content_items").animate({height:223},{
				duration :300,	queue :false
			})
				}else{
					if($(this).position().top<150){
						$(element).find(".content_items").animate({height:300,top:-112},{
							duration :300,	queue :false
						});
						
					}else{
						$(element).find(".content_items").animate({height:300,top:-223},{
							duration :300,	queue :false
						});
					}
				}
			
		},function(){
			var element2=$(this);
		
				$(element2).find(".content_items").animate({height:0,top:72},{
				duration :500,	queue :false,complete:function(){
					element2.removeClass("active");
				}
			})
		
				
		})
		*/
		
		var pare=window.location.hash.substring(1);
		switch(pare){
				case "what-we-do" : scrollToSection("#whatwedoSection")
								break;
				case "service" : scrollToSection("#serviceSection")
								break;
				case "client" : scrollToSection("#ClientSection")
								break;
				case "about-us" : scrollToSection("#AboutSection")
								break;
				case "contact-us" : scrollToSection("#ContactSection")
								break;
				
		}
})
var t1;
var t2;