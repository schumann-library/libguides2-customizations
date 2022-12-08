$(document).ready(function () {
    
    $(".navbar-toggle").click(function () {

        $("#my_navbar").fadeToggle(100);
        $("#main_menu").removeClass('move');

    });

    $('.dropdown-toggle').on('click', function () {
        
        $(this).parent().parent().toggleClass('move');

    });
    
    $('.return-lvl').on('click', function () {

        $(this).parent().parent().parent().parent().removeClass('move');

    });

});