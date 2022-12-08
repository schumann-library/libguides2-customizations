$(document).ready(function () {
    
    $(".navbar-toggle").click(function () {

        $("#my_navbar").fadeToggle(100);

    });

    $('.dropdown-toggle').on('click', function () {
        
        $(this).parent().parent().toggleClass('move');
        $(this).lastChild().fadeToggle(0);

    });
    
    $('.return-lvl').on('click', function () {

        $(this).parent().parent().parent().parent().removeClass('move');

    });

});