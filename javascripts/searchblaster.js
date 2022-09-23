
// keep search options menu open so user can make multiple selections
$(document).on('click', '.dropdown-menu', function (e) {
  if ($(this).hasClass('keep-open-on-click')) {
    e.stopPropagation()
  }
})

// append selected publication type limits to search query

// $("#search_blaster_form").submit(function() {
//  // Let's find the input to check
// $checks = $(":checkbox");
//  var string = $checks.filter("#publication_type_limits input:checkbox:checked").map(function() {
//    return this.value;
//  }).get().join(" OR ");
//  $('#search_blaster_query').val(function(index, value) {
//    return value + " " + string + "";
//  });

// });
