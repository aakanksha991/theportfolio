$(document).ready(function() {

    var items = ["Front End Engineer","UX Engineer", "User Interface Developer", "Design Prototyper", "GUI Developer", "Front End Developer"],
        $text = $( '#my-job' ),
        delay = 1; //seconds
    
    function loop (delay) {
        $.each( items, function ( i, elm ){
            $text.delay(delay).fadeOut(400);
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn(400);
        });
    }
    loop(delay);

    $( "#off-home, #off-skills, #off-work, #off-about, #off-contact, #off-downloads" ).click(function() {
        $.UIkit.offcanvas.hide([force = false]);
    });
});