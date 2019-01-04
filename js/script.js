$(window).on("load",function() {
  $(".loader .inner").fadeOut(500, function(){

         $(".loader").fadeOut(750);
  });
})


$(document).ready(function(){
  $('#slides').superslides({

   animation:'fade',
   play:5000,
   pagination:false,
   haschange:true

  });

/*var type = new Typed(".typed",{
   strings: ["Student.","Software Developer."],
   typeSpeed: 70,
   loop: true,
   startDelay: 1000,
   showCursor: false

}); */

$('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
            items: 4
          }
      }
  });



        var skillPosition = $(".skillsSection").offset().top;

      $(window).scroll(function(){

        if(window.pageYOffset > skillPosition - $(window).height()+200){
          $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 160,
                    onStep: function(from, to, percent){
                      $(this.el).find('.percent').text(Math.round(percent));
                    }
                });


        }

      });

      $('#show').on('click',function(){
         $('.first_project').slideToggle('slow');
     });

     $('.first_project .close').on('click',function(){
         $('.first_project').slideToggle('slow');
     });


           $('#second_proj').on('click',function(){
              $('.second_project').slideToggle('slow');
          });

          $('.second_project .close').on('click',function(){
              $('.second_project').slideToggle('slow');
          });

          $('#third_proj').on('click',function(){
             $('.third_project').slideToggle('slow');
         });

         $('.third_project .close').on('click',function(){
             $('.third_project').slideToggle('slow');
         });

         $('#fourth_proj').on('click',function(){
            $('.fourth_project').slideToggle('slow');
        });

        $('.fourth_project .close').on('click',function(){
            $('.fourth_project').slideToggle('slow');
        });

  /*              JQuery code for navigation menu for smooth transition               */

   $("#navigation li a").click(function(e){
     e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html,body").animate({scrollTop:targetPosition - 50},"slow");

   });

    /*              JQuery code for navigation menu to be fixed               */
        const navMenu = $("#navigation");
        const navTop = navMenu.offset().top;

        $(window).on("scroll", stickyNavigation);

        function stickyNavigation() {

          var body = $("body");

          if($(window).scrollTop() >= navTop){
            body.css("padding-top",navMenu.outerHeight() + "px");
            body.addClass("fixedNavigation");
          }
          else{
              body.css("padding-top",0);
            body.removeClass("fixedNavigation");
          }
        }
      //  jQuery.goup();

});
