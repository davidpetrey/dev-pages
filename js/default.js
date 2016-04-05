// Default JavaScript Functions and Initiations
$(document).ready(function() {

  // Functions go here...

  //  TOGGLE .ACTIVE CLASS FOR NAV
    $('#nav a').click(function(){

        $('#nav .active').removeClass('active'); // remove the class from the currently selected
        $(this).addClass('active'); // add the class to the newly clicked link

    });

  
}); // end document ready

