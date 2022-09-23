$(document).ready(function () {
  // add an additional class to side nav container so we can style it later
  // adjust the size of the nav container
  $('div.s-lg-tabs-side').addClass('landing-page col-md-12 ').removeClass('col-md-3')

  // add a class to side nav container so we can style it later
  $('div.s-lg-tabs-side').addClass('landing-page')

  // create <div> containing text from title attribute of <a> tag and add it after the <a> tag.
  $('#s-lg-guide-tabs a').after(function () {
    return '<summary>' + $(this).attr('title') + '</summary>'
  })

  // remove listing for widget's content box from the menu
  $('#s-lg-guide-tabs ul.list-group.s-lg-boxnav').addClass('hidden')
})
