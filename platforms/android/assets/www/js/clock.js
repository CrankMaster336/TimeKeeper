/*! simpleClock v1.0 ticktoo.com | Licensed under CC BY-NC 3.0 */

/* If you like simpleClock, like us on Facebook! http://facebook.com/ticktoo ;) */

/*
---------------- JS ----------------

    $(document).ready(function() {
      $('#clock').simpleClock();
    });    

*/


(function ($) {

  $.fn.simpleClock = function () {

    // Define weekdays and months
    var weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
    var months = ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    
    // getTime - Where the magic happens ...
    function getTime() {
      var date = new Date(),
      hour = date.getHours();
      return {
        day: date.getDay(),
        date: date.getDate(),
        month: months[date.getMonth()],
        hour: appendZero(hour),
        minute: appendZero(date.getMinutes()),
        second: appendZero(date.getSeconds())
      };
    }
    // appendZero - If the number is less than 10, add a leading zero. 
    function appendZero(num) {
      if (num < 10) {
        return "0" + num;
      }
      return num;
    }

    // refreshTime - Build the clock.
    function refreshTime() {
      var now = getTime();
      $('#month').html(now.month + ' ' + now.day);
      $('#time').html("<span class='hour'>" + now.hour + ":</span>" + "<span class='minute'>" + now.minute + "</span>");
      $('#time2').html("<span>" + now.hour + ":</span>" + "<span>" + now.minute + ":</span><span>"+ now.second + "</span>");
    }

    // Tick tock - Run the clock.
    refreshTime();
    setInterval(refreshTime, 1000);

  };
})(jQuery);