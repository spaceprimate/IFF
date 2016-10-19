/*
 * MAIN JS FILE
 * 
 */
$( document ).ready(function() {
    var hashTagActive = "";
    $(".scroll").on("click touchstart" , function (event) {
        //alert("clicked");
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            dest = dest - 60;
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 300, 'swing');
            hashTagActive = this.hash;
        }
    });


    $(function(){ 
        var navMain = $("#navbar");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });
});


