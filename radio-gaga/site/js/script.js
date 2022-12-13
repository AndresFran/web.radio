//-----Global Vars-------------------------------------------------------------------------------
var website_spinner,
    page_spinner;
var isSplash = true;

$(document).ready(function(){
    var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:335,//mandatory property for decktop
		bottomMargin:200,//mandatory property for decktop
		topMarginMobileDevices:335,//mandatory property for mobile devices
		bottomMarginMobileDevices:200,//mandatory property for mobile devices
		bodyMinHeight:900,
        delaySubMenuHide:500,
        fullHeight:false,
//-----menu---------------------------------------------------------------------------------------		
        menuInit:function (classMenu, classSubMenu){
            classMenu.find(">li").each(function(){
                var conText = $("> a", this).find('.base_text').text();
                //$("> a", this).append("<div class='button_act'></div>"); 
			})
		},
		buttonOver:function (item){
		      $(".base_text", item).stop(true).animate({color:'#fff'}, 500, 'easeOutSine');
              //$(".button_act", item).stop(true).animate({top:'-109px'}, 650, 'easeOutBounce');
        },
		buttonOut:function (item){
		          $(".base_text", item).stop(true).animate({color:'#535353'}, 350, 'easeOutExpo');
                  //$(".button_act", item).stop(true).animate({top:'-169px'}, 450, 'easeOutExpo');
        },
		subMenuButtonOver:function (item){ 
		      item.stop().animate({"color":"#e72b2b"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      item.stop().animate({"color":"#535353"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});
      
			}
        },
//-----PAGE-----------------------------------------------------------------------------------------------
        pageInit:function (pages){
        },
		currPageAnimate:function (page){
              page.css({left:'1700px'}).stop(true).delay(150).animate({left:'20px'}, 500, "easeOutExpo");
              isSplash = false;
              $(window).trigger('resize'); 
        },
		prevPageAnimate:function (page){
              page.stop(true).animate({left:'-1700px'}, 300, "easeInExpo");
      
        },
		backToSplash:function (){
		      isSplash = true;
              $(window).trigger('resize');        
        },
		pageLoadComplete:function (){ 
		  $('ol.search_list').siblings('h2').css({color:'#000', 'margin-bottom':'25px'});
          //$('ol.search_list').css({width:'580px', 'float':'right'});
          $('.scroll1')
        		.uScroll({
        			axis:'y'
        			,lay:'outside'
        			,duration:600
        			,easing:'easeInOutSine'
        			,step:120
        			,mousewheel:true
    		})
		},
	});
//Loader---------------------------------------------------------------------------------------------------
loadersInit();
function loadersInit(){
        var opts = {
              lines: 17,
              length: 0, 
              width: 10, 
              radius: 25, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $("#webSiteLoader > span");
        website_spinner = new Spinner(opts).spin();
        target.append(website_spinner.el)   
        /////////////////////////////////
        var opts2 = {
              lines: 11,
              length: 0, 
              width: 10, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $("#pageLoader > span");
        page_spinner = new Spinner(opts2).spin();
        target2.append(page_spinner.el) 
}
})


$(window).load(function(){	
    $("#webSiteLoader").delay(1200).animate({opacity:0}, 600, "easeInCubic", function(){
        website_spinner.stop();
        $("#webSiteLoader").remove();
    });
    
    $(".image_resize").image_resize({}); 
    $('.follow-icons a').hoverSprite({onLoadWebSite:true}); 
        
//-----Window resize------------------------------------------------------------------------------------------
$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');
    
    var hashState=window.location.hash
    
    function resize_function(){
    var h_cont = $('header').height();
	var wh = $(window).height();
		m_top = ~~(wh-h_cont)/2;
            if(isSplash){
                //setTimeout(function () {$('#bgImg').stop().animate({'margin-left':'-843px'}, 750, 'easeOutExpo'); }, 450);          
            }else{
                //$('#bgImg').stop().animate({'margin-left':'-957px'}, 350, 'easeInOutExpo');           
            } 
    }
    $(document).resize(
        function(){}
    ).trigger('resize'); 
});