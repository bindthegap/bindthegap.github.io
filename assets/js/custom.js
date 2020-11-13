jQuery(document).ready(function(){
    /*Smooth scroll*/
    $('[data-toggle="elementscroll"]').on("click", function(){
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top }, 800);
            return false;
        }
    }
    });
    /*End Smooth scroll*/
    jQuery('control-points-section li').click(function(){
        jQuery(this).addClass('active');
    });

    jQuery('#slider-1').owlCarousel({
        loop:true,
        nav: true,
        dots : false,
        margin: 10,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:3}
        }
    });
});
