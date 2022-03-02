;(function(window,document,$,undefined){

    var hyggee = {
        init: function(){
            var that=this;

            that.headerFn();
            that.section01Fn();
            that.section02Fn();
            that.section03Fn();
            that.section04Fn();
            that.footerFn();
        },

        headerFn:function(){
          
            $('.main-btn').on({
                mouseenter:function(){
                    $('.sub-wrap').stop().slideDown(300)
                }
            });
        
            $('#header').on({
                mouseleave:function(){
                    $('.sub-wrap').stop().slideUp(500);
                }
            });

            $('.goTop-btn').on({
                click:function(event){ 
                    event.preventDefault();
                    $('html,body').stop().animate({scrollTop:0},1000)
                }
            })

            $(window).scroll(function(){
                if( $(window).scrollTop() >= 30 ) {
                    $('.goTop').addClass('addTop');
                }
                else{
                    $('.goTop').removeClass('addTop');
                }
            });
    
        },

        section01Fn:function(){
                    
            var cnt=0;
            var setId=0;
            var setId2=0;
            var z=cnt;

            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }

            function mainSlideFn(){
                $('.slide-wrap').stop().animate({ left:-1903*cnt },600, function(){
                    cnt>4?cnt=0:cnt;
                    cnt<0?cnt=4:cnt;
                    $('.slide-wrap').stop().animate({ left:-1903*cnt },0);
    
                });
                cnt>4?z=0:z=cnt; 
                pageBtnFn();
            }


            function pageBtnFn(){
                $('.page-btn-wrap li').removeClass('addPage');
                $('.page-btn-wrap li').eq(z).addClass('addPage');
            };

            $('.page-btn').each(function(index){
                $(this).on({
                    click: function(){
                        cnt=index;
                        mainSlideFn();
                        timerControlFn();
                        
                    }
                });
            });

            function timerControlFn(){
                clearInterval(setId);
                clearInterval(setId2);
    
                var cnt2 = 0;
                setId2=setInterval(function(){
                    cnt2++;
    
                    if(cnt2>5){
                        nextSlideCountFn();
                        initTimerFn(); 
                        clearInterval(setId2);
                    }
                },1000);
            }
   
            function initTimerFn(){
                setId=setInterval(nextSlideCountFn, 4000);
            }
            initTimerFn();

        },

        section02Fn:function(){
        
        },

        section03Fn:function(){
        
        },
        
        section04Fn:function(){

        },
        footerFn:function(){
        
        }


    };






    hyggee.init();




})(window,document,jQuery);