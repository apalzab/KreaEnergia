$(document).ready(function() {

    $('#navbar-main li').click(function(e) {
        e.preventDefault();
        console.log('scroll to' + $(this).data('scroll'));
        var scroll_to = $(this).data('scroll');
        $('html,body').animate({scrollTop: $(scroll_to).position().top}, 1500);
    });

});