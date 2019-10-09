
$(function(){

    $('#viewing').delay(1700).animate({
      'opacity' : 1
    })

    $(window).on('load', function(){
         $('#reminder').delay(3350).animate({
          'bottom': -14
        });
        $('#reminder p').delay(3800).animate({
          'opacity': 1  
        });
    });
    
    $('.slide').on('click', function(){
        // $('html, body').animate({
        //   scrollTop : "0px"
        // })
        console.log('yes')
    });

    var btn = $('#btn');
    var win = $(window);
    
    btn.stop().on('mouseover', function(){
      $('#btn img')
          .stop()
            .animate({
              top: 13
            }, 100);
    });
    btn.stop().on('mouseout', function(){
      $('#btn img')
          .stop()
            .animate({
              top: 15
            }, 100);
    });
    btn.on('click', function(){
      $('html, body').animate({
        scrollTop: $('#top').offset().top
      });
    });
    win.bind('scroll', function(){
        if(win.scrollTop() > 300){
          btn.stop().fadeIn(100);
        }else{
          btn.stop().fadeOut(100);
        }
    });
    
    var position1 = $('#top').offset();                                     
    $(window).scroll(function (e) {
        var y = $(this).scrollTop();

        if(y >= position1.top + ($(this).height() * .45)){
            $('#section-1 .point-arrow').animate({
                'height' : '158px'
            }, 600);
        }

        if(y >= $('#section-1').offset().top + ($(this).height() * .45)){
            $('#section-2 #sec-2-content #garcinia-points .point-arrow').animate({
                'height' : '121px'
            }, 600);
            pumpingArrows();
        }

    });      


    function pumpingArrows(){
      $('#section-2 #diagram-inner .left-arrow').animate({
          'left' : '-40px'
        },500).animate({
          'left' : '-30px'
      }, 400, pumpingArrows);

      $('#section-2 #diagram-inner .right-arrow').animate({
        'right' : '-40px'
      },500).animate({
        'right' : '-30px'
      }, 400, pumpingArrows);
    }

    
    $(window).on("load", function(){
        $('#viewing').delay(1000).animate({
            'opacity' : 1
        });
    });
    $('#upsell').on('click', function(){
      $('#preloader').css({'display' : 'block'});
    });

      // var counter = 599;
      var one        = 0;
      var ten        = 0;
      var hundered   = 6;
      var intervalId = setInterval(function(){
                        time();
                      }, .7);

      function time(){
         one--;

           if(one == -1){
              ten = ten - 1;
              one = 0 + 9;
            } 
            if(ten == -1 ){
              hundered = hundered - 1;
              ten = 0 + 9;
            }
            var wholeNum = hundered+''+ten+''+one;
            //console.log(wholeNum);
            if(wholeNum == 250){
              clearInterval(intervalId);
            }

         $('.timer').html('<span>'+hundered+'</span><span>'+ten+'</span><span>'+one+'</span>');

      }
      
      var min    = 0;
      var second = 00;
      var zeroPlaceholder = 0;
      var counterId = setInterval(function(){
                        countUp();
                      }, 1000);

      function countUp () {
          second++;
          if(second == 59){
            second = 00;
            min = min + 1;
          }
          if(second == 10){
              zeroPlaceholder = '';
          }else
          if(second == 00){
              zeroPlaceholder = 0;
          }

          $('.count-up').html(min+':'+zeroPlaceholder+second);
      }

      $('#slider').animate({
          'width' : '143px'
      }, 700);

      $('#ty-slider').animate({
          'width' : '295px'
      }, 700);

      $('#wrapper #banner #steps .step-2 div').css({
          'background' : '#ed145b'
      });

      $('#wrapper #banner #steps .thank-you div').css({
          'background' : '#ed145b'
      });

      $('#pop-box a .close').on('click', function(){
        $('#popover').css('display', 'none')
      });


      $('.active').val();
      $('.active').focus();

      $('#pop-box a .close').on('click', function(){
        $('#popover').css('display', 'none')
      });

      $(':input[type="text"], select').on('focus', function(){
          $(this).addClass('active');
      }).on('blur', function(){
          $(this).removeClass('active');
      })


});
$('.cta a').on('click', function() {
                                    $('html, body').animate({
                                        scrollTop: "0px"
                                    });
                                });

                                // $(document).ready(function() {
                                //     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                                //         disableOn: 700,
                                //         type: 'iframe',
                                //         mainClass: 'mfp-fade',
                                //         removalDelay: 160,
                                //         preloader: false,

                                //         fixedContentPos: false
                                //     });
                                // });
        $("#viewing-lp.viewing a").click(function() {
            $('#form').css("top", "56px")
        });

        (function() {
            var idDisplayOnScroll = document.getElementById('viewing-lp');

            function showOnScroll() {
                if (window.scrollY > 100) {
                    idDisplayOnScroll.style.opacity = 1;
                } else {
                    idDisplayOnScroll.style.opacity = 0;
                }
            }
            window.addEventListener("scroll", showOnScroll);

            $('.close').click(function() {
                $('#viewing-lp').hide();
            });
        })();

        var min = 0;
        var second = 00;
        var zeroPlaceholder = 0;
        var counterId = setInterval(function() {
            countUp();
        }, 1000);

        function countUp() {
            second++;
            if (second == 59) {
                second = 00;
                min = min + 1;
            }
            if (second == 10) {
                zeroPlaceholder = '';
            } else
            if (second == 00) {
                zeroPlaceholder = 0;
            }

            $('.count-up').html(min + ':' + zeroPlaceholder + second);
        }

        $(document).scroll(function() {
            if (window.scrollY > 100) {
                $('#side_arrow').removeClass('side_arrow_up');
                $('#side_arrow').addClass('side_arrow');

            } else {
                $('#side_arrow').removeClass('side_arrow');
                $('#side_arrow').addClass('side_arrow_up');
            }
        })

        $(document).ready(function() {
            //alert("ffffffff");
            //$(window).scrollTop() = 0;
            $('#side_arrow').removeClass('side_arrow');
            $('#side_arrow').addClass('side_arrow_up');
        })


