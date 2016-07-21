$(document).ready(function() {
  var weeklyhours = "https://api3.libcal.com/api_hours_grid.php?iid=1176&format=json&weeks=1&callback=?";
  var fourweeks = "https://api3.libcal.com/api_hours_grid.php?iid=1176&format=json&weeks=4&callback=?";

  //read in JSON from libcal
  $.getJSON(fourweeks, function(data) {

    //declare variable inside callback function to store all the HTML   //that we want to output as our table of hours.
    var myHTML = '<table class="table" id="hours_display"><tr class="hours header"><th>Day</th><th>Date</th><th>Open</th><th>Close</th></tr>';

    //for each array of location objects... 

    $.each(data.locations, function(index, location_object) {
      //console.log("location_object " + index);
      //console.log("location_object.name " + location_object.name);
      

      //location_object.weeks contains an array of week_objects
      //loop through each one 
      $.each(location_object.weeks, function(index, week_object) {
        //console.log("week " + index);
        //console.log("week " + week_object)

        //week_objects have sets of properties for each day in the form of day objects
        $.each(week_object, function(day, day_object) {
          //console.log(day);
          
          //add additional class on the day the library is open (the current day)
          var open = day_object.times.currently_open;
          if (open){
                myHTML += '<tr class="hours open">';
              }
          else {
            myHTML += '<tr class="hours">'
          }
          myHTML += '<td>' + day + "</td><td>" + day_object.date + "</td>";
          //console.log("currently open "+ day_object.times.currently_open);
          //console.log("date " + day_object.date);
          //day objects have properties we care about
          $.each(day_object.times.hours, function(index, value) {
            // console.log("set of hours " + index)
            // console.log("from " + value.from);
            //console.log("to " + value.to);
            if (index > 0) {
              myHTML += "<tr><td></td><td></td>";
            }
            myHTML += "<td>" + value.from + "</td><td>" + value.to + "</td></tr>";
          });
              
        });
      });
 myHTML += "</table>";
    });
    $('#week').html(myHTML);
    
  });

});