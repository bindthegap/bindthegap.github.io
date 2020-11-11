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
});
