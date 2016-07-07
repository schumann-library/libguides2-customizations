
$(document).ready(function(){

    //create <div> containing text from title attribute of <a> tag and add it after the <a> tag.
    $('#s-lg-guide-tabs a').after( function(){
        return "<summary>"+ $(this).attr('title') + "</summary>";
        });

    //remove listing for widget's content box from the menu
    $('#s-lg-guide-tabs ul.list-group.s-lg-boxnav').addClass("hidden");

});
