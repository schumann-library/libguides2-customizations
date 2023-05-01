// jquery version 1.11.3

$(document).ready(function () {
    
    $(".navbar-toggle").click(function () {
        //fades the navbar in and out of view. the 100 is how many milliseconds it will take to fade in.
        $("#my_navbar").fadeToggle(100);
        //makes sure the move tag is removed from the main menu
        $("#main_menu").removeClass('move');

    });
    //function for opening up the sub menus
    $('.dropdown-toggle').on('click', function () {
        //adds move class to move the main menu to the left off screen
        $(this).parent().parent().toggleClass('move');
        //opens the dropdown list 
        $(this).parent().toggleClass('open');
        //enables the return button
        $(this).lastChild().fadeToggle(0);

    });
    //function to close the current dropdown menu
    $('.return-lvl').on('click', function () {
        //moves the main menu back into view
        $(this).parent().parent().parent().parent().removeClass('move');
        //closes current dropdown menu
        $(this).parent().parent().parent().removeClass('open');

    });

});
