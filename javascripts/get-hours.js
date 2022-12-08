$(document).ready(function () {
  // callback parameter is not in libcal documentation but it is necessary
  const libcalHours = 'https://api3.libcal.com/api_hours_today.php?iid=1176&lid=0&format=json&callback=?'
  $.getJSON(libcalHours, function (data) {
    // display whether we are currently open or closed
    $.each(data.locations, function (i, hours) {
      //   if(hours.times.currently_open) {
      //    $("#currently-open").append("Currently: OPEN");
      //  } else if (!hours.times.currently_open) {
      //    $("#currently-open").append("Currently: CLOSED");
      //  } else {
      //    $("#currently-open").empty();
      //  }

      // display the Library's Hours
      $('#hours_link').append(': ' + hours.rendered)

      // overwrite link to hours page with the URL from libcal.
      // $("#hours_link").attr("href",hours.url);
    })
  })
})
