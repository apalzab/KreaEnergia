$(document).ready(function() {

    $('#navbar-main li').click(function(e) {
        e.preventDefault();
        if (! $('.navbar-toggle').is(':hidden') )
            $('.navbar-toggle').click();

        var scroll_to = $(this).data('scroll');
        $('html,body').animate({scrollTop: $(scroll_to).position().top}, 2500);
    });

});